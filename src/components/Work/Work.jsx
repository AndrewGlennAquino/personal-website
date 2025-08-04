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
          company="Freelance Full Stack Developer"
          title="Self-Employed"
          dateStarted="March 2025"
          dateEnded="Present"
          description="Design and develop responsive websites for local businesses using TypeScript, React.js, Tailwind CSS, Node.js, and Express.js. Collaborate directly with clients to define requirements and consult on design decisions that best align with their brand and audience. Deliver user-focused designs that comply with accessibility guidelines (WCAG) and follow SEO best practices. Deploy web applications leveraging Cloudflare DNS, Netlify, and Render to deliver secure, low cost, and scalable hosting for clients."
        />
        <Experience
          company="Revature"
          title="Software Engineer"
          dateStarted="December 2024"
          dateEnded="Present"
          description="Participated in an immersive backend development training reinforcing Java concepts, Spring Boot, and SQL. Designed, developed, and tested Spring based projects, strengthening understanding of RDBMS industry practices. Passed rigorous technical assessments, validating a deep understanding of Java, Spring, and SQL concepts. Structured training on client-specific tech stacks, demonstrating seamless transition into development teams and production environments."
        />
      </motion.div>
    </section>
  );
}

export default Work;
