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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
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

  const showComp = () => {
    setShow(true);

    // Set timeout to set state to false after 2 seconds
    setTimeout(() => {
      setShow(false);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  // Contact options with icons and details
  const contactOptions = [
    {
      id: "email",
      icon: <SiGmail />,
      label: "miguelmarcoramcharan@gmail.com",
      color: "#EA4335",
      action: handleClick2,
      number: "01",
    },
    {
      id: "github",
      icon: <FaGithub />,
      label: "github",
      color: "#ffffff",
      action: () => handleDivClick("https://github.com/codebymarco"),
      number: "02",
    },
    {
      id: "onlyfans",
      icon: <SiOnlyfans />,
      label: "onlyfans",
      color: "#61DAFB",
      action: showComp,
      number: "03",
    },
    {
      id: "linkedin",
      icon: <CiLinkedin />,
      label: "linkedin",
      color: "#0A66C2",
      action: () => handleDivClick("https://linkedin.com/in/yourprofile"),
      number: "04",
    },
    {
      id: "resume",
      icon: <FaFilePdf />,
      label: "download resume",
      color: "#FF5733",
      action: handleDownloadResume,
      number: "05",
    },
  ];

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
          <h1>GET IN TOUCH</h1>
        </div>
        <p className="contact-subtitle">
          Feel free to reach out through any of these channels
        </p>
        <motion.div
          className="contact-container"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {contactOptions.map((option) => (
            <motion.div
              key={option.id}
              variants={itemVariants}
              className="contact-box"
              onClick={option.action}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 10px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(97, 218, 251, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="contact-content">
                <div
                  className="icon-wrapper"
                  style={{ backgroundColor: `${option.color}15` }}
                >
                  {React.cloneElement(option.icon, {
                    style: { color: option.color },
                  })}
                </div>
                <span className="contact-label">{option.label}</span>
              </div>
              <div className="contact-number">{option.number}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ContactForm />

      <style jsx>{`
        .contact {
          background-image: radial-gradient(
            circle at 50% 30%,
            #111111 0%,
            #000000 70%
          );
          background-color: black;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 40px 20px 60px;
          align-items: center;
        }

        .contact-top {
          padding: 20px;
          text-align: center;
          color: white;
        }

        .contact-top h1 {
          font-size: 2.5rem;
          letter-spacing: 2px;
          position: relative;
          display: inline-block;
          color: #61dafb;
          text-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
          margin-bottom: 20px;
        }

        .contact-top h1:after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: #61dafb;
          box-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
        }

        .contact-subtitle {
          color: #aaa;
          text-align: center;
          font-size: 1.1rem;
          margin: 0 0 30px;
          max-width: 600px;
        }

        .contact-container {
          display: flex;
          flex-direction: column;
          width: 90%;
          max-width: 800px;
          gap: 15px;
          padding: 20px;
        }

        .contact-box {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.2rem;
          padding: 20px 30px;
          border-radius: 15px;
          color: white;
          cursor: pointer;
          background-color: rgba(13, 13, 13, 0.9);
          border: 1px solid rgba(97, 218, 251, 0.1);
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .contact-content {
          display: flex;
          align-items: center;
          gap: 20px;
          max-width: 85%;
          overflow: hidden;
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .contact-box:hover .icon-wrapper {
          transform: scale(1.1);
        }

        .contact-label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 1.1rem;
        }

        .contact-number {
          font-family: "Courier New", monospace;
          font-weight: bold;
          opacity: 0.6;
          font-size: 1.2rem;
          color: #61dafb;
        }

        .contact-box:hover {
          transform: translateY(-5px);
          border-color: rgba(97, 218, 251, 0.3);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4),
            0 0 15px rgba(97, 218, 251, 0.1);
        }

        /* Responsive styles */
        @media screen and (max-width: 1200px) {
          .contact-container {
            width: 90%;
          }
        }

        @media screen and (max-width: 992px) {
          .contact-container {
            width: 95%;
          }

          .contact-box {
            padding: 18px 25px;
          }
        }

        @media screen and (max-width: 768px) {
          .contact-container {
            width: 100%;
          }

          .contact-box {
            padding: 15px 20px;
          }

          .icon-wrapper {
            width: 45px;
            height: 45px;
            font-size: 1.3rem;
          }

          .contact-top h1 {
            font-size: 2.2rem;
          }
        }

        @media screen and (max-width: 576px) {
          .contact-top h1 {
            font-size: 2rem;
          }

          .contact-subtitle {
            font-size: 1rem;
          }

          .contact-box {
            padding: 15px;
          }

          .contact-content {
            gap: 15px;
          }

          .icon-wrapper {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }

          .contact-label {
            font-size: 1rem;
          }

          .contact-number {
            font-size: 1rem;
          }
        }

        @media screen and (max-width: 400px) {
          .contact-box {
            padding: 12px 15px;
          }

          .contact-content {
            gap: 10px;
          }

          .icon-wrapper {
            width: 36px;
            height: 36px;
            font-size: 1.1rem;
          }

          .contact-label {
            font-size: 0.9rem;
          }

          .contact-number {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
