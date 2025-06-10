import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../../styles/app.css";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiOpenstreetmap,
  SiRabbitmq,
  SiRender,
  SiTypescript,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import img from "../../../assets/indeed.png";
import { useEffect } from "react";

const Indeed = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

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
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <div className="appWrapper">
      <div className="container">
        <div className="app-nav">
          <Link to="/apps" className="app-breadcrumb">apps / indeed</Link>
        </div>
        
        <div className="app-top">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="app-title"
          >
            INDEED
          </motion.h1>
          
          <div className="app-links">
            <motion.a 
              href="https://indeed-console.vercel.app/" 
              target="_blank"
              className="app-link"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              View Site
            </motion.a>
            <motion.a 
              href="https://github.com/codebymarco/indeed_backend" 
              target="_blank"
              className="app-link"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <FiGithub className="link-icon" />
              Repository
            </motion.a>
          </div>
        </div>
        
        <div className="app-container">
          <motion.div
            className="app-photo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img src={img} alt="Indeed project screenshot" className="project-image" />
          </motion.div>
          
          <motion.div 
            className="app-details"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="app-details-box" variants={itemVariants}>
              <h2 className="section-title">Description</h2>
              <p className="description-text">
                <span className="highlight">INDEED</span> is a
                comprehensive job listing site designed to help employers find the
                right talent and job seekers discover their ideal roles. Whether
                you're a company looking to post job openings or a professional
                searching for your next career move, JobPortal offers a
                streamlined platform to manage and browse job listings with ease.
                Our site provides powerful search features and an intuitive
                interface to enhance your job search and recruitment experience.
              </p>
            </motion.div>
            
            <div className="divider"></div>
            
            <motion.div className="app-details-box" variants={itemVariants}>
              <h2 className="section-title">Technologies Used</h2>
              <div className="tech-grid">
                <div className="tech-box">
                  <FaHtml5 color="#E34F26" size={22} />
                  <span>HTML</span>
                </div>
                <div className="tech-box">
                  <FaCss3Alt color="#1572B6" size={22} />
                  <span>CSS</span>
                </div>
                <div className="tech-box">
                  <SiTypescript color="#007ACC" size={22} />
                  <span>TypeScript</span>
                </div>
                <div className="tech-box">
                  <FaNodeJs color="#339933" size={22} />
                  <span>Node</span>
                </div>
                <div className="tech-box">
                  <SiMongodb color="#47A248" size={22} />
                  <span>NoSQL</span>
                </div>
                <div className="tech-box">
                  <SiMongodb color="#47A248" size={22} />
                  <span>MongoDB</span>
                </div>
                <div className="tech-box">
                  <SiRabbitmq color="#FF6600" size={22} />
                  <span>RabbitMQ</span>
                </div>
                <div className="tech-box">
                  <SiOpenstreetmap color="#7EBC6F" size={22} />
                  <span>OpenStreetMap</span>
                </div>
              </div>
            </motion.div>
            
            <div className="divider"></div>
            
            <motion.div className="app-details-box" variants={itemVariants}>
              <h2 className="section-title">Hosting</h2>
              <div className="tech-grid">
                <div className="tech-box">
                  <IoLogoVercel color="white" size={22} />
                  <span>Vercel</span>
                </div>
                <div className="tech-box">
                  <SiRender color="#46E3B7" size={22} />
                  <span>Render</span>
                </div>
                <div className="tech-box">
                  <SiMongodb color="#47A248" size={22} />
                  <span>MongoDB Atlas</span>
                </div>
              </div>
            </motion.div>
            
            <div className="divider"></div>
            
            <motion.div className="app-details-box" variants={itemVariants}>
              <h2 className="section-title">Links</h2>
              <div className="links-grid">
                <a
                  href="https://indeed-console.vercel.app/"
                  target="_blank"
                  className="link-box"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
                <a
                  href="https://github.com/codebymarco/indeed_backend"
                  target="_blank"
                  className="link-box"
                  rel="noopener noreferrer"
                >
                  <FiGithub color="white" size={16} className="link-icon" />
                  GitHub Repository
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>


    </div>
  );
};

export default Indeed;