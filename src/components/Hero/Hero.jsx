import { motion } from "motion/react";
import "./Hero.css";
import SolarSystem from "../SolarSystem/SolarSystem.jsx";

// Animated typewritter component
function TypeWritter({ string, variants }) {
  const charArray = string.split("");
  return charArray.map((char, index) => (
    <motion.span key={`${char}-${index}`} variants={variants}>
      {char}
    </motion.span>
  ));
}

// Hero component that holds name, title, and animated moon
function Hero() {
  // Animation variants for header elements
  const headerVariants = {
    init: {},
    animate: { opacity: 1, transition: { staggerChildren: 0.125 } },
    animateDelay: {
      opacity: 1,
      transition: { staggerChildren: 0.125, delayChildren: 4.5 },
    },
  };

  // Animation variants for span elements
  const spanVariants = {
    init: { opacity: 0 },
    animate: { opacity: 1, transition: { opacity: { duration: 0 } } },
    animateDelay: { opacity: 1, transition: { opacity: { duration: 0 } } },
  };

  return (
    <section className="hero-container">
      <div className="title-container">
        <motion.h1 initial="init" animate="animate" variants={headerVariants}>
          <TypeWritter string={"Andrew Glenn Aquino"} variants={spanVariants} />
        </motion.h1>

        <motion.h2
          initial="init"
          animate="animateDelay"
          variants={headerVariants}
        >
          <TypeWritter string={"Software Developer"} variants={spanVariants} />
        </motion.h2>
      </div>

      <figure className="moon-container">
        <SolarSystem />
      </figure>
    </section>
  );
}

export default Hero;
