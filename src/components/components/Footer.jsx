import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
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
  
  return (
    <footer className="footer">
      <div className="container">
        {/* Top section with logo and navigation */}
        <motion.div 
          className="footer-top"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Logo/Brand */}
          <motion.div className="footer-brand" variants={itemVariants}>
            <h3 className="brand-name">Miguelmarco Ramcharan</h3>
            <p className="brand-desc">
              Fullstack Software Engineer
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div className="footer-links" variants={itemVariants}>
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
          </motion.div>
          
          {/* Contact Info */}
          <motion.div className="footer-contact" variants={itemVariants}>
            <h4 className="footer-heading">Contact</h4>
            <p className="contact-info">
              <span className="contact-label">Email:</span> miguelmarcoramcharan@gmail.com
            </p>
            <p className="contact-info">
              <span className="contact-label">Phone:</span> 061 149 8474
            </p>
            <p className="contact-info">
              <span className="contact-label">Location:</span> Durban, South Africa
            </p>
          </motion.div>
        </motion.div>
        
        {/* Social Media Icons */}
        <motion.div 
          className="social-icons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/codebymarco" 
             target="_blank" 
             rel="noopener noreferrer"
             className="social-icon github"
             aria-label="GitHub Profile">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" 
             target="_blank" 
             rel="noopener noreferrer"
             className="social-icon linkedin"
             aria-label="LinkedIn Profile">
            <FaLinkedinIn size={24} />
          </a>
          <a href="mailto:miguelmarcoramcharan@gmail.com" 
             className="social-icon email"
             aria-label="Send Email">
            <MdEmail size={26} />
          </a>
          <a href="https://twitter.com/yourusername" 
             target="_blank" 
             rel="noopener noreferrer"
             className="social-icon twitter"
             aria-label="Twitter Profile">
            <FaXTwitter size={22} />
          </a>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="copyright">
            © {currentYear} Miguelmarco Ramcharan. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#privacy" className="legal-link">
              Privacy Policy
            </a>
            <a href="#terms" className="legal-link">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.95) 70%, rgba(13, 21, 28, 0.9) 100%);
          color: #ffffff;
          padding: 4rem 2rem 2rem;
          width: 100%;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.8);
        }

        .footer::before {
          content: '';
          position: absolute;
          top: -150px;
          right: -150px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(97, 218, 251, 0.1);
          filter: blur(120px);
          z-index: 0;
        }
        
        .footer::after {
          content: '';
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: rgba(97, 218, 251, 0.08);
          filter: blur(100px);
          z-index: 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          position: relative;
          z-index: 1;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(97, 218, 251, 0.1);
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
          color: #61DAFB;
          font-size: 2rem;
          margin: 0 0 1rem 0;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 15px rgba(97, 218, 251, 0.4);
          letter-spacing: 1px;
          font-weight: 600;
          background: linear-gradient(to right, #61DAFB, #ffffff);
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
          background: linear-gradient(to right, #61DAFB, rgba(97, 218, 251, 0.3));
          border-radius: 3px;
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.6);
        }

        .brand-desc {
          color: #aaa;
          margin: 1.2rem 0 0 0;
          font-size: 1rem;
          max-width: 300px;
          line-height: 1.6;
        }

        .footer-links {
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
          background: linear-gradient(to right, #61DAFB, rgba(97, 218, 251, 0.3));
          border-radius: 2px;
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
          color: #61DAFB;
          padding-left: 5px;
        }

        .footer-link::before {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #61DAFB;
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

        .social-icons {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem 0;
          margin: 0 auto;
          width: fit-content;
          position: relative;
        }
        
        .social-icons::before {
          content: '';
          position: absolute;
          top: 0;
          left: -20%;
          width: 140%;
          height: 1px;
          background: linear-gradient(90deg, 
            rgba(97, 218, 251, 0), 
            rgba(97, 218, 251, 0.3) 50%, 
            rgba(97, 218, 251, 0)
          );
        }
        
        .social-icons::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -20%;
          width: 140%;
          height: 1px;
          background: linear-gradient(90deg, 
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
          border-radius: 50%;
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
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(97, 218, 251, 0.15), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .social-icon:hover {
          color: #fff;
          transform: translateY(-5px) scale(1.1);
          border-color: rgba(97, 218, 251, 0.6);
          box-shadow: 
            0 10px 20px -10px rgba(0, 0, 0, 0.6),
            0 0 15px rgba(97, 218, 251, 0.3),
            inset 0 0 10px rgba(97, 218, 251, 0.15);
        }
        
        .social-icon:hover::before {
          opacity: 1;
        }
        
        .social-icon.github:hover {
          background: rgba(36, 41, 46, 0.8);
          border-color: #2ea44f;
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6), 0 0 15px rgba(46, 164, 79, 0.4);
        }
        
        .social-icon.linkedin:hover {
          background: rgba(10, 102, 194, 0.2);
          border-color: #0a66c2;
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6), 0 0 15px rgba(10, 102, 194, 0.4);
        }
        
        .social-icon.email:hover {
          background: rgba(234, 67, 53, 0.2);
          border-color: #ea4335;
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6), 0 0 15px rgba(234, 67, 53, 0.4);
        }
        
        .social-icon.twitter:hover {
          background: rgba(29, 161, 242, 0.2);
          border-color: #1da1f2;
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6), 0 0 15px rgba(29, 161, 242, 0.4);
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
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, 
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
          content: '•';
          color: #61DAFB;
          margin-left: 0.5rem;
          font-size: 1.2rem;
          opacity: 0.6;
          text-shadow: 0 0 8px #61DAFB;
          position: absolute;
          display: none;
        }

        .legal-links {
          display: flex;
          gap: 2rem;
          position: relative;
        }
        
        .legal-links::before {
          content: '';
          position: absolute;
          left: -1rem;
          top: 50%;
          width: 1px;
          height: 1.2rem;
          background: linear-gradient(to bottom, 
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
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: #61DAFB;
          transition: width 0.3s ease;
        }

        .legal-link:hover {
          color: #61DAFB;
        }
        
        .legal-link:hover::after {
          width: 100%;
        }

        /* Responsive styling */
        @media (max-width: 992px) {
          .footer {
            padding: 3rem 1.5rem 1.5rem;
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
          .footer-contact {
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
            padding: 2.5rem 1rem 1.5rem;
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