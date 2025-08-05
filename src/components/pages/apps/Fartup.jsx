import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../../styles/app.css";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiOpenstreetmap,
  SiRabbitmq,
  SiRender,
  SiTypescript,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import img from "../../../assets/fartup.png";
import { useEffect } from "react";

const Fartup = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

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
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <div className="appWrapper">
      <div className="container">
        <div className="app-nav">
          <Link to="/apps" className="app-breadcrumb">
            apps / fartup
          </Link>
        </div>

        <div className="app-top">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="app-title"
          >
            FARTUP
          </motion.h1>

          <div className="app-links">
            <motion.a
              href="https://nftcentral.codebymarco.com/"
              target="_blank"
              className="app-link"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              View Site
            </motion.a>
          </div>
        </div>

        <div className="app-container">
          <motion.div
            className="app-photo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img
              src={img}
              alt="Indeed project screenshot"
              className="project-image"
            />
          </motion.div>

          <motion.div
            className="app-details"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="app-details-box" variants={itemVariants}>
              <h2 className="section-title">Description</h2>
              <p className="description-text">
                <span className="highlight">FARTUP</span> is a hilarious
                arcade-style game inspired by the classic Flappy Bird. But
                instead of flapping wings, you're rocketing through the air with
                high-powered farts! Navigate tricky obstacles, time your gas
                bursts just right, and soar to new heights in this outrageously
                funny flying challenge. Whether you're aiming for a new high
                score or just want a laugh, FARTUP delivers fart-fueled fun with
                every tap.
              </p>
            </motion.div>

            <div className="divider"></div>

            <motion.div className="app-details-box" variants={itemVariants}>
              <h2 className="section-title">Technologies Used</h2>
              <div className="tech-grid">
                <div className="tech-box">
                  <FaHtml5 color="#E34F26" size={22} />
                  <span>HTML</span>
                </div>
                <div className="tech-box">
                  <FaCss3Alt color="#1572B6" size={22} />
                  <span>CSS</span>
                </div>
                <div className="tech-box">
                  <SiTypescript color="#007ACC" size={22} />
                  <span>JavaScript</span>
                </div>
              </div>
            </motion.div>

            <div className="divider"></div>

            <motion.div className="app-details-box" variants={itemVariants}>
              <h2 className="section-title">Hosting</h2>
              <div className="tech-grid">
                <div className="tech-box">
                  <IoLogoVercel color="white" size={22} />
                  <span>Vercel</span>
                </div>
              </div>
            </motion.div>

            <div className="divider"></div>

            <motion.div className="app-details-box" variants={itemVariants}>
              <h2 className="section-title">Links</h2>
              <div className="links-grid">
                <a
                  href="https://nftcentral.codebymarco.com/"
                  target="_blank"
                  className="link-box"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .appWrapper {
          background: linear-gradient(
            to bottom,
            #000000 0%,
            rgba(0, 0, 0, 0.95) 70%,
            rgba(13, 21, 28, 0.9) 100%
          );
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.8);
        }

        .appWrapper::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 300px;
          height: 300px;
          background: rgba(97, 218, 251, 0.1);
          filter: blur(120px);
          z-index: 0;
        }

        .appWrapper::after {
          content: "";
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 250px;
          height: 250px;
          background: rgba(97, 218, 251, 0.08);
          filter: blur(100px);
          z-index: 0;
        }

        .container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          position: relative;
          z-index: 1;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          padding: 2.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(97, 218, 251, 0.1);
        }

        .app-nav {
          margin-bottom: 0.5rem;
          padding: 0 0.5rem;
        }

        .app-breadcrumb {
          color: #aaa;
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .app-breadcrumb:hover {
          color: #61dafb;
        }

        .app-top {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .app-title {
          color: #61dafb;
          font-size: 3rem;
          letter-spacing: 4px;
          font-weight: 700;
          margin: 0 0 1.5rem 0;
          text-align: center;
          background: linear-gradient(to right, #61dafb, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        .app-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 3px;
          background: linear-gradient(
            to right,
            rgba(97, 218, 251, 0.3),
            #61dafb,
            rgba(97, 218, 251, 0.3)
          );
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.6);
        }

        .app-links {
          display: flex;
          gap: 20px;
          margin: 1rem 0;
        }

        .app-link {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(10, 10, 10, 0.6);
          color: #61dafb;
          text-decoration: none;
          padding: 0.7rem 1.2rem;
          font-size: 0.9rem;
          letter-spacing: 1px;
          font-weight: 500;
          text-transform: uppercase;
          border: 1px solid rgba(97, 218, 251, 0.3);
          transition: all 0.3s ease;
        }

        .app-link:hover {
          background: rgba(17, 17, 17, 0.8);
          border-color: rgba(97, 218, 251, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3),
            0 0 10px rgba(97, 218, 251, 0.2);
        }

        .link-icon {
          margin-right: 5px;
        }

        .app-container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .app-photo {
          width: 100%;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5),
            0 0 15px rgba(97, 218, 251, 0.1);
          border: 1px solid rgba(97, 218, 251, 0.15);
        }

        .project-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .app-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .app-details-box {
          padding: 0.5rem;
        }

        .section-title {
          color: #61dafb;
          font-size: 1.5rem;
          letter-spacing: 1px;
          margin: 0 0 1rem 0;
          position: relative;
          display: inline-block;
          text-transform: capitalize;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 40px;
          height: 2px;
          background: #61dafb;
        }

        .description-text {
          color: #ddd;
          line-height: 1.6;
          margin: 0;
          font-size: 1rem;
        }

        .highlight {
          color: #61dafb;
          font-weight: 600;
        }

        .divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(97, 218, 251, 0),
            rgba(97, 218, 251, 0.3) 50%,
            rgba(97, 218, 251, 0)
          );
          margin: 0.5rem 0;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 15px;
          margin-top: 1rem;
        }

        .tech-box {
          background-color: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(97, 218, 251, 0.15);
          padding: 12px 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .tech-box:hover {
          border-color: rgba(97, 218, 251, 0.3);
          background-color: rgba(17, 17, 17, 0.7);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2),
            0 0 8px rgba(97, 218, 251, 0.1);
        }

        .tech-box span {
          color: #ddd;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 1rem;
        }

        .link-box {
          background-color: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(97, 218, 251, 0.2);
          padding: 12px 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #61dafb;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .link-box:hover {
          background-color: rgba(17, 17, 17, 0.8);
          border-color: rgba(97, 218, 251, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3),
            0 0 10px rgba(97, 218, 251, 0.15);
        }

        /* Responsive styles - tablet */
        @media screen and (max-width: 768px) {
          .app-container {
            gap: 2rem;
          }

          .app-title {
            font-size: 2.5rem;
          }

          .tech-grid,
          .links-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }

          .container {
            padding: 1.5rem;
          }
        }

        /* Responsive styles - mobile */
        @media screen and (max-width: 480px) {
          .app-title {
            font-size: 2rem;
            letter-spacing: 2px;
          }

          .app-links {
            flex-direction: column;
            gap: 10px;
            align-items: center;
          }

          .app-link {
            width: 100%;
            justify-content: center;
          }

          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .links-grid {
            grid-template-columns: 1fr;
          }

          .container {
            padding: 1rem;
            gap: 1.5rem;
          }

          .section-title {
            font-size: 1.3rem;
          }
        }

        /* Very small devices */
        @media screen and (max-width: 320px) {
          .app-title {
            font-size: 1.8rem;
          }

          .tech-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Fartup;
