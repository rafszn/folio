import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="contact-wrapper">
        <h1 id="contact">Contact</h1>

        <div className={"hangout white"}>
          <div className="h3">
            feel free to drop me a message. You can reach me via email or
            WhatsApp, and I&apos;ll get back to you as soon as possible.
          </div>

          <div className="socials">
            <a className="link purple" href="mailto:rafaelokenyi@gmail.com">
              <CiMail className="mail" />
              <p>Email me</p>
              <p></p>
            </a>

            <a
              className="link light"
              href="https://wa.me/2347082201180"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              <p>Chat me on Whatsapp</p>
            </a>

            <a
              className="link peach"
              href="https://www.linkedin.com/in/raphael-okenyi/"
            >
              <CiLinkedin />
              <p>Connect with me on LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;
