import "./Work.css";
import { motion } from "motion/react";
import TypeWritter from "../TypeWritter/TypeWritter.jsx";

function Work() {
  // Animation variants for typewritter elements
  const typewritterVariants = {
    init: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.125, staggerChildren: 0.125 },
    },
  };

  return (
    <section id="work-container">
      <motion.h1
        initial="init"
        whileInView="animate"
        viewport={{ amount: "all" }}
        variants={typewritterVariants}
      >
        <TypeWritter string="Work experience" />
      </motion.h1>

      
    </section>
  );
}

export default Work;
