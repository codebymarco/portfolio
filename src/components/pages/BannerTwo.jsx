import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLink, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const BannerTwo = () => {
  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;600;700&display=swap");

        .banner {
          height: 90vh;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          overflow: hidden;
          font-family: "Orbitron", monospace;
        }

        .banner-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          z-index: 1;
        }

        .bg-image {
          flex: 1;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .bg-image-1 {
          background-image: url("/image.webp");
        }

        .bg-image-2 {
          background-image: url("/image3.webp");
        }

        .bg-image-3 {
          background-image: url("/image2.webp");
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.92);
          z-index: 2;
        }

        .banner-content {
          position: relative;
          z-index: 3;
          text-align: center;
          color: white;
          max-width: 800px;
        }

        .banner-name {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 10px;
          background: linear-gradient(to right, #ffffff, #e0e0e0);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 2px;
        }

        .job-title {
          font-size: 1.8rem;
          color: #a0a0a0;
          margin-bottom: 15px;
          letter-spacing: 3px;
          font-weight: 300;
        }

        .tagline {
          font-size: 1.2rem;
          color: #cccccc;
          margin-bottom: 30px;
          font-style: italic;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-bottom: 40px;
        }

        .social-icon {
          color: #a0a0a0;
          background: rgba(255, 255, 255, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          text-decoration: none;
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
            rgba(255, 255, 255, 0.15),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .social-icon:hover {
          color: #fff;
          transform: translateY(-5px) scale(1.1);
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6),
            0 0 15px rgba(255, 255, 255, 0.3),
            inset 0 0 10px rgba(255, 255, 255, 0.15);
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

        .social-icon.instagram:hover {
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
          border-color: #e1306c;
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6),
            0 0 15px rgba(225, 48, 108, 0.4);
        }

        .social-icon.tiktok:hover {
          background: rgba(254, 44, 85, 0.2);
          border-color: #fe2c55;
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6),
            0 0 15px rgba(254, 44, 85, 0.4);
        }

        .social-icon.youtube:hover {
          background: rgba(255, 0, 0, 0.2);
          border-color: #ff0000;
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.6),
            0 0 15px rgba(255, 0, 0, 0.4);
        }

        .banner-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .banner-btn {
          padding: 12px 30px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          min-width: 140px;
          text-align: center;
        }

        .contact-btn {
          background: white;
          color: black;
          border: 2px solid white;
        }

        .contact-btn:hover {
          background: dodgerblue;
          color: white;
          border-color: dodgerblue;
        }

        .about-btn {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .about-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: dodgerblue;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .banner {
            padding: 15px;
          }

          .bg-image-2,
          .bg-image-3 {
            display: none;
          }

          .banner-name {
            font-size: 2.5rem;
          }

          .job-title {
            font-size: 1.4rem;
          }

          .tagline {
            font-size: 1rem;
          }

          .social-icons {
            gap: 20px;
            margin-bottom: 30px;
          }

          .social-icon {
            width: 45px;
            height: 45px;
          }

          .banner-buttons {
            flex-direction: column;
            align-items: center;
          }

          .banner-btn {
            width: 200px;
          }
        }

        @media (max-width: 480px) {
          .banner-name {
            font-size: 2rem;
          }

          .job-title {
            font-size: 1.2rem;
          }

          .social-icons {
            gap: 15px;
          }

          .social-icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <div className="banner">
        {/* Background Images */}
        <div className="banner-bg">
          <div className="bg-image bg-image-1"></div>
          <div className="bg-image bg-image-2"></div>
          <div className="bg-image bg-image-3"></div>
        </div>

        {/* Dark Overlay */}
        <div className="banner-overlay"></div>

        {/* Content */}
        <div className="banner-content">
          <h1 className="banner-name">MARCO RAMCHARAN</h1>

          <p className="job-title">FULL STACK DEVELOPER</p>

          <p className="tagline">
            Crafting digital experiences with passion and precision
          </p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://www.youtube.com/@codebymarco"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
              aria-label="GitHub Profile"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://linktr.ee/codebymarco"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
              aria-label="GitHub Profile"
            >
              <FaLink size={24} />
            </a>
            <a
              href="https://github.com/codebymarco"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            {/*             <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={24} />
            </a> */}
            <a
              href="mailto:miguelmarcoramcharan@gmail.com"
              className="social-icon email"
              aria-label="Send Email"
            >
              <MdEmail size={26} />
            </a>
            <a
              href="https://x.com/code_by_marco"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter"
              aria-label="Twitter Profile"
            >
              <FaXTwitter size={24} />
            </a>
            {/*             <a
              href="https://instagram.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Instagram Profile"
            >
              <FaInstagram size={24} />
            </a> */}
          </div>

          {/* Buttons */}
          <div className="banner-buttons">
            <a href="/contact" className="banner-btn contact-btn">
              Contact Me
            </a>
            <a href="/about" className="banner-btn about-btn">
              About Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTwo;
