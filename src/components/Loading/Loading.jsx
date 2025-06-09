import "./Loading.css";
import { motion } from "motion/react";

// Component that serves as the initial loading screen
function Loading() {
  return (
    <motion.div
      className="loading-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, display: "none"}}
      transition={{ duration: 1.5, delay: 4, ease: "linear" }}
    ></motion.div>
  );
}

export default Loading;
