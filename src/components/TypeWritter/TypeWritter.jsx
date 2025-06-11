import { motion } from "motion/react";

/**
 * Animated component that emulates a type writter
 * 
 * @param {*} param0
 */
function TypeWritter({ string }) {
  const charArray = string.split(""); // Array that splits string into character array

  // Animation variants for span element
  const variants = {
    init: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0 } },
  };

  return charArray.map((char, index) => (
    <motion.span key={`${char}-${index}`} variants={variants}>
      {char}
    </motion.span>
  ));
}

export default TypeWritter;
