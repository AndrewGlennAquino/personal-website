import { motion } from "motion/react";
import "./Hero.css";
import Moon from "../Moon/Moon.jsx";

// Hero component that holds name, title, and animated moon
function Hero() {
  // Animation variants for name
  const nameVariants = {
    typing: {
      width: "fit-content",
      transition: {
        duration: 1.5,
        delay: 1.5,
        ease: "linear",
      },
    },
    cursor: {
      borderColor: "rgba(240, 240, 240, 0)",
      transition: {
        duration: 0.5,
        ease: "linear",
        repeat: 6,
        repeatType: "reverse",
      },
    },
  };

  // Animation variants for title
  const titleVariants = {
    typing: {
      width: "fit-content",
      transition: {
        duration: 1.5,
        delay: 5.5,
        ease: "linear",
      },
    },
    cursor: {
      borderColor: "rgba(240, 240, 240, 1)",
      transition: {
        duration: 0.5,
        delay: 3.5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }

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
          Software Developer
        </motion.h2>
      </div>

      <figure className="moon-container">
        <Moon />
      </figure>
    </section>
  );
}

export default Hero;
