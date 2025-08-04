import "./Projects.css";
import { motion } from "motion/react";
import TypeWritter from "../TypeWritter/TypeWritter";
import openInNewIcon from "../../assets/images/open-in-new-icon.svg";
import brewNBubbleScreenshot from "../../assets/images/brew-n-bubble-screenshot.png";
import fitHausHero from "../../assets/images/fit-haus-hero.png";
import personalPortfolioHero from "../../assets/images/personal-portfolio-hero.png";
import socialMediaBlogApi from "../../assets/images/social-media-blog-api.png";

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
            <img src={image} alt={`Screenshot from project ${name}`} />
          </div>

          <div className="project-text">
            <h2>
              {name}
              <img src={openInNewIcon} alt="Open project in new tab" />
            </h2>
            <p>{description}</p>
          </div>
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

  return (
    <section id="projects">
      <motion.h1
        initial="init"
        whileInView="animate"
        viewport={{ amount: "all", once: true }}
        variants={typewritterVariants}
      >
        <TypeWritter string="Projects" />
      </motion.h1>

      {/* Project card container */}
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
          name={"Brew 'n Bubble Website"}
          description={
            "Produced an accessible responsive website for Brew 'n Bubble, a local coffee and bubble tea store. Aimed to match the store’s cozy aesthetic, drawing themes from the store's interior as inspiration for component design. Adhere to Web Content Accessibility Guidelines (WCAG) and design laws of UX/UI for optimized user experience and SEO."
          }
          image={brewNBubbleScreenshot}
          url={"https://github.com/AndrewGlennAquino/brew-n-bubble-website"}
        />
        <Project
          name={"Fit Haus Mazamitla Website"}
          description={
            "Delivered a responsive, single page application for a local entrepreneur’s gym business in Mazamitla, Mexico. Focus on bold fonts, flat edges, and fast animations for a sporty aesthetic, inspired by websites from sport apparel brands. Collaborated closely with business owner for stylistic decisions that aligned with the target audience, which helped optimize SEO."
          }
          image={fitHausHero}
          url={"https://github.com/AndrewGlennAquino/fit-haus-website"}
        />
        <Project
          name={"Personal Portfoio"}
          description={
            "The website you are viewing now. Built using React, Vanilla CSS, React Three Fiber, and Motion for animation."
          }
          image={personalPortfolioHero}
          url={"https://github.com/AndrewGlennAquino/personal-website"}
        />
        <Project
          name={"Social Media Blog API"}
          description={
            "Constructed a Social Media API leveraging Spring Boot and REST techniques. Implemented user registration, authentication, and message CRUD operations using optimized queries to minimize search time. Utilized Spring Boot’s dependency injection and efficient database management techniques to streamline data persistence, improve performance, and code readability."
          }
          image={socialMediaBlogApi}
          url={
            "https://github.com/AndrewGlennAquino/AndrewGlennAquino-pep-spring-project"
          }
        />
      </motion.div>
    </section>
  );
}

export default Projects;
