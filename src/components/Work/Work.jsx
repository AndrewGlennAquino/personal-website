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
          description="Build a custom website for a local coffee and bubble tea shop using React and styled using Tailwind CSS. Use Motion to add fun animations that align with the shop’s comforting vibe. Focus on the best practices for responsive design and accessibility."
        />
        <Experience
          company="Fit Haus Mazamitla"
          title="Software Developer"
          dateStarted="June 2025"
          dateEnded="Present"
          description="Build a responsive single-page website for a local entrepreneur's gym using React and Tailwind CSS. Use Motion to implement smooth, engaging animations that catch the users attention. Consistently test application on different devices to guarantee responsive design."
        />
        <Experience
          company="Revature"
          title="Software Engineer"
          dateStarted="February 2025"
          dateEnded="Present"
          description="Train in enterprise-level software development with a focus on Java, SQL, and the Spring framework. Develop RESTful APIs using Spring Boot and integrated backend services. Design database schemas and write efficient SQL queries for data manipulation. Utilize Maven in development workflow."
        />
      </motion.div>
    </section>
  );
}

export default Work;
