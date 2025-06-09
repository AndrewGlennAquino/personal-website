import { motion } from "motion/react";

// Animated typewritter component that matches to parent element
function TypeWritter({ string, variants }) {
  const charArray = string.split("");
  return charArray.map((char, index) => (
    <motion.span key={`${char}-${index}`} variants={variants}>
      {char}
    </motion.span>
  ));
}

export default TypeWritter;