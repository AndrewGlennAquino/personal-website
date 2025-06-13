import "./Contact.css";
import { useState } from "react";
import { motion } from "motion/react";
import openInNew from "../../assets/images/open-in-new-icon.svg";
import githubIcon from "../../assets/images/github-icon.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon.jsx";

function Contact() {
  const [clicked, setClicked] = useState(false);

  const contactVariants = {
    init: { rotate: "-1deg" },
    animate: {
      rotate: "1deg",
      transition: {
        duration: 0.125,
        delay: 0.125,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
      },
    },
    scale: { scale: 1.15 },
  };

  const handleClick = () => {
    navigator.clipboard.writeText("andrewglennaquino@gmail.com");

    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  return (
    <section id="contact">
      <motion.a
        href="mailto:andrewglennaquino@gmail.com"
        onClick={handleClick}
        initial="init"
        animate="animate"
        whileHover="scale"
        whileTap="scale"
        variants={contactVariants}
      >
        <h1>
          {clicked ? (
            "Email copied"
          ) : (
            <>
              {"Contact me"} <img src={openInNew} />
            </>
          )}
        </h1>
      </motion.a>

      <ul>
        <p>or here!</p>
        <SocialMediaIcon
          icon={githubIcon}
          url="https://github.com/AndrewGlennAquino"
          alt="Github"
        />
        <SocialMediaIcon
          icon={linkedinIcon}
          url="https://www.linkedin.com/in/andrew-glenn-aquino/"
          alt="Linkedin"
        />
      </ul>
    </section>
  );
}

export default Contact;
