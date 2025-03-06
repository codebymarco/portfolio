import React from "react";
import { motion } from "framer-motion";
import "../../styles/banner.css";
import image from "../../assets/image.png";
import { Link, useNavigate } from "react-router-dom";
import { FaReact, FaJs, FaNodeJs, FaCode } from "react-icons/fa";

const BannerTwo = () => {
  const navigate = useNavigate();

  const showAbout = () => {
    navigate("/about");
  };

  return (
    <div className="banner">
      <motion.div className="banner-img-container">
        <motion.img
          src={image}
          alt="Marco Ramcharan"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="profile-image"
        />
        <motion.div
          className="img-backdrop"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.div>

      <motion.div
        className="banner-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="name-container">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            MARCO<br></br>RAMCHARAN
          </motion.h3>

          {/* CSS animated line instead of framer-motion */}
          <div className="gradient-line-container">
            <div className="gradient-line css-animated-line"></div>
          </div>
        </div>

        <motion.p
          className="job-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          SOFTWARE DEVELOPER
        </motion.p>

        <motion.div
          className="tech-icons"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <FaReact className="tech-icon" title="React" />
          <FaJs className="tech-icon" title="JavaScript" />
          <FaNodeJs className="tech-icon" title="Node.js" />
          <FaCode className="tech-icon" title="Full Stack" />
        </motion.div>

        <motion.p
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Building elegant solutions to complex problems
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          <Link to="/contact" className="contact-btn">
            contact me
          </Link>
          <Link to="/about" className="about-btn">
            about
          </Link>
        </motion.div>
      </motion.div>

      {/* Add this style tag for the CSS animation */}
      <style jsx>{`
        .gradient-line-container {
          width: 100%;
          position: relative;
          overflow: hidden;
          visibility: hidden;
          animation: showLineContainer 1.1s forwards;
        }

        .css-animated-line {
          width: 0;
          animation: expandLine 0.8s forwards;
          animation-delay: 1.1s;
        }

        @keyframes showLineContainer {
          0% {
            visibility: hidden;
          }
          99% {
            visibility: hidden;
          }
          100% {
            visibility: visible;
          }
        }

        @keyframes expandLine {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default BannerTwo;
