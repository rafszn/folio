import { motion } from "framer-motion";

const Button = ({ icon: Icon, text = "", bg, textColor }) => {
  return (
    <motion.button
      className={`${bg} ${textColor}`}
      whileHover={{
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      {text}
      {Icon}
    </motion.button>
  );
};
export default Button;
