import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../styles/certs.css";
import { useEffect } from "react";
import useTranslationStore from "../../store/store";
import { Link } from "react-router-dom";

const Projects = () => {
  const { t } = useTranslationStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();

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
    hidden: { opacity: 0, y: 40 },
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

  // Project details
  const projects = [
    {
      name: "linkbio",
      description: "Personal linkbio website showcasing all links",
      liveUrl: "https://linkbio-console.vercel.app",
    },
    {
      name: "indeed",
      description: "Job search platform clone with custom filtering",
      liveUrl: "https://indeed-console.vercel.app",
    },
    {
      name: "formio",
      description: "Personal linkbio website showcasing all links",
      liveUrl: "https://linkbio-console.vercel.app",
    },
  ];

  return (
    <div className="projects">
      <div className="container">
        <div className="projects-top">
          <h1>{t("projects_heading")}</h1>
          <div className="projects-intro">{t("projects_description")}</div>
        </div>
        
        <motion.div
          className="projects-container"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              variants={itemVariants}
              key={project.name}
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate(`/apps/${project.name}`)}
            >
              <h2 className="project-title">{project.name}</h2>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .projects {
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
          justify-content: center;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.8);
        }

        .projects::before {
          content: "";
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

        .projects::after {
          content: "";
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

        .projects-top {
          padding: 20px;
          text-align: center;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .projects-top h1 {
          color: #61dafb;
          font-size: 2.5rem;
          letter-spacing: 2px;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 15px rgba(97, 218, 251, 0.4);
          font-weight: 600;
          margin: 0;
          background: linear-gradient(to right, #61dafb, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .projects-top h1::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(
            to right,
            rgba(97, 218, 251, 0.3),
            #61dafb,
            rgba(97, 218, 251, 0.3)
          );
          border-radius: 3px;
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.6);
        }

        .projects-intro {
          font-size: 1.2rem;
          color: #aaa;
          margin-top: 15px;
          letter-spacing: 1px;
          font-weight: 300;
        }

        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          z-index: 1;
          align-items: center;
        }

        /* Project card styles */
        .project-card {
          width: 700px;
          height: 120px;
          background-color: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(97, 218, 251, 0.15);
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35),
            0 0 15px rgba(97, 218, 251, 0.1);
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .project-card:hover {
          border-color: rgba(97, 218, 251, 0.3);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4), 
            0 0 20px rgba(97, 218, 251, 0.2);
          transform: translateY(-5px);
        }

        .project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(97, 218, 251, 0.05),
            transparent
          );
          border-radius: 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-title {
          font-size: 1.8rem;
          margin: 0;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-align: center;
          color: #61dafb;
        }

        /* More link styles */
        .more-link-container {
          margin-top: 30px;
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .more-link {
          display: inline-block;
          font-size: 1.4rem;
          color: #61dafb;
          text-decoration: none;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 500;
          padding: 12px 30px;
          border: 1px solid rgba(97, 218, 251, 0.3);
          border-radius: 30px;
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(5px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(97, 218, 251, 0.15);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .more-link:hover {
          background: rgba(17, 17, 17, 0.8);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(97, 218, 251, 0.25);
          transform: translateY(-2px);
          color: #ffffff;
          border-color: rgba(97, 218, 251, 0.5);
        }

        .more-link span {
          position: relative;
          z-index: 2;
        }

        .cosmic-trail {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(97, 218, 251, 0.1), rgba(97, 218, 251, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
          pointer-events: none;
        }

        .more-link:hover .cosmic-trail {
          transform: translateX(100%);
        }

        .more-link:after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #61dafb, transparent);
          transition: all 0.3s ease;
        }

        /* Responsive styles - tablet */
        @media screen and (max-width: 768px) {
          .projects-container {
            gap: 25px;
          }

          .projects-top h1 {
            font-size: 2.2rem;
          }

          .project-card {
            width: 90%;
            height: auto;
            padding: 25px;
          }
          
          .container {
            padding: 1.5rem;
          }
        }

        /* Responsive styles - mobile */
        @media screen and (max-width: 480px) {
          .project-card {
            width: 100%;
            height: auto;
            padding: 20px;
          }

          .projects-top h1 {
            font-size: 1.8rem;
            letter-spacing: 1px;
          }

          .projects {
            padding: 40px 15px;
          }

          .project-title {
            font-size: 1.6rem;
          }
          
          .more-link {
            font-size: 1.2rem;
            padding: 10px 25px;
          }
          
          .container {
            padding: 1rem;
            gap: 2rem;
          }
        }

        /* Very small devices */
        @media screen and (max-width: 320px) {
          .project-card {
            padding: 15px;
          }

          .project-title {
            font-size: 1.3rem;
          }

          .projects-top h1 {
            font-size: 1.6rem;
          }

          .more-link {
            font-size: 1.1rem;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;