import "./Hero.css";
import Moon from "../Moon/Moon.jsx";

function Hero() {
  return (
    <section className="hero-container">
      <div className="title-container">
        <h1>Andrew Glenn Aquino</h1>
        <h2>Software Developer</h2>
      </div>

      <div className="moon-container">
        <Moon />
      </div>
    </section>
  );
}

export default Hero;
