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
    // animateDelay: { opacity: 1, transition: { opacity: { duration: 0 } } },
  };

  return (
    <section className="hero-container">
      <div className="title-container">
        <motion.h1
          initial={{ width: "0%" }}
          animate={["typing", "cursor"]}
          variants={nameVariants}
        >
          Andrew Glenn Aquino
        </motion.h1>
        
        <motion.h2
          initial={{ width: "0%", borderColor: "rgba(240, 240, 240, 0)" }}
          animate={["typing", "cursor"]}
          variants={titleVariants}
        >
          <TypeWritter string={"Software Developer"} variants={spanVariants} />
        </motion.h2>
      </div>

      <figure className="moon-container">
        <Moon />
      </figure>
    </section>
  );
}

export default Hero;
