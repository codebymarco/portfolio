import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import FullPageNavbar from "./FullPageNavbar";
import { CiMenuFries } from "react-icons/ci";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import useTranslationStore from "../../store/store";

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
  ];

  return (
    <motion.nav initial="hidden" animate="visible" variants={navVariants}>
      <AnimatePresence>
        {show && <FullPageNavbar key="full-page-navbar" close={close} />}
      </AnimatePresence>
      <div></div>
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

          <motion.div variants={itemVariants} className="nav-item">
            <Link
              className={`desktop-links-link ${
                activeLink === "/blog" ? "active" : ""
              }`}
              to="/blog"
              onClick={() => setActiveLink("/blog")}
            >
              {t("nav_link_blog")}
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
                  ? "ENGLISH"
                  : language === "zu"
                  ? "ZULU"
                  : language === "af"
                  ? "AFRIKAANS"
                  : language === "es"
                  ? "SPANISH"
                  : "ENGLISH"}
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

      <style jsx>{`
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
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
          color: #61dafb;
        }

        /* Language selector styles */
        .language-selector {
          margin-left: 12px;
          height: 100%;
          display: flex;
          align-items: center;
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
          cursor: pointer;
          user-select: none;
          height: 24px; /* Match the height of text links */
        }

        .lang-select-wrapper:hover {
          background-color: rgba(97, 218, 251, 0.2);
          border-color: rgba(97, 218, 251, 0.6);
        }

        .language-icon {
          color: #61dafb;
          font-size: 1.1rem;
          margin-right: 5px;
        }

        .current-language {
          color: #f8f8f8;
          font-size: 0.9rem;
          font-weight: 500;
          margin-right: 4px;
          display: flex;
          align-items: center;
        }

        .arrow-icon {
          font-size: 0.8rem;
          transition: transform 0.2s ease;
        }

        .arrow-icon.rotated {
          transform: rotate(180deg);
        }

        .language-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background-color: #1a1e23;
          border-radius: 6px;
          overflow: hidden;
          min-width: 140px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          z-index: 100;
          border: 1px solid rgba(97, 218, 251, 0.2);
        }

        .language-option {
          padding: 10px 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.95rem;
        }

        .language-option:hover {
          background-color: rgba(97, 218, 251, 0.1);
          color: #61dafb;
        }

        .language-option.active {
          background-color: rgba(97, 218, 251, 0.15);
          color: #61dafb;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .desktop-links {
            display: none;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
