import "./Stars.css";
import { motion } from "motion/react";

/**
 * Function that randomly generates the position and animation
 * for a specified number of stars
 *
 * @param { Array } starsArray array of stars for the hero
 * @param { Number } numStars number of stars for the hero
 */
function createStars(starsArray, numStars) {
  for (let i = 0; i < numStars; i++) {
    // Randomly generate x, y positions, duration, delay time, and opacity
    const randX = Math.random() * 100 + "%";
    const randY = Math.random() * 100 + "%";
    const randDuration = 1 + Math.random();
    const randDelay = Math.random() * 2;
    const randOpacity = Math.random();

    /**
     * Create a new star motion.div element with random values 
     * for style and animation and push to array 
     */
    starsArray.push(
      <motion.div
        className="star"
        key={`star-${i}`}
        style={{ left: randX, top: randY, opacity: randOpacity }}
        animate={{
          opacity: 0,
        }}
        transition={{
          duration: randDuration,
          delay: randDelay,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>
    );
  }
}

// Component for the animated background of stars
function Stars() {
  // Creates an array of randomly generated stars for hero
  const stars = [];
  createStars(stars, 500);

  return <div className="stars-container">{stars}</div>;
}

export default Stars;
