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
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

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
        damping: 12
      }
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        delay: 0.4
      }
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
      number: "01"
    },
    {
      id: "github",
      icon: <FaGithub />,
      label: "github",
      color: "#ffffff",
      action: () => handleDivClick("https://github.com/codebymarco"),
      number: "02"
    },
    {
      id: "onlyfans",
      icon: <SiOnlyfans />,
      label: "onlyfans",
      color: "#61DAFB",
      action: showComp,
      number: "03"
    },
    {
      id: "linkedin",
      icon: <CiLinkedin />,
      label: "linkedin",
      color: "#0A66C2",
      action: () => handleDivClick("https://linkedin.com/in/yourprofile"),
      number: "04"
    },
    {
      id: "resume",
      icon: <FaFilePdf />,
      label: "download resume",
      color: "#FF5733",
      action: handleDownloadResume,
      number: "05"
    }
  ];

  // Form handling
  const isEmailValid = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const errors = {
      name: "",
      email: "",
      message: "",
    };
    let isValid = true;

    if (!formValues.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formValues.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!isEmailValid(formValues.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formValues.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formValues.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSnackbarMessage("Thank you! Your message has been sent successfully.");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      setFormValues({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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
          <h1>GET IN TOUCH</h1>
        </div>
        <p className="contact-subtitle">
          Feel free to reach out through any of these channels
        </p>
        
        {/* Contact options */}
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
                y: -5, 
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(97, 218, 251, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="contact-content">
                <div className="icon-wrapper" style={{ backgroundColor: `${option.color}15` }}>
                  {React.cloneElement(option.icon, { style: { color: option.color } })}
                </div>
                <span className="contact-label">{option.label}</span>
              </div>
              <div className="contact-number">{option.number}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          className="contact-form-container"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h2 className="contact-form-title">Send Me a Message</h2>
              <p className="contact-form-description">
                Have a question or want to work together? Fill out the form below and
                I'll get back to you as soon as possible.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className={`form-input ${formErrors.name ? 'error' : ''}`}
                  placeholder="Enter your name"
                />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={`form-input ${formErrors.email ? 'error' : ''}`}
                  placeholder="Enter your email address"
                />
                {formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  className={`form-input ${formErrors.message ? 'error' : ''}`}
                  placeholder="Enter your message"
                  rows="5"
                />
                {formErrors.message && (
                  <span className="error-message">{formErrors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="button-content">
                    <span className="spinner"></span>
                    Sending...
                  </span>
                ) : (
                  <span className="button-content">
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </motion.div>
        
        {/* Notification */}
        {snackbarOpen && (
          <div className={`snackbar ${snackbarSeverity}`}>
            <div className="snackbar-content">
              <span className="snackbar-icon">✓</span>
              <span>{snackbarMessage}</span>
            </div>
            <button onClick={handleCloseSnackbar} className="snackbar-close">
              ✕
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .contact {
          background-image: radial-gradient(circle at 50% 30%, #111111 0%, #000000 70%);
          background-color: black;
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 40px 20px 80px;
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
          color: #61DAFB;
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
          background-color: #61DAFB;
          box-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
        }

        .contact-subtitle {
          color: #aaa;
          text-align: center;
          font-size: 1.1rem;
          margin: 0 0 10px;
          max-width: 600px;
        }

        .contact-container {
          display: flex;
          flex-direction: column;
          width: 90%;
          max-width: 800px;
          gap: 15px;
          padding: 0 20px;
        }

        /* Contact Box Styles */
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
          font-family: 'Courier New', monospace;
          font-weight: bold;
          opacity: 0.6;
          font-size: 1.2rem;
          color: #61DAFB;
        }

        .contact-box:hover {
          transform: translateY(-5px);
          border-color: rgba(97, 218, 251, 0.3);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(97, 218, 251, 0.1);
        }

        /* Contact Form Styles */
        .contact-form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 90%;
          max-width: 800px;
          margin-top: 20px;
          padding: 0 20px;
        }
        
        .contact-form-wrapper {
          background-color: rgba(13, 13, 13, 0.9);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 15px;
          width: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(97, 218, 251, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .contact-form-wrapper:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 20px rgba(97, 218, 251, 0.1);
          border-color: rgba(97, 218, 251, 0.2);
        }
        
        .form-header {
          margin-bottom: 40px;
          position: relative;
        }
        
        .form-header::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 60px;
          height: 3px;
          background: #61DAFB;
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
        }
        
        .contact-form-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: #61DAFB;
          letter-spacing: -0.02em;
          text-shadow: 0 0 10px rgba(97, 218, 251, 0.3);
        }
        
        .contact-form-description {
          font-size: 1.1rem;
          color: #aaaaaa;
          line-height: 1.6;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .form-field {
          position: relative;
        }
        
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          color: #dddddd;
        }
        
        .form-input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 10px;
          border: 2px solid rgba(97, 218, 251, 0.1);
          background-color: rgba(20, 20, 20, 0.7);
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-input::placeholder {
          color: #666666;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #61DAFB;
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.15);
          background-color: rgba(25, 25, 25, 0.9);
        }
        
        .form-input.error {
          border-color: #FF4757;
          background-color: rgba(40, 20, 20, 0.7);
        }
        
        textarea.form-input {
          min-height: 140px;
          resize: vertical;
          line-height: 1.6;
        }
        
        .error-message {
          color: #FF4757;
          font-size: 0.85rem;
          margin-top: 6px;
          display: block;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .submit-button {
          background: linear-gradient(90deg, rgba(97, 218, 251, 0.8), rgba(97, 218, 251, 0.6));
          border: none;
          padding: 15px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 10px;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          margin-top: 12px;
          box-shadow: 0 5px 15px rgba(97, 218, 251, 0.2);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
        
        .submit-button:disabled {
          background: #1E1E1E;
          color: #555555;
          cursor: not-allowed;
          box-shadow: none;
          text-shadow: none;
        }
        
        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(97, 218, 251, 0.3);
          background: linear-gradient(90deg, rgba(97, 218, 251, 0.9), rgba(97, 218, 251, 0.7));
        }
        
        .submit-button:active:not(:disabled) {
          transform: translateY(0);
        }
        
        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: all 0.5s ease;
        }
        
        .submit-button:hover::before {
          left: 100%;
        }
        
        .button-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          z-index: 1;
        }
        
        .spinner {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Notification Styles */
        .snackbar {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          padding: 0;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          z-index: 1000;
          min-width: 320px;
          animation: slideUp 0.3s ease;
          overflow: hidden;
        }
        
        .snackbar-content {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          flex: 1;
        }
        
        .snackbar-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          font-size: 14px;
        }
        
        .snackbar-close {
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
          font-size: 16px;
          padding: 16px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .snackbar-close:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        @keyframes slideUp {
          from { transform: translate(-50%, 20px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
        
        .snackbar.success {
          background-color: rgba(13, 13, 13, 0.95);
          color: #ffffff;
          border-left: 3px solid #61DAFB;
        }
        
        .snackbar.error {
          background-color: rgba(13, 13, 13, 0.95);
          color: #ffffff;
          border-left: 3px solid #FF4757;
        }
        
        /* Ambient background glow */
        .contact-form-wrapper::before {
          content: '';
          position: absolute;
          top: -150px;
          right: -150px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(97, 218, 251, 0.03);
          filter: blur(80px);
          z-index: -1;
        }
        
        .contact-form-wrapper::after {
          content: '';
          position: absolute;
          bottom: -150px;
          left: -150px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(97, 218, 251, 0.03);
          filter: blur(80px);
          z-index: -1;
        }

        /* Responsive styles */
        @media screen and (max-width: 1200px) {
          .contact-container, .contact-form-container {
            width: 90%;
            padding: 0;
          }
        }

        @media screen and (max-width: 992px) {
          .contact-container, .contact-form-container {
            width: 95%;
          }
          
          .contact-box {
            padding: 18px 25px;
          }
          
          .contact-form-wrapper {
            padding: 35px;
          }
        }

        @media screen and (max-width: 768px) {
          .contact-container, .contact-form-container {
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
          
          .contact-form-wrapper {
            padding: 30px 20px;
          }
          
          .contact-form-title {
            font-size: 1.8rem;
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
          
          .form-header::after {
            width: 50px;
            height: 3px;
          }
          
          .snackbar {
            width: 90%;
            min-width: auto;
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