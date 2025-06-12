import { useState } from "react";
import { motion } from "motion/react";
import "./Nav.css";

// Hamburger menu navigation component
function Nav() {
  const [clicked, setClicked] = useState(false); // Holds state of hamburger menu button click

  // Arrays that hold the routes and link names
  const links = ["Home", "About me", "Projects", "Work experience", "Skills"];
  const routes = ["#hero-container", "#about-container", "#projects-container", "#work-container", "#skills-container"];

  // Function that handles hamburger-menu click
  function handleClick() {
    setClicked(!clicked);
  }

  // Function that creates links with animated bottom border
  function createLinks(links, routes) {
    return routes.map((route, index) => (
      <motion.li
        key={`${links[index]}-${route}`}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 1.25 }}
      >
        <a href={route}>{links[index]}</a>
      </motion.li>
    ));
  }

  // Animation variants for top and bottom stack divs
  const topBottomVariants = {
    openTop: { y: "0.75rem", rotate: "45deg" },
    openBottom: { y: "-0.75rem", rotate: "-45deg" },
    animateHover: { x: "0.5rem" },
  };

  // Animation variants for middle stack div
  const middleVariants = {
    openMiddle: { x: "-1rem", opacity: 0 },
  };

  // Animation variants for links container
  const linksVariants = {
    init: { opacity: 0, display: "none" },
    animate: { opacity: 1, display: "block" },
  };

  /**
   * On button click, set clicked state to true or false.
   * On state change, hover and click animations occur depending on variants.
   */
  return (
    <motion.nav 
      className="nav-container"
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      animate={clicked ? {backgroundColor: "var(--transparent-background-color)"} : null }
      variants={linksVariants}
    >
      <motion.aside
        className="links-container"
        initial="init"
        animate={clicked ? "animate" : null}
        variants={linksVariants}
      >
        <ul>{createLinks(links, routes)}</ul>
      </motion.aside>

      <motion.button
        className="hamburger-menu"
        onClick={handleClick}
        whileHover={clicked ? null : "animateHover"}
      >
        <motion.div
          className="stack-top"
          animate={clicked ? "openTop" : null}
          variants={topBottomVariants}
        ></motion.div>

        <motion.div
          className="stack-middle"
          animate={clicked ? "openMiddle" : null}
          variants={middleVariants}
        ></motion.div>

        <motion.div
          className="stack-bottom"
          animate={clicked ? "openBottom" : null}
          variants={topBottomVariants}
        ></motion.div>
      </motion.button>
    </motion.nav>
  );
}

export default Nav;
