import { motion } from "motion/react";
import "./Hero.css";
import TypeWritter from "../TypeWritter/TypeWritter.jsx";
import WireframeSphere from "../WireframeSphere/WireframeSphere.jsx";
import githubIcon from "../../assets/images/github-icon.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";

/**
 * Component that creates an animated social media button
 *
 * @param {img, string, string} props Props for image, url, and name
 */
function SocialMediaIcon({ icon, url, alt }) {
  // Animation variants for icons
  const iconVariants = {
    init: { opacity: 0.5 },
    animate: { opacity: 1, scale: 1.5 },
  };

  return (
    <motion.li
      initial="init"
      whileHover="animate"
      whileTap="animate"
      variants={iconVariants}
    >
      <a href={url} target="_blank">
        <img src={icon} alt={`${alt} icon for link`} />
      </a>
    </motion.li>
  );
}

// Hero component that holds name, title, and animated moon
function Hero() {
  // Animation variants for typewritter elements
  const typewritterVariants = {
    init: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 1, staggerChildren: 0.125 },
    },
  };

  // Animation variants that manipulate opacity
  const opacityVariants = {
    init: { opacity: 0 },
    animateOpacity: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 4,
        ease: "linear",
      },
    },
  };

  return (
    <section id="home">
      <figure className="sphere-container">
        <WireframeSphere />
      </figure>

      <div className="hero-container-text">
        <motion.h1
          initial="init"
          animate="animate"
          variants={typewritterVariants}
        >
          <TypeWritter string={"Andrew Glenn Aquino"} />
        </motion.h1>

        <motion.h2 initial="init" animate="animateOpacity" variants={opacityVariants}>
          Software Developer
        </motion.h2>

        <motion.ul initial="init" animate="animateOpacity" variants={opacityVariants}>
          <SocialMediaIcon icon={githubIcon} url="#" alt="Github" />
          <SocialMediaIcon icon={linkedinIcon} url="#" alt="Linkedin" />
        </motion.ul>
      </div>
    </section>
  );
}

export default Hero;
