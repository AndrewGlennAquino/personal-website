import "./Projects.css";
import { motion } from "motion/react";
import TypeWritter from "../TypeWritter/TypeWritter";
import openInNewIcon from "../../assets/images/open-in-new-icon.svg";
import githubWallpaper from "../../assets/images/github-wallpaper.jpg";
import fitHausHero from "../../assets/images/fit-haus-hero.png"
import personalPortfolioHero from "../../assets/images/personal-portfolio-hero.png"
import socialMediaBlogApi from "../../assets/images/social-media-blog-api.png"

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
          name={"Coffee Haus Website"}
          description={
            "Current project for Coffee Haus, a local coffee and bubble tea store. Responsive, single-page application built using React, Tailwind CSS, and Motion for animations."
          }
          image={githubWallpaper}
          url={"https://github.com/AndrewGlennAquino/coffee-haus-website"}
        />
        <Project
          name={"Fit Haus Mazamitla Website"}
          description={
            "Current project for responsive, single-page application for a local entrepreneur's premium gym in Mazamitla, Jalisco, Mexico. Built using React, Vanilla CSS, and Motion for animations."
          }
          image={fitHausHero}
          url={"https://github.com/AndrewGlennAquino/fit-haus-mazamitla-website"}
        />
        <Project
          name={"Personal Portfoio"}
          description={"The website you are viewing now. Built using React, Vanilla CSS, React Three Fiber, and Motion for animation."}
          image={personalPortfolioHero}
          url={"https://github.com/AndrewGlennAquino/personal-website"}
        />
        <Project
          name={"Social Media Blog API"}
          description={"Backend application built in Java for a hypothetical social media app. Leverage the use of the Spring framework to perform convential data manipulation logic for input supplied from a front end."}
          image={socialMediaBlogApi}
          url={"https://github.com/AndrewGlennAquino/AndrewGlennAquino-pep-spring-project"}
        />
      </motion.div>
    </section>
  );
}

export default Projects;
