import React, { useState } from "react";

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
            {isSubmitting ? (
              <span className="button-content">
                <span className="spinner"></span>
                Submitting...
              </span>
            ) : (
              <span className="button-content">
                <span className="button-icon">↗</span>
                Send Message
              </span>
            )}
          </button>
        </form>

        {snackbarOpen && (
          <div className={`snackbar ${snackbarSeverity}`}>
            {snackbarMessage}
            <button onClick={handleCloseSnackbar}>Close</button>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .contact-form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 60px 20px;
          background-color: #000000;
          background-image: radial-gradient(circle at 50% 50%, #111111 0%, #000000 100%);
        }
        
        .contact-form-wrapper {
          background-color: #0a0a0a;
          padding: 40px;
          border-radius: 12px;
          max-width: 600px;
          width: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .contact-form-wrapper::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(43, 100, 255, 0.1);
          filter: blur(60px);
          pointer-events: none;
        }
        
        .contact-form-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 16px;
          background: linear-gradient(90deg, #ffffff, #aaaaaa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: -0.03em;
        }
        
        .contact-form-description {
          font-size: 1.1rem;
          text-align: center;
          color: #a0a0a0;
          margin-bottom: 40px;
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
        
        .form-input {
          width: 100%;
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #333333;
          background-color: #111111;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #2b64ff;
          box-shadow: 0 0 0 3px rgba(43, 100, 255, 0.15);
        }
        
        .form-input::placeholder {
          color: #666666;
          transition: color 0.3s ease;
        }
        
        .form-input:focus::placeholder {
          color: #888888;
        }
        
        textarea.form-input {
          min-height: 140px;
          resize: vertical;
          line-height: 1.6;
        }
        
        .error-message {
          color: #ff4f56;
          font-size: 0.875rem;
          margin-top: 8px;
          display: block;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .submit-button {
          background: linear-gradient(to right, #2b64ff, #2b8aff);
          border: none;
          padding: 16px 28px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          letter-spacing: 0.03em;
          overflow: hidden;
          margin-top: 10px;
          box-shadow: 0 4px 10px rgba(43, 100, 255, 0.3);
        }
        
        .submit-button:disabled {
          background: linear-gradient(to right, #1a1a1a, #222222);
          color: #555555;
          cursor: not-allowed;
          box-shadow: none;
        }
        
        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(43, 100, 255, 0.4);
        }
        
        .submit-button:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(43, 100, 255, 0.3);
        }
        
        .submit-button::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 10.01%);
          background-repeat: no-repeat;
          background-position: 50%;
          transform: scale(10, 10);
          opacity: 0;
          transition: transform 0.5s, opacity 0.8s;
        }
        
        .submit-button:active::after {
          transform: scale(0, 0);
          opacity: 0.3;
          transition: 0s;
        }
        
        .button-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .button-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        
        .submit-button:hover:not(:disabled) .button-icon {
          transform: translateX(3px) translateY(-3px);
        }
        
        .spinner {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .snackbar {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          padding: 16px 24px;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
          z-index: 1000;
          min-width: 300px;
          animation: slideUp 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        @keyframes slideUp {
          from { transform: translate(-50%, 20px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
        
        .snackbar.success {
          background-color: rgba(26, 71, 42, 0.9);
          color: #ffffff;
          border-left: 4px solid #2ecc71;
        }
        
        .snackbar.error {
          background-color: rgba(74, 26, 26, 0.9);
          color: #ffffff;
          border-left: 4px solid #e74c3c;
        }
        
        .snackbar button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: #fff;
          cursor: pointer;
          font-size: 0.9rem;
          padding: 8px 12px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        
        .snackbar button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }
        
        .snackbar button:active {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(0);
        }
        
        @media (max-width: 600px) {
          .contact-form-wrapper {
            padding: 30px 20px;
          }
          
          .contact-form-title {
            font-size: 2rem;
          }
          
          .submit-button {
            padding: 15px;
            width: 100%;
          }
          
          .snackbar {
            width: 90%;
            min-width: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;