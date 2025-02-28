import React, { useState } from "react";
import "../../styles/contactForm.css";

const ContactForm = () => {
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
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <h2 className="contact-form-title">Get In Touch</h2>
        <p className="contact-form-description">
          Have a question or want to work together? Fill out the form below and
          I'll get back to you as soon as possible.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Your Name"
            />
            {formErrors.name && (
              <span className="error-message">{formErrors.name}</span>
            )}
          </div>

          <div className="form-field">
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Email Address"
            />
            {formErrors.email && (
              <span className="error-message">{formErrors.email}</span>
            )}
          </div>

          <div className="form-field">
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Your Message"
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
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>

        {snackbarOpen && (
          <div className={`snackbar ${snackbarSeverity}`}>
            {snackbarMessage}
            <button onClick={handleCloseSnackbar}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
