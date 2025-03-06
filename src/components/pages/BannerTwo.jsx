import React from "react";
import { motion } from "framer-motion";
import "../../styles/banner.css";
import image from "../../assets/image.png";
import { Link, useNavigate } from "react-router-dom";
import { FaReact, FaJs, FaNodeJs, FaCode } from "react-icons/fa"; // Add icons import

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
          <motion.div 
            className="gradient-line"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.8 }}
          ></motion.div>
        </div>
        
        <motion.p 
          className="job-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          SOFTWARE DEVELOPER
        </motion.p>
        
        <motion.div 
          className="tech-icons"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
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
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Building elegant solutions to complex problems
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <Link to="/contact" className="contact-btn">contact me</Link>
          <Link to="/about" className="about-btn">about</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BannerTwo;