import { motion } from "motion/react";

/**
 * Component that creates an animated social media button
 *
 * @param {img, string, string} props Props for image, url, and name
 */
function SocialMediaIcon({ icon, url, alt }) {
  // Animation variants for icons
  const iconVariants = {
    init: { opacity: 0.5 },
    animate: { opacity: 1, scale: 1.5 },
  };

  return (
    <motion.li
      initial="init"
      whileHover="animate"
      whileTap="animate"
      variants={iconVariants}
    >
      <a href={url} target="_blank">
        <img src={icon} alt={`${alt} icon for link`} />
      </a>
    </motion.li>
  );
}

export default SocialMediaIcon;