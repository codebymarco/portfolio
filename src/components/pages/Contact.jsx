import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiGmail, SiOnlyfans } from "react-icons/si";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFilePdf, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import "../../styles/contact.css";
import OnlyFans from "../components/OnlyFans";
import resumePDF from "../../../public/my_resume.pdf";
import { Helmet } from "react-helmet";
import useTranslationStore from "../../store/store";

const Contact = () => {
  const { t } = useTranslationStore();

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
        damping: 12,
      },
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
        delay: 0.4,
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
      id: "resume",
      icon: <FaFilePdf />,
      label: t("download_resume"),
      color: "#FF5733",
      action: handleDownloadResume,
      number: "05",
    },
    {
      id: "resume",
      icon: <FaTwitter />,
      label: "Twitter",
      color: "#FF5733",
      action: () => handleDivClick("https://x.com/code_by_marco"),
      number: "05",
    },
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mqabzrwd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
        }),
      });

      if (response.ok) {
        setSnackbarMessage(
          "Thank you! Your message has been sent successfully."
        );
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        // Reset form
        setFormValues({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSnackbarMessage(
        "Sorry, there was an error sending your message. Please try again."
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Helmet>
        {/* Basic SEO Tags */}
        <title>
          Contact CodeByMarco | Miguelmarco Ramcharan - Fullstack Developer
          Durban
        </title>
        <meta
          name="description"
          content="Get in touch with Miguelmarco Ramcharan of CodeByMarco for fullstack software development needs in Durban, KZN. Request a quote or discuss your project today!"
        />
        <link rel="canonical" href="https://www.codebymarco.com/contact" />
        {/* Open Graph Tags (for Facebook, LinkedIn, WhatsApp etc.) */}
        <meta
          property="og:title"
          content="Contact CodeByMarco | Miguelmarco Ramcharan"
        />
        <meta
          property="og:description"
          content="Get in touch with Miguelmarco Ramcharan of CodeByMarco for fullstack software development needs in Durban, KZN. Request a quote or discuss your project today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codebymarco.com/contact" />
        <meta
          property="og:image"
          content="https://www.codebymarco.com/images/codebymarco-contact-og-image.jpg"
        />{" "}
        {/* IMPORTANT: Create this image! */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="CodeByMarco" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />{" "}
        {/* IMPORTANT: Replace with your actual Twitter handle */}
        <meta name="twitter:creator" content="@your_twitter_handle" />{" "}
        {/* IMPORTANT: Replace with your actual Twitter handle */}
        <meta
          name="twitter:title"
          content="Contact CodeByMarco | Miguelmarco Ramcharan"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Miguelmarco Ramcharan of CodeByMarco for fullstack software development needs in Durban, KZN. Request a quote or discuss your project today!"
        />
        <meta
          name="twitter:image"
          content="https://www.codebymarco.com/images/codebymarco-contact-og-image.jpg"
        />
      </Helmet>
      <div className="contact">
        {show ? <OnlyFans /> : null}

        <div className="contact-top">
          <h1>{t("contact_heading")}</h1>
        </div>
        <p className="contact-subtitle">{t("contact_description")}</p>

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
    </div>
  );
};

export default Contact;
