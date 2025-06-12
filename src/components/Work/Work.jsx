import "./Work.css";
import { motion } from "motion/react";
import TypeWritter from "../TypeWritter/TypeWritter.jsx";

// Component that creates an experience card
function Experience({ company, title, dateStarted, dateEnded, description }) {
  // Animation variatns for card
  const cardVariants = {
    init: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: "linear" }}
  };

  return (
    <motion.div className="experience-card" variants={cardVariants}>
      <div className="experience-card-decoration">
        <div className="experience-card-rod"></div>
      </div>

      <div className="experience-card-text">
        <h2>{company}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{`${dateStarted}-${dateEnded}`}</h4>
      </div>
    </motion.div>
  );
}

// Component that creates the work experience section
function Work() {
  // Animation variants for typewritter elements
  const typewritterVariants = {
    init: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.125, staggerChildren: 0.125 },
    },
  };

  // Animation variants for card container element
  const cardContainerVariants = {
    init: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.125, staggerChildren: 0.5 }
    }
  }

  return (
    <section id="work">
      <motion.h1
        initial="init"
        whileInView="animate"
        viewport={{ amount: "all" }}
        variants={typewritterVariants}
      >
        <TypeWritter string={"Work experience"} />
      </motion.h1>

      <motion.div 
        className="experience-cards-container"
        initial="init"
        whileInView="animate"
        variants={cardContainerVariants}
      >
        <Experience
          company="Testing"
          title="Tester"
          dateStarted="0"
          dateEnded="Present"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia consectetur, adipisci non perspiciatis veritatis porro dolores minus fugiat quaerat, vero saepe in, cum tenetur magni! Fuga voluptatum eos iste."
        />
        <Experience
          company="Testing"
          title="Tester"
          dateStarted="0"
          dateEnded="Present"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia consectetur, adipisci non perspiciatis veritatis porro dolores minus fugiat quaerat, vero saepe in, cum tenetur magni! Fuga voluptatum eos iste."
        />
        <Experience
          company="Testing"
          title="Tester"
          dateStarted="0"
          dateEnded="Present"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia consectetur, adipisci non perspiciatis veritatis porro dolores minus fugiat quaerat, vero saepe in, cum tenetur magni! Fuga voluptatum eos iste."
        />
        <Experience
          company="Testing"
          title="Tester"
          dateStarted="0"
          dateEnded="Present"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia consectetur, adipisci non perspiciatis veritatis porro dolores minus fugiat quaerat, vero saepe in, cum tenetur magni! Fuga voluptatum eos iste."
        />
      </motion.div>
    </section>
  );
}

export default Work;
