import { motion } from "framer-motion";

const Button = ({ icon: Icon, text = "", bg, textColor, pulse, href }) => {
  return (
    <motion.a
      className={`${bg} ${textColor} `}
      whileHover={{
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.98,
      }}
      style={pulse}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={text === "Download CV"}
    >
      {text}
      {Icon}
    </motion.a>
  );
};
export default Button;
