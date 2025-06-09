import React from "react";
// import { Link } from "react-router-dom";
// import { FaTwitter, FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";

const BannerTwo = () => {
  return (
    <>
      <style jsx>{`
        .banner {
          height: 90vh;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          overflow: hidden;
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
          background-image: url("/image.png");
        }

        .bg-image-2 {
          background-image: url("/image3.png");
        }

        .bg-image-3 {
          background-image: url("/image2.png");
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
          font-size: 28px;
          color: #a0a0a0;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          color: dodgerblue;
          transform: scale(1.1);
        }

        .banner-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top:20px;
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
            font-size: 24px;
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
            font-size: 22px;
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
            <a href="#" className="social-icon">
              🐦
            </a>
            <a href="#" className="social-icon">
              📷
            </a>
            <a href="#" className="social-icon">
              🎵
            </a>
            <a href="#" className="social-icon">
              📺
            </a>
            <a href="#" className="social-icon">
              💼
            </a>
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
