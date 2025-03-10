import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../styles/certs.css";
import { useState } from "react";

const Projects = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        damping: 12,
      },
    },
  };

  // Project details without tech stacks
  const projects = [
    {
      name: "portfoliobio",
      description: "Personal portfolio website showcasing skills and projects",
      liveUrl: "https://iportfolio-console.vercel.app",
    },
    {
      name: "indeed",
      description: "Job search platform clone with custom filtering",
      liveUrl: "https://indeed-console.vercel.app",
    },
    {
      name: "linkbio",
      description: "Linktree-style bio page for social media profiles",
      liveUrl: "https://linkbio-console.vercel.app",
    },
    {
      name: "formio",
      description: "Dynamic form builder and submission management system",
      liveUrl: "https://formio-console.vercel.app",
    },
  ];

  return (
    <div className="projects">
      <div className="projects-top">
        <h1>PROJECTS</h1>
      </div>
      <motion.div
        className="projects-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {projects.map((project) => {
          return (
            <motion.div
              className="project-card-container"
              variants={itemVariants}
              key={project.name}
            >
              <div className="project-card">
                <div className="project-card-front">
                  <h2 className="project-title">{project.name}</h2>
                </div>
                <div className="project-card-back">
                  <p className="project-description">{project.description}</p>
                  <div className="project-actions">
                    <div
                      className="view-project"
                      onClick={() => navigate(`/apps/${project.name}`)}
                    >
                      View Details <span>→</span>
                    </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Project <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <style jsx>{`
        .projects {
          background-image: radial-gradient(
            circle at 50% 30%,
            #111111 0%,
            #000000 70%
          );
          background-color: black;
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 30px;
          padding: 60px 20px;
        }

        .projects-top {
          padding: 20px;
          text-align: center;
          color: white;
          margin-bottom: 30px;
          position: relative;
        }

        .projects-top h1 {
          font-size: 3rem;
          letter-spacing: 3px;
          position: relative;
          display: inline-block;
          color: #61dafb;
          text-shadow: 0 0 15px rgba(97, 218, 251, 0.6);
          font-weight: 700;
        }

        .projects-top h1:after {
          content: "";
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background-color: #61dafb;
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.7);
        }

        .projects-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          width: fit-content;
          max-width: 1200px;
        }

        .project-card-container {
          perspective: 1000px;
          width: 320px;
          height: 250px;
        }

        .project-card {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .project-card-container:hover .project-card {
          transform: rotateY(180deg);
        }

        .project-card-front, .project-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
        }

        .project-card-front {
          background-color: rgba(13, 13, 13, 0.9);
          border: 1px solid rgba(97, 218, 251, 0.15);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.35);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .project-card-back {
          background-color: rgba(18, 18, 24, 0.95);
          color: white;
          transform: rotateY(180deg);
          padding: 25px;
          border: 1px solid rgba(97, 218, 251, 0.4);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(97, 218, 251, 0.2);
          justify-content: space-between;
        }

        .project-title {
          font-size: 2.4rem;
          margin: 0;
          color: #61dafb;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-shadow: 0 0 10px rgba(97, 218, 251, 0.3);
        }

        .project-description {
          color: #ddd;
          line-height: 1.6;
          margin: 0 0 20px 0;
          font-size: 1.05rem;
        }

        .project-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .view-project,
        .live-link {
          color: #61dafb;
          font-size: 1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 8px 0;
        }

        .view-project:hover,
        .live-link:hover {
          color: white;
        }

        .view-project span,
        .live-link span {
          transition: transform 0.3s ease;
        }

        .view-project:hover span {
          transform: translateX(5px);
        }

        .live-link:hover span {
          transform: translate(3px, -3px);
        }

        .live-link {
          position: relative;
        }

        .live-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #61dafb;
          transition: width 0.3s ease;
        }

        .live-link:hover::after {
          width: 100%;
        }

        /* Responsive styles - tablet */
        @media screen and (max-width: 768px) {
          .projects-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* Responsive styles - mobile */
        @media screen and (max-width: 480px) {
          .project-card-container {
            width: 280px;
            height: 230px;
          }

          .projects-top h1 {
            font-size: 2.2rem;
          }

          .projects {
            padding: 40px 15px;
            gap: 25px;
          }

          .project-actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .project-title {
            font-size: 1.8rem;
          }
        }

        /* Very small devices */
        @media screen and (max-width: 320px) {
          .project-card-container {
            width: 240px;
            height: 200px;
          }

          .project-title {
            font-size: 1.5rem;
          }

          .project-card-back {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;