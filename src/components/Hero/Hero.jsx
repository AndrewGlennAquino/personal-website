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
    let randX = Math.random() * 100 + "%";
    let randY = Math.random() * 100 + "%";
    let randDelay = Math.random() * 1 + "s";

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
  createStars(stars, 150);

  return (
    <section className="hero-container">
      <div className="stars-container">{stars}</div>
      <h1>Andrew Glenn Aquino</h1>
      <p>Software Developer</p>
      <img src={Headshot} />
    </section>
  );
}

export default Hero;
