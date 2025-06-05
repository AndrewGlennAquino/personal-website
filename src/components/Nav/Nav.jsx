import { useState } from "react";
import { motion } from "motion/react";
import "./Nav.css";

// Hamburger menu navigation component
function Nav() {
  // Holds state of hamburger menu button click
  const [clicked, setClicked] = useState(false);

  // Function that handles hamburger-menu click
  function handleClick() {
    setClicked(!clicked);
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

  /**
   * On button click, set clicked state to true or false.
   * On state change, hover and click animations occur depending on variants.
   */
  return (
    <nav className="nav-container">
      <motion.button
        className="hamburger-menu"
        onClick={handleClick}
        whileHover={ clicked ? null : "animateHover" }
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
    </nav>
  );
}

export default Nav;
