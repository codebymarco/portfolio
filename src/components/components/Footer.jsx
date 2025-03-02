import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Me</h3>
          <p>
            Fullstack developer focused on creating responsive, user-friendly web experiences 
            with modern technologies.
          </p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="social-icon github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="social-icon linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="social-icon twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>
            <i className="contact-icon email"></i>
            <span>miguelmarcoramcharan@gmail.com</span>
          </p>
          <p>
            <i className="contact-icon location"></i>
            <span>Durban, South Africa</span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Miguel Marco Ramcharan. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          background-color: #000000;
          color: #f8f8f8;
          padding: 40px 0 20px;
          position: relative;
          width: 100%;
        }

        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-section {
          flex: 1;
          min-width: 250px;
          margin-bottom: 30px;
          padding-right: 20px;
        }

        .footer-section h3 {
          position: relative;
          color: #ffffff;
          font-size: 1.2rem;
          margin-bottom: 20px;
          padding-bottom: 10px;
        }

        .footer-section h3:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 40px;
          background-color: #555;
        }

        .about p {
          line-height: 1.6;
          margin-bottom: 20px;
          color: #aaa;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 15px;
        }

        .social-icon {
          display: inline-block;
          width: 30px;
          height: 30px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          opacity: 0.7;
          transition: opacity 0.3s;
        }

        .social-icon:hover {
          opacity: 1;
        }

        .github {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E");
        }

        .linkedin {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/%3E%3C/svg%3E");
        }

        .twitter {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'/%3E%3C/svg%3E");
        }

        .links ul {
          list-style: none;
          padding: 0;
        }

        .links ul li {
          margin-bottom: 10px;
        }

        .links ul li a {
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s;
        }

        .links ul li a:hover {
          color: #fff;
          padding-left: 5px;
        }

        .contact p {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          color: #aaa;
        }

        .contact-icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 10px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }

        .email {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23aaaaaa' viewBox='0 0 24 24'%3E%3Cpath d='M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z'/%3E%3C/svg%3E");
        }

        .location {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23aaaaaa' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/%3E%3C/svg%3E");
        }

        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          margin-top: 20px;
          border-top: 1px solid #222;
          color: #777;
          font-size: 0.9rem;
        }

        @media screen and (max-width: 768px) {
          .footer-content {
            flex-direction: column;
          }

          .footer-section {
            margin-bottom: 30px;
            padding-right: 0;
          }
        }

        @media screen and (max-width: 480px) {
          .footer {
            padding: 30px 0 15px;
          }

          .footer-section h3 {
            font-size: 1.1rem;
          }

          .social-links {
            justify-content: center;
          }

          .footer-bottom {
            margin-top: 15px;
            padding-top: 15px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;