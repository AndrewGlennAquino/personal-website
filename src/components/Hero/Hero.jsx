import { motion } from "motion/react";
import "./Hero.css";
import TypeWritter from "../TypeWritter/TypeWritter.jsx";
import WireframeSphere from "../WireframeSphere/WireframeSphere.jsx";

// Hero component that holds name, title, and animated moon
function Hero() {
  // Animation variants for header elements
  const headerVariants = {
    init: { opacity: 0 },
    animate: { opacity: 1, transition: { delayChildren: 1, staggerChildren: 0.125 } },
    animateDelay: {
      opacity: 1,
      transition: { delayChildren: 4 },
    },
  };

  // Animation variants for span elements
  const spanVariants = {
    init: { opacity: 0 },
    animate: { opacity: 1, transition: { opacity: { duration: 0 } } },
    animateDelay: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "linear"
      }
    },
  };

  return (
    <section className="hero-container">
      <figure className="sphere-container">
        <WireframeSphere />
      </figure>

      <div className="hero-container-text">
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
    </section>
  );
}

export default Hero;
