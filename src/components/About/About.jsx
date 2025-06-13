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
          variants={opacityVariants}
        >
          Nice to meet you! I'm Andrew and I'm a software developer. I recently
          graduated from the University of Wisconsin-Madison with a Bachelor of
          Science in Computer Science. I'm currently employed as a contractor
          for{" "}
          <motion.a
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 1.25 }}
            href="https://www.revature.com/"
            target="_blank"
          >
            Revature.
          </motion.a>{" "}
          I also develop websites for entrepreneurs, local businesses, and
          anyone who wants one! <br />
          <br /> In my spare time when my fingers are not on a keyboard, I stay
          active, and I'm currently training for a marathon. I'm a hardcore fan
          of professional basketball and boxing, which are sports I played
          in high school and college respectively.
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
