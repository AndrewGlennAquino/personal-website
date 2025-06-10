import "./Projects.css";
import { motion } from "motion/react";
import TypeWritter from "../TypeWritter/TypeWritter";

// Animated card component for projects
function Project({ projectName, projectDescription }) {
  const projectVariants = {
    init: {},
    animate: { backgroundColor: "var(--primary-color)" },
    scale: { scale: 1.05 },
  };

  return (
    <motion.article
      className={`project ${projectName}`}
      init="init"
      whileHover={["animate", "scale"]}
    >
      <motion.div
        className="blurred-bg"
        variants={projectVariants}
      ></motion.div>

      <motion.div
        className="project-contents"
        whileHover="scale"
        variants={projectVariants}
      >
        <div className={`project-image ${projectName}-image`}></div>
        <h2>{projectName}</h2>
        <p>{projectDescription}</p>
      </motion.div>
    </motion.article>
  );
}

// Component for projects container
function Projects() {
  // Animation variants for typewritter header elements
  const headerVariants = {
    init: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.125, staggerChildren: 0.125 },
    },
  };

  // Animation variants for typewritter span elements
  const spanVariants = {
    init: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0 } },
  };

  const tempName = "Project";
  const tempDesc =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam minus, provident accusantium quis veritatis labore dolore quam! Doloribus cumque praesentium veritatis exercitationem, eos perspiciatis velit delectus est ipsam nihil aliquam.";

  return (
    <section id="projects-container">
      <motion.h1
        initial="init"
        whileInView="animate"
        viewport={{ amount: "all" }}
        variants={headerVariants}
      >
        <TypeWritter string="Projects" variants={spanVariants} />
      </motion.h1>

      <motion.div
        className="projects"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.125,
            duration: 1.5,
          },
        }}
      >
        <Project projectName={tempName} projectDescription={tempDesc} />
        <Project projectName={tempName} projectDescription={tempDesc} />
        <Project projectName={tempName} projectDescription={tempDesc} />
        <Project projectName={tempName} projectDescription={tempDesc} />
      </motion.div>
    </section>
  );
}

export default Projects;
