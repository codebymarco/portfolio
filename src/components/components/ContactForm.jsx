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
          border-radius: 16px;
          max-width: 600px;
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .contact-form-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
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
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid #333333;
          background-color: #111111;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #0072ff;
          box-shadow: 0 0 0 2px rgba(0, 114, 255, 0.2);
        }
        
        .form-input::placeholder {
          color: #666666;
          transition: color 0.3s ease;
        }
        
        .form-input:focus::placeholder {
          color: #888888;
        }
        
        textarea.form-input {
          min-height: 120px;
          resize: vertical;
          line-height: 1.6;
        }
        
        .error-message {
          color: #ff4f56;
          font-size: 0.875rem;
          margin-top: 6px;
          display: block;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .submit-button {
          background: #555555;
          border: none;
          padding: 10px 20px;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        
        .submit-button:disabled {
          background: #222222;
          color: #666666;
          cursor: not-allowed;
        }
        
        .submit-button:hover:not(:disabled) {
          background: #666666;
        }
        
        .submit-button:active:not(:disabled) {
          background: #444444;
        }
        
        .snackbar {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          padding: 16px 24px;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          min-width: 300px;
          animation: slideUp 0.3s ease;
        }
        
        @keyframes slideUp {
          from { transform: translate(-50%, 20px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
        
        .snackbar.success {
          background-color: #1a472a;
          color: #ffffff;
          border-left: 4px solid #2ecc71;
        }
        
        .snackbar.error {
          background-color: #4a1a1a;
          color: #ffffff;
          border-left: 4px solid #e74c3c;
        }
        
        .snackbar button {
          background: rgba(255, 255, 255, 0.15);
          border: none;
          color: #fff;
          cursor: pointer;
          font-size: 0.9rem;
          padding: 6px 12px;
          border-radius: 6px;
          transition: background 0.2s ease;
        }
        
        .snackbar button:hover {
          background: rgba(255, 255, 255, 0.25);
        }
        
        @media (max-width: 600px) {
          .contact-form-wrapper {
            padding: 30px 20px;
          }
          
          .contact-form-title {
            font-size: 2rem;
          }
          
          .submit-button {
            padding: 14px;
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