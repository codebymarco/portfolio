import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import useTranslationStore from "../../store/store";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  const { t } = useTranslationStore();

  const { language, setLanguage } = useTranslationStore();
  const [showLanguageMenu, setShowLanguageMenu] = React.useState(false);
  const languageMenuRef = React.useRef(null);

  const currentYear = new Date().getFullYear();

  // Handle clicks outside the language menu
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setShowLanguageMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Language options
  const languages = [
    { code: "en", label: "English" },
    { code: "zu", label: "Zulu" },
    { code: "af", label: "Afrikaans" },
    { code: "es", label: "Español" },
    { code: "pt", label: "Portuguese" },
    { code: "de", label: "German" },
  ];

  // Get current language display
  const getCurrentLanguageDisplay = () => {
    const currentLang = languages.find((lang) => lang.code === language);
    return currentLang ? currentLang.label : "English";
  };

  // Handle language change
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowLanguageMenu(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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

  return (
    <footer className="footer">
      <div className="container">
        <div
          className="footer-top"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="footer-brand" variants={itemVariants}>
            <h3 className="brand-name">
              <img src={logo} height="50px" width="100px" alt="" />
            </h3>
            <p className="brand-desc">{t("footer_occupation")}</p>
          </div>

          <div className="footer-links" variants={itemVariants}>
            <h4 className="footer-heading">{t("footer_quick_links")}</h4>
            <ul className="footer-list">
              {["home", "projects", "about", "contact", "career"].map(
                (item) => (
                  <li key={item} className="footer-list-item">
                    <Link to={`${item.toLowerCase()}`} className="footer-link">
                      {t(`footer_link_${item}`)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact" variants={itemVariants}>
            <h4 className="footer-heading">{t("footer_contact")}</h4>
            <p className="contact-info">
              <span className="contact-label">{t("footer_email")}:</span>{" "}
              miguelmarcoramcharan@gmail.com
            </p>
            <p className="contact-info">
              <span className="contact-label">{t("footer_phone")}:</span> 061
              149 8474
            </p>
            <p className="contact-info">
              <span className="contact-label">{t("footer_location")}:</span>{" "}
              Durban, South Africa
            </p>
          </div>

          {/* Language Selector */}
          <div className="footer-language" variants={itemVariants}>
            <h4 className="footer-heading">{t("footer_language")}</h4>
            <div className="footer-lang-selector" ref={languageMenuRef}>
              <div
                className="footer-selected-lang"
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              >
                <HiOutlineGlobeAlt className="footer-lang-icon" />
                <span>{getCurrentLanguageDisplay()}</span>
                <IoIosArrowDown
                  className={`footer-arrow-icon ${
                    showLanguageMenu ? "rotated" : ""
                  }`}
                />
              </div>

              {showLanguageMenu && (
                <div className="footer-lang-menu">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className={`footer-lang-option ${
                        language === lang.code ? "active" : ""
                      }`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      {lang.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="copyright">
            © {currentYear} Miguelmarco Ramcharan. {t("footer_rights")}
          </p>
          <div className="legal-links">
            <a href="#privacy" className="legal-link">
              {t("footer_policy")}
            </a>
            <a href="#terms" className="legal-link">
              {t("footer_terms")}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;600;700&display=swap");

        .footer {
          color: #ffffff;
          width: 100%;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          font-family: "Orbitron", monospace;
        }

        .footer::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 300px;
          height: 300px;
          background: rgba(97, 218, 251, 0.1);
          filter: blur(120px);
          z-index: 0;
        }

        .footer::after {
          content: "";
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 250px;
          height: 250px;
          background: rgba(97, 218, 251, 0.08);
          filter: blur(100px);
          z-index: 0;
        }

        .container {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          position: relative;
          z-index: 1;
          backdrop-filter: blur(10px);
          padding: 2.5rem;
        }

        .footer-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 2.5rem;
        }

        .footer-brand {
          min-width: 240px;
          max-width: 320px;
        }

        .brand-name {
          color: #61dafb;
          font-size: 2rem;
          margin: 0 0 1rem 0;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 15px rgba(97, 218, 251, 0.4);
          letter-spacing: 1px;
          font-weight: 600;
          background: linear-gradient(to right, #61dafb, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-name::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 70px;
          height: 3px;
          background: linear-gradient(
            to right,
            #61dafb,
            rgba(97, 218, 251, 0.3)
          );
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.6);
        }

        .brand-desc {
          color: #aaa;
          margin: 1.2rem 0 0 0;
          font-size: 1rem;
          max-width: 300px;
          line-height: 1.6;
        }

        .footer-links,
        .footer-contact,
        .footer-language {
          min-width: 180px;
        }

        .footer-heading {
          color: #ffffff;
          font-size: 1.4rem;
          margin: 0 0 1.2rem 0;
          position: relative;
          display: inline-block;
          letter-spacing: 0.5px;
        }

        .footer-heading::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(
            to right,
            #61dafb,
            rgba(97, 218, 251, 0.3)
          );
          box-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 1.2rem 0 0 0;
        }

        .footer-list-item {
          margin-bottom: 0.8rem;
        }

        .footer-link {
          color: #aaa;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
          position: relative;
          padding-left: 0;
        }

        .footer-link:hover {
          color: #61dafb;
          padding-left: 5px;
        }

        .footer-link::before {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #61dafb;
          transition: width 0.3s ease;
        }

        .footer-link:hover::before {
          width: 100%;
        }

        .footer-contact {
          min-width: 240px;
        }

        .contact-info {
          color: #aaa;
          margin: 0 0 1rem 0;
          font-size: 1rem;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }

        .contact-label {
          color: #ffffff;
          font-weight: 500;
          margin-bottom: 0.2rem;
        }

        /* Language selector styling */
        .footer-lang-selector {
          position: relative;
          margin-top: 1.2rem;
          width: 100%;
          max-width: 200px;
        }

        .footer-selected-lang {
          display: flex;
          align-items: center;
          background-color: rgba(97, 218, 251, 0.1);
          padding: 8px 12px;
          border: 1px solid rgba(97, 218, 251, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .footer-selected-lang:hover {
          background-color: rgba(97, 218, 251, 0.2);
        }

        .footer-lang-icon {
          color: #61dafb;
          font-size: 1.2rem;
          margin-right: 8px;
        }

        .footer-arrow-icon {
          font-size: 0.8rem;
          margin-left: 8px;
          transition: transform 0.3s ease;
          color: #61dafb;
        }

        .footer-arrow-icon.rotated {
          transform: rotate(180deg);
        }

        .footer-lang-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background-color: rgba(13, 13, 13, 0.95);
          overflow: hidden;
          min-width: 160px;
          z-index: 100;
          border: 1px solid rgba(97, 218, 251, 0.2);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          width: 100%;
        }

        .footer-lang-option {
          padding: 10px 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #aaa;
        }

        .footer-lang-option:hover {
          background-color: rgba(97, 218, 251, 0.1);
          color: #61dafb;
        }

        .footer-lang-option.active {
          background-color: rgba(97, 218, 251, 0.15);
          color: #61dafb;
          font-weight: 500;
        }

        .social-icons {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem 0;
          margin: 0 auto;
          width: fit-content;
          position: relative;
        }

        .social-icons::before {
          content: "";
          position: absolute;
          top: 0;
          left: -20%;
          width: 140%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(97, 218, 251, 0),
            rgba(97, 218, 251, 0.3) 50%,
            rgba(97, 218, 251, 0)
          );
        }

        .social-icons::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: -20%;
          width: 140%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(97, 218, 251, 0),
            rgba(97, 218, 251, 0.3) 50%,
            rgba(97, 218, 251, 0)
          );
        }

        .social-icon {
          color: #fff;
          background: rgba(10, 10, 10, 0.6);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(97, 218, 251, 0.2);
          backdrop-filter: blur(5px);
        }

        .social-icon::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(97, 218, 251, 0.15),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .social-icon:hover {
          color: #fff;
          transform: translateY(-5px) scale(1.1);
          border-color: rgba(97, 218, 251, 0.6);
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6),
            0 0 15px rgba(97, 218, 251, 0.3),
            inset 0 0 10px rgba(97, 218, 251, 0.15);
        }

        .social-icon:hover::before {
          opacity: 1;
        }

        .social-icon.github:hover {
          background: rgba(36, 41, 46, 0.8);
          border-color: #2ea44f;
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6),
            0 0 15px rgba(46, 164, 79, 0.4);
        }

        .social-icon.linkedin:hover {
          background: rgba(10, 102, 194, 0.2);
          border-color: #0a66c2;
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6),
            0 0 15px rgba(10, 102, 194, 0.4);
        }

        .social-icon.email:hover {
          background: rgba(234, 67, 53, 0.2);
          border-color: #ea4335;
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6),
            0 0 15px rgba(234, 67, 53, 0.4);
        }

        .social-icon.twitter:hover {
          background: rgba(29, 161, 242, 0.2);
          border-color: #1da1f2;
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6),
            0 0 15px rgba(29, 161, 242, 0.4);
        }

        .footer-bottom {
          padding-top: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1.5rem;
          font-size: 0.9rem;
          position: relative;
        }

        .footer-bottom::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(97, 218, 251, 0),
            rgba(97, 218, 251, 0.2) 50%,
            rgba(97, 218, 251, 0)
          );
        }

        .copyright {
          color: #888;
          margin: 0;
          font-size: 0.95rem;
          position: relative;
        }

        .copyright::after {
          content: "•";
          color: #61dafb;
          margin-left: 0.5rem;
          font-size: 1.2rem;
          opacity: 0.6;
          text-shadow: 0 0 8px #61dafb;
          position: absolute;
          display: none;
        }

        .legal-links {
          display: flex;
          gap: 2rem;
          position: relative;
        }

        .legal-links::before {
          content: "";
          position: absolute;
          left: -1rem;
          top: 50%;
          width: 1px;
          height: 1.2rem;
          background: linear-gradient(
            to bottom,
            rgba(97, 218, 251, 0),
            rgba(97, 218, 251, 0.3),
            rgba(97, 218, 251, 0)
          );
          transform: translateY(-50%);
          display: none;
        }

        .legal-link {
          color: #888;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.25rem 0;
        }

        .legal-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: #61dafb;
          transition: width 0.3s ease;
        }

        .legal-link:hover {
          color: #61dafb;
        }

        .legal-link:hover::after {
          width: 100%;
        }

        /* Responsive styling */
        @media (max-width: 992px) {
          .footer {
          }

          .container {
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 2.5rem;
          }

          .footer-brand,
          .footer-links,
          .footer-contact,
          .footer-language {
            width: 100%;
            max-width: 100%;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1rem;
          }

          .social-icons {
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .footer {
          }

          .brand-name {
            font-size: 1.6rem;
          }

          .footer-heading {
            font-size: 1.2rem;
          }

          .social-icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
