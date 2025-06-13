import "./Work.css";
import { motion } from "motion/react";
import TypeWritter from "../TypeWritter/TypeWritter.jsx";

// Component that creates an experience card
function Experience({ company, title, dateStarted, dateEnded, description }) {
  // Animation variatns for card
  const cardVariants = {
    init: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: "linear" } },
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
        <h4>{`${dateStarted} - ${dateEnded}`}</h4>
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
      transition: { delayChildren: 0.125, staggerChildren: 0.5 },
    },
  };

  return (
    <section id="work">
      <motion.h1
        initial="init"
        whileInView="animate"
        viewport={{ amount: "all", once: true }}
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
          company="Coffee Haus"
          title="Software Developer"
          dateStarted="June 2025"
          dateEnded="Present"
          description="I'm building a custom website for a local coffee and bubble tea shop. The site is built with React and styled using Tailwind CSS, which I’m actively learning and applying throughout the project. I’m using Motion to add smooth, engaging animations that align with the shop’s fun vibe. As I work, I focus on best practices for responsive design, performance optimization, and accessibility."
        />
        <Experience
          company="Fit Haus Mazamitla"
          title="Software Developer"
          dateStarted="June 2025"
          dateEnded="Present"
          description="I'm building a responsive single-page website for a local entrepreneur's gym using React and Vanilla CSS. I'm using Motion to implement smooth, engaging animations that enhance user experience. I focus on optimizing the site for performance and accessibility across devices."
        />
        <Experience
          company="Revature"
          title="Software Engineer"
          dateStarted="February 2025"
          dateEnded="Present"
          description="Train in enterprise-level software development with a focus on Java, SQL, and Spring framework. Develop RESTful APIs using Spring Boot and integrated backend services. Design database schemas and write efficient SQL queries for data manipulation. Utilize Maven in development workflow."
        />
      </motion.div>
    </section>
  );
}

export default Work;
