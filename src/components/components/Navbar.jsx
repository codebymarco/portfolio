import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import FullPageNavbar from "./FullPageNavbar";
import { CiMenuFries } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Track active link based on current path
  const [language, setLanguage] = useState("english"); // Default language state

  // Set active link based on current path when component mounts
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const close = () => {
    setShow(false);
  };

  // Handle language change
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    console.log("Language changed to:", selectedLanguage);
  };

  // Animation variants for navbar container
  const navVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Animation variants for each navigation item
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <AnimatePresence>
        {show && <FullPageNavbar key="full-page-navbar" close={close} />}
      </AnimatePresence>
      <div></div>
      <div>
        <motion.div className="desktop-links" id="desktop-links" variants={navVariants}>
          <motion.div variants={itemVariants} className="nav-item">
            <Link 
              className={`desktop-links-link ${activeLink === "/" ? "active" : ""}`} 
              to="/"
              onClick={() => setActiveLink("/")}
            >
              home
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="nav-item">
            <Link 
              className={`desktop-links-link ${activeLink === "/about" ? "active" : ""}`} 
              to="/about"
              onClick={() => setActiveLink("/about")}
            >
              about
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="nav-item">
            <Link 
              className={`desktop-links-link ${activeLink === "/contact" ? "active" : ""}`} 
              to="/contact"
              onClick={() => setActiveLink("/contact")}
            >
              contact
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="nav-item">
            <Link 
              className={`desktop-links-link ${activeLink === "/career" ? "active" : ""}`} 
              to="/career"
              onClick={() => setActiveLink("/career")}
            >
              career
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="nav-item">
            <Link 
              className={`desktop-links-link ${activeLink === "/blog" ? "active" : ""}`} 
              to="/blog"
              onClick={() => setActiveLink("/blog")}
            >
              blog
            </Link>
          </motion.div>
          
          {/* Language selector */}
          <motion.div variants={itemVariants} className="nav-item language-selector">
            <div className="lang-select-wrapper">
              <IoLanguage className="language-icon" />
              <select value={language} onChange={handleLanguageChange} className="language-dropdown">
                <option value="english">English</option>
                <option value="zulu">Zulu</option>
                <option value="afrikaans">Afrikaans</option>
                <option value="espanol">Español</option>
              </select>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          <CiMenuFries
            id="mobile-links"
            className="menu-icon"
            onClick={() => setShow(true)}
          />
        </motion.div>
      </div>

      <style jsx>{`
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        
        .nav-item {
          position: relative;
        }
        
        .desktop-links-link {
          color: #f8f8f8;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          padding: 6px 4px;
          transition: color 0.3s ease;
        }
        
        .desktop-links-link:hover {
          color: rgba(97, 218, 251, 0.8);
        }
        
        .desktop-links-link.active {
          color: #61DAFB;
        }
        
        .language-selector {
          margin-left: 12px;
        }
        
        .lang-select-wrapper {
          display: flex;
          align-items: center;
          background-color: rgba(97, 218, 251, 0.1);
          border-radius: 20px;
          padding: 5px 10px;
          border: 1px solid rgba(97, 218, 251, 0.3);
          transition: all 0.3s ease;
          position: relative;
        }
        
        .lang-select-wrapper:hover {
          background-color: rgba(97, 218, 251, 0.2);
          border-color: rgba(97, 218, 251, 0.6);
        }
        
        .language-icon {
          color: #61DAFB;
          font-size: 1.1rem;
          margin-right: 5px;
        }
        
        .language-selector select {
          background-color: transparent;
          color: #f8f8f8;
          border: none;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          outline: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          padding-right: 12px;
        }
        
        .language-selector select option {
          background-color: #282c34;
          color: #f8f8f8;
        }
        
        @media (max-width: 768px) {
          .desktop-links {
            display: none;
          }
          
          .language-selector {
            margin-left: 10px;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;