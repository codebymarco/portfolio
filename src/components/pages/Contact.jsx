import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { SiGmail, SiOnlyfans } from "react-icons/si";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import "../../styles/contact.css";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleDivClick = (path) => {
    window.open(path, "_blank");
  };

  const handleClick2 = () => {
    const email = "miguelmarcoramcharan@gmail.com";
    const subject = "Subject Here";
    const body = "Body of the email goes here";
    window.open(
      `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    );
  };

  useEffect(() => {
    // Optionally, add initial animations or effects here
  }, []);

  return (
    <div className="contact">
      <div className="contact-top">
        <h1>Contact me</h1>
      </div>
      <motion.div
        className="contact-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="box"
          onClick={handleClick2}
        >
          <div>
            <SiGmail color="red" />
            <span>miguelmarcoramcharan@gmail.com</span>
          </div>
          <span>01</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="box"
          onClick={() => handleDivClick(`https://github.com/codebymarco`)}
        >
          <div>
            <FaGithub color="white" />
            <p>github</p>
          </div>
          <span>03</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="box"
          onClick={() =>
            handleDivClick(
              `https://www.linkedin.com/in/miguelmarco-ramcharan-34b04a277`
            )
          }
        >
          <div>
            <CiLinkedin color="dodgerblue" />
            <p>linkedin</p>
          </div>
          <span>04</span>
        </motion.div>

        <motion.div variants={itemVariants} className="box">
          <div>
            <SiOnlyfans color="skyblue" />
            <p>onlyfans</p>
          </div>
          <span>05</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
