import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiGmail, SiOnlyfans } from "react-icons/si";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFilePdf, FaGithub, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import "../../styles/contact.css";
import OnlyFans from "../components/OnlyFans";
import resumePDF from "../../../public/resume.pdf";
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

  const handleDownloadResume = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = resumePDF;
    downloadLink.download = "resume.pdf";
    downloadLink.click();
  };

  const [show, setShow] = useState(false);

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

  const showComp = () => {
    setShow(true);

    // Set timeout to set state to false after 2 seconds
    setTimeout(() => {
      setShow(false);
    }, 2000); // 2000 milliseconds = 2 seconds
  };
  return (
    <div>
      <Helmet>
        <title>
          Contact | Software Developer Portfolio | Miguelmarco Ramcharan
        </title>
        <meta
          name="description"
          content="Welcome to the portfolio of Miguelmarco Ramcharan. Explore projects, skills, and more by CodeByMarco."
        />
        <meta name="author" content="Miguelmarco Ramcharan" />
        <meta
          name="keywords"
          content="marco ramcharan, codebymarco, software developer portfolio about"
        />
      </Helmet>
      <div className="contact">
        {show ? <OnlyFans /> : null}
        <div className="contact-top">
          <h1>Contact</h1>
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
            <span>02</span>
          </motion.div>

          <motion.div
            onClick={() => showComp()}
            variants={itemVariants}
            className="box"
          >
            <div>
              <SiOnlyfans color="skyblue" />
              <p>onlyfans</p>
            </div>
            <span>03</span>
          </motion.div>
        </motion.div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
