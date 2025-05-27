import "./Hero.css";
import Headshot from "../../assets/images/headshot.png";

function Hero() {
  // Create array of stars, and assign them random positions within hero
  const stars = [];
  for (let i = 0; i < 100; i++) {
    let randX = Math.random() * 100 + "%";
    let randY = Math.random() * 100 + "%";
    let randDelay = Math.random() * 1 + "s";
    stars.push(
      <div
        className="star"
        style={{ left: randX, top: randY, animationDelay: randDelay }}
      ></div>
    );
  }

  return (
    <section className="hero-container">
      <div className="stars-container">{stars}</div>
    </section>
  );
}

export default Hero;
