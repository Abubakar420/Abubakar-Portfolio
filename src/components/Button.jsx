import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

/**
 * @component
 * @param {string} name - The text to display on the button.
 * @param {string} color - The background color of the button.
 */

const Button = ({ name, color }) => {
  return (
    <motion.button
      className="btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.99 }}
      style={{ backgroundColor: color }}
    >
      <p>{name}</p>
      <div>
        <FiArrowUpRight className="arrow-icon" />
      </div>
    </motion.button>
  );
};

export default Button;
