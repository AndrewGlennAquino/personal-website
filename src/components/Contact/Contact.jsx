import "./Contact.css";
import { motion } from "motion/react";
import openInNew from "../../assets/images/open-in-new-icon.svg";
import githubIcon from "../../assets/images/github-icon.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon.jsx";

function Contact() {
  const contactVariants = {
    init: { rotate: "-1deg" },
    animate: { rotate: "1deg", transition: { duration: 0.125, delay: 0.125, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 } },
    scale: { scale: 1.25 },
  };

  return (
    <section id="contact">
      <motion.a
        href="#"
        initial="init"
        animate="animate"
        whileHover="scale"
        whileTap="scale"
        variants={contactVariants}
      >
        <h1>
          Contact me here <img src={openInNew} />
        </h1>
      </motion.a>

      <ul>
        <p>or here!</p>
        <SocialMediaIcon icon={githubIcon} url="#" alt="Github" />
        <SocialMediaIcon icon={linkedinIcon} url="#" alt="Linkedin" />
      </ul>
    </section>
  );
}

export default Contact;
