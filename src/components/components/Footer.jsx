import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        {/* Top section with logo and navigation */}
        <div className="footer-top">
          {/* Logo/Brand */}
          <div className="footer-brand">
            <h3 className="brand-name">Miguelmarco Ramcharan</h3>
            <p className="brand-desc">
              Fullstack Software Engineer
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {['Home', 'Projects', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item} className="footer-list-item">
                  <a href={`#${item.toLowerCase()}`} className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <p className="contact-info">
              miguelmarcoramcharan@example.com
            </p>
            <p className="contact-info">
              061 149 8474
            </p>
            <p className="contact-info">
              Durban, South Africa
            </p>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://github.com/yourusername" 
             target="_blank" 
             rel="noopener noreferrer"
             className="social-icon">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/yourusername" 
             target="_blank" 
             rel="noopener noreferrer"
             className="social-icon">
            <FaLinkedinIn size={20} />
          </a>
          <a href="mailto:email@example.com" 
             className="social-icon">
            <FaEnvelope size={20} />
          </a>
          <a href="https://twitter.com/yourusername" 
             target="_blank" 
             rel="noopener noreferrer"
             className="social-icon">
            <FaTwitter size={20} />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#privacy" className="legal-link">
              Privacy Policy
            </a>
            <a href="#terms" className="legal-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
  background-image: radial-gradient(circle at 50% 30%, #111111 0%, #000000 70%);
  background-color: black;          color: #ffffff;
          padding: 2rem 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .footer-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .footer-brand {
          min-width: 200px;
        }

        .brand-name {
          color: #ffffff;
          margin: 0 0 1rem 0;
        }

        .brand-desc {
          color: #a0a0a0;
          margin: 0;
          font-size: 0.9rem;
          max-width: 300px;
        }

        .footer-links {
          min-width: 150px;
        }

        .footer-heading {
          color: #ffffff;
          margin: 0 0 1rem 0;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-list-item {
          margin-bottom: 0.5rem;
        }

        .footer-link {
          color: #a0a0a0;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.9rem;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-contact {
          min-width: 200px;
        }

        .contact-info {
          color: #a0a0a0;
          margin: 0 0 0.5rem 0;
          font-size: 0.9rem;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          color: #ffffff;
          transition: color 0.3s ease;
        }

        .social-icon:hover {
          color: #a0a0a0;
        }

        .footer-bottom {
          border-top: 1px solid #333333;
          padding-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.85rem;
        }

        .copyright {
          color: #777777;
          margin: 0;
        }

        .legal-links {
          display: flex;
          gap: 1.5rem;
        }

        .legal-link {
          color: #777777;
          text-decoration: none;
        }

        .legal-link:hover {
          color: #ffffff;
        }

        /* Responsive styling */
        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .legal-links {
            margin-top: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;