import "./About.css";
import { motion, useTime, useTransform } from "motion/react";
import TypeWritter from "../TypeWritter/TypeWritter.jsx";
import headshotImage from "../../assets/images/headshot.png";

// About section component
function About() {
  /**
   * Motion hooks that use gets the time every frame to transform the rotating background
   * from 0deg to 360 deg in 10 seconds
   */
  const time = useTime();
  const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, transparent 75%, var(--primary-color), transparent)`;
  });

  // Animation variants for typewritter elements
  const typewritterVariants = {
    init: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.125, staggerChildren: 0.125 },
    },
  };

  // Animation variants for p and image elements
  const opacityVariants = {
    init: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.125, duration: 1.5 } },
  };

  return (
    <section id="about">
      <div className="about-container-text">
        <motion.h1
          initial="init"
          whileInView="animate"
          viewport={{ amount: "all", once: true }}
          variants={typewritterVariants}
        >
          <TypeWritter string={"About me"} />
        </motion.h1>

        <motion.p
          initial="init"
          whileInView="animate"
          viewport={{ amount: "all" }}
          variants={opacityVariants}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          officia rerum reiciendis reprehenderit accusamus eum tenetur quos
          dolore. Quasi rem exercitationem, quaerat voluptatibus odit itaque
          atque voluptates eius minima pariatur.
        </motion.p>
      </div>

      <motion.figure
        className="headshot-container"
        style={{ background: rotatingBg }}
        initial="init"
        whileInView="animate"
        variants={opacityVariants}
      >
        <div className="headshot-wrapper">
          <img src={headshotImage} alt="Image of myself" />
        </div>
      </motion.figure>
    </section>
  );
}

export default About;
