import "./Projects.css";
import { motion } from "motion/react";
import TypeWritter from "../TypeWritter/TypeWritter";
import openInNewIcon from "../../assets/images/open-in-new-icon.png";
import tempImage from "../../assets/images/placeholder.jpg";

/**
 * Animated card component for projects
 * 
 * @param {{string, string, img, string}} props Project name, description, image, and Github URL
 */
function Project({ name, description, image, url }) {
  const projectVariants = {
    animate: { backgroundColor: "var(--primary-color)" },
    scale: { scale: 1.05 },
  };

  // Return animated project card
  return (
    <a href={url} target="_blank">
      <motion.article
        className={`project ${name}`}
        whileHover={["animate", "scale"]}
        whileTap={["animate", "scale"]}
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
          <div className={`project-image`}>
            <img
              src={image}
              alt={`Screenshot from project ${name}`}
            />
          </div>
          <h2>
            {name}
            <img
              src={openInNewIcon}
              alt="Open project in new tab"
            />
          </h2>
          <p>{description}</p>
        </motion.div>
      </motion.article>
    </a>
  );
}

// Component for projects container
function Projects() {
  // Animation variants for typewritter elements
  const typewritterVariants = {
    init: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.125, staggerChildren: 0.125 },
    },
  };

  const tempName = "Project";
  const tempDesc =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam minus, provident accusantium quis veritatis labore dolore quam! Doloribus cumque praesentium veritatis exercitationem, eos perspiciatis velit delectus est ipsam nihil aliquam.";
  const tempGithubUrl = "#";

  return (
    <section id="projects">
      <motion.h1
        initial="init"
        whileInView="animate"
        viewport={{ amount: "all" }}
        variants={typewritterVariants}
      >
        <TypeWritter string="Projects" />
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
        <Project
          name={tempName}
          description={tempDesc}
          image={tempImage}
          url={tempGithubUrl}
        />
        <Project
          name={tempName}
          description={tempDesc}
          image={tempImage}
          url={tempGithubUrl}
        />
        <Project
          name={tempName}
          description={tempDesc}
          image={tempImage}
          url={tempGithubUrl}
        />
        <Project
          name={tempName}
          description={tempDesc}
          image={tempImage}
          url={tempGithubUrl}
        />
      </motion.div>
    </section>
  );
}

export default Projects;
