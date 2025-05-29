import "./Hero.css";
import Headshot from "../../assets/images/headshot.png";

/**
 * Function that randomly generates the position and animation delay for
 * a specified number of stars in the hero
 *
 * @param { Array } starsArray array of stars for the hero
 * @param { Number } numStars number of stars for the hero
 */
function createStars(starsArray, numStars) {
  for (let i = 0; i < numStars; i++) {
    // Randomly generate x, y positions and delay time
    let randX = Math.random() * 100 + "%";
    let randY = Math.random() * 100 + "%";
    let randDelay = Math.random() * 2 + "s";

    // Create a new star div element with random values and push to array
    starsArray.push(
      <div
        className="star"
        style={{ left: randX, top: randY, animationDelay: randDelay }}
      ></div>
    );
  }
}

function Hero() {
  // Creates an array of randomly generated stars for hero
  const stars = [];
  createStars(stars, 500);

  return (
    <section className="hero-container">
      <div className="stars-container">{stars}</div>

      <div className="title-container">
        <h1>Andrew Glenn Aquino</h1>
        <h2>Software Developer</h2>
      </div>

      <div className="image-container">
        <div className="image-wrapper"></div>
      </div>
    </section>
  );
}

export default Hero;
