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
          company="Freelance Front-End Developer"
          title="Self-Employed"
          dateStarted="March 2025"
          dateEnded="Present"
          description="Design and develop responsive websites for local businesses using React, Tailwind CSS, and various React libraries. Collaborate with business owners to gather requirements and assets. Deliver user-focused designs that comply with Web Content Accessibility Guidelines (WCAG). Deploy products using Github Pages with custom domains registered through Cloudflare, ensuring security and no overhead expenses for the business owner."
        />
        <Experience
          company="Revature"
          title="Software Engineer"
          dateStarted="December 2024"
          dateEnded="Present"
          description="Gained hands-on experience with Spring and SQL, and reinforced Java proficiency through structured training. Designed, developed, and tested Spring-based projects, demonstrating understanding of backend development and database integration practices. Passed multiple rigorous assessments, validating a deep understanding of Java, Spring, and SQL concepts. Structured training on client-specific tech stacks for seamless transition into development teams."
        />
      </motion.div>
    </section>
  );
}

export default Work;
