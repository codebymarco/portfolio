import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import FullPageNavbar from "./FullPageNavbar";
import { CiMenuFries } from "react-icons/ci";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import useTranslationStore from "../../store/store";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const { language, setLanguage, t } = useTranslationStore();

  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Track active link based on current path
  const [showLanguageMenu, setShowLanguageMenu] = useState(false); // State for language menu visibility

  // Set active link based on current path when component mounts
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLanguageMenu && !event.target.closest(".language-selector")) {
        setShowLanguageMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLanguageMenu]);

  const close = () => {
    setShow(false);
  };

  // Handle language change
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowLanguageMenu(false);
  };

  // Animation variants for navbar container
  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for each navigation item
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for language menu
  const languageMenuVariants = {
    hidden: { opacity: 0, y: -5, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  // Language options
  const languages = [
    { code: "en", label: "English" },
    { code: "zu", label: "Zulu" },
    { code: "af", label: "Afrikaans" },
    { code: "es", label: "Español" },
    { code: "pt", label: "Portuguese" },
    { code: "de", label: "German" }
  ];

  return (
    <motion.nav initial="hidden" animate="visible" variants={navVariants}>
      <AnimatePresence>
        {show && <FullPageNavbar key="full-page-navbar" close={close} />}
      </AnimatePresence>
      
      {/* Logo on the left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
      </motion.div>

      <div>
        <motion.div
          className="desktop-links"
          id="desktop-links"
          variants={navVariants}
        >
          <motion.div variants={itemVariants} className="nav-item">
            <Link
              className={`desktop-links-link ${
                activeLink === "/" ? "active" : ""
              }`}
              to="/"
              onClick={() => setActiveLink("/")}
            >
              {t("nav_link_home")}
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="nav-item">
            <Link
              className={`desktop-links-link ${
                activeLink === "/about" ? "active" : ""
              }`}
              to="/about"
              onClick={() => setActiveLink("/about")}
            >
              {t("nav_link_about")}
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="nav-item">
            <Link
              className={`desktop-links-link ${
                activeLink === "/contact" ? "active" : ""
              }`}
              to="/contact"
              onClick={() => setActiveLink("/contact")}
            >
              {t("nav_link_contact")}
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="nav-item">
            <Link
              className={`desktop-links-link ${
                activeLink === "/apps" ? "active" : ""
              }`}
              to="/apps"
              onClick={() => setActiveLink("/apps")}
            >
              {t("nav_link_projects")}
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="nav-item">
            <Link
              className={`desktop-links-link ${
                activeLink === "/career" ? "active" : ""
              }`}
              to="/career"
              onClick={() => setActiveLink("/career")}
            >
              {t("nav_link_career")}
            </Link>
          </motion.div>

          {/* Language selector */}
          <motion.div
            variants={itemVariants}
            className="nav-item language-selector"
          >
            <div
              className="lang-select-wrapper"
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            >
              <HiOutlineGlobeAlt className="language-icon" />
              <span className="current-language">
                {language === "en"
                  ? "English"
                  : language === "zu"
                  ? "Zulu"
                  : language === "af"
                  ? "Afrikaans"
                  : language === "es"
                  ? "Espanol"
                  : "English"}
              </span>
              <IoIosArrowDown
                className={`arrow-icon ${showLanguageMenu ? "rotated" : ""}`}
              />
            </div>

            <AnimatePresence>
              {showLanguageMenu && (
                <motion.div
                  className="language-menu"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={languageMenuVariants}
                >
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className={`language-option ${
                        language === lang.code ? "active" : ""
                      }`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      {lang.label}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
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
    </motion.nav>
  );
};

export default Navbar;