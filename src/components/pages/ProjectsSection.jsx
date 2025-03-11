import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../styles/certs.css";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
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
      name: "portfoliobio",
      description: "Personal portfolio website showcasing skills and projects",
      liveUrl: "https://iportfolio-console.vercel.app",
    },
    {
      name: "indeed",
      description: "Job search platform clone with custom filtering",
      liveUrl: "https://indeed-console.vercel.app",
    },
  ];

  return (
    <div className="projects">
      <div className="stars"></div>
      <div className="planets">
        <div className="planet planet-1"></div>
        <div className="planet planet-2"></div>
        <div className="galaxy"></div>
      </div>
      <div className="projects-top">
        <h1>PROJECTS</h1>
        <div className="projects-intro">Explore my digital creations</div>
        <Link to="/projects" className="more-link">
          more
        </Link>
      </div>
      <motion.div
        className="projects-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            className="flip-card"
            variants={itemVariants}
            key={project.name}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-content">
                  <h2 className="project-title">{project.name}</h2>
                  <div className="front-button">Explore</div>
                </div>
              </div>
              <div className="flip-card-back">
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  <div
                    className="view-project"
                    onClick={() => navigate(`/apps/${project.name}`)}
                  >
                    <span className="btn-text">View Details</span>
                    <span className="btn-icon">→</span>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="btn-text">Live Project</span>
                    <span className="btn-icon">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        .projects {
          background: #030318;
          background: linear-gradient(to bottom, #01010d, #030318, #050520);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
        }

        .projects::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at 50% 20%,
            rgba(30, 30, 70, 0.15),
            rgba(0, 0, 0, 0) 70%
          );
          pointer-events: none;
        }

        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #eee,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 160px 120px, #ddd, rgba(0, 0, 0, 0)),
            radial-gradient(1.5px 1.5px at 200px 190px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 240px 230px, #ddd, rgba(0, 0, 0, 0)),
            radial-gradient(1.5px 1.5px at 280px 270px, #eee, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 300px 300px;
          animation: animateStars 150s linear infinite;
          opacity: 0.7;
        }

        .planets {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .planet {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
        }

        .planet-1 {
          top: 15%;
          right: 15%;
          width: 80px;
          height: 80px;
          background: radial-gradient(
            circle at 30% 40%,
            #6b93d6,
            #3a539b 60%,
            #24365e
          );
          box-shadow: 0 0 40px rgba(107, 147, 214, 0.3);
          animation: rotatePlanet 120s linear infinite;
        }

        .planet-2 {
          bottom: 10%;
          left: 10%;
          width: 120px;
          height: 120px;
          background: radial-gradient(
            circle at 30% 40%,
            #ffb38a,
            #d46464 60%,
            #782b2b
          );
          box-shadow: 0 0 40px rgba(212, 100, 100, 0.2);
          animation: orbitPlanet 180s linear infinite;
        }

        .galaxy {
          position: absolute;
          top: 75%;
          right: 25%;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(210, 188, 233, 0.3) 0%,
            rgba(161, 57, 255, 0.1) 40%,
            rgba(0, 0, 0, 0) 70%
          );
          transform: rotate(-45deg) scale(1.5);
          opacity: 0.2;
          animation: pulseGalaxy 15s ease-in-out infinite alternate;
        }

        @keyframes rotatePlanet {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitPlanet {
          0% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(30px) translateY(-20px);
          }
          50% {
            transform: translateX(10px) translateY(-40px);
          }
          75% {
            transform: translateX(-30px) translateY(-20px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes pulseGalaxy {
          0%,
          100% {
            transform: rotate(-45deg) scale(1.5);
            opacity: 0.2;
          }
          50% {
            transform: rotate(-45deg) scale(1.8);
            opacity: 0.3;
          }
        }

        @keyframes animateStars {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 1000px 1000px;
          }
        }

        .projects-top {
          padding: 20px;
          text-align: center;
          color: white;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .projects-top h1 {
          font-size: 4rem;
          letter-spacing: 8px;
          position: relative;
          display: inline-block;
          color: transparent;
          background: linear-gradient(45deg, #61dafb, #a139ff);
          -webkit-background-clip: text;
          text-shadow: 0 5px 25px rgba(97, 218, 251, 0.4);
          font-weight: 800;
          margin: 0;
          animation: glow 3s ease-in-out infinite alternate;
        }

        @keyframes glow {
          0% {
            text-shadow: 0 0 10px rgba(97, 218, 251, 0.4);
          }
          100% {
            text-shadow: 0 0 30px rgba(97, 218, 251, 0.8),
              0 0 40px rgba(161, 57, 255, 0.4);
          }
        }

        .projects-intro {
          font-size: 1.2rem;
          color: #a0a0a0;
          margin-top: 15px;
          letter-spacing: 2px;
          font-weight: 300;
        }

        .more-link {
          display: inline-block;
          margin-top: 15px;
          color: #61dafb;
          font-size: 1rem;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 1px;
          position: relative;
          transition: all 0.3s ease;
          padding: 8px 20px;
          border-radius: 25px;
          background: rgba(97, 218, 251, 0.1);
          border: 1px solid rgba(97, 218, 251, 0.2);
          overflow: hidden;
        }

        .more-link:hover {
          color: white;
          background: rgba(97, 218, 251, 0.2);
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.3);
        }

        .more-link::after {
          content: "→";
          opacity: 0;
          margin-left: -10px;
          transition: all 0.3s ease;
        }

        .more-link:hover::after {
          opacity: 1;
          margin-left: 8px;
        }

        .projects-top h1:after {
          content: "";
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            #61dafb,
            #a139ff,
            transparent
          );
          animation: lineGlow 2s infinite;
        }

        @keyframes lineGlow {
          0%,
          100% {
            opacity: 0.5;
            box-shadow: 0 0 5px rgba(97, 218, 251, 0.5);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 15px rgba(97, 218, 251, 0.8),
              0 0 25px rgba(161, 57, 255, 0.5);
          }
        }

        .projects-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
          width: fit-content;
          max-width: 1200px;
          z-index: 1;
        }

        /* Flip card styles */
        .flip-card {
          width: 700px;
          height: 120px;
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35),
            0 0 15px rgba(97, 218, 251, 0.1);
          border-radius: 20px;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .flip-card-front {
          justify-content: center;
          align-items: center;
          padding: 30px;
          background-color: #111111;
          border: 1px solid rgba(97, 218, 251, 0.15);
        }

        .flip-card-back {
          background: rgba(20, 20, 35, 0.95);
          color: white;
          transform: rotateY(180deg);
          padding: 30px;
          justify-content: space-between;
          border: 1px solid rgba(97, 218, 251, 0.3);
        }

        .card-content {
          position: relative;
          z-index: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
        }

        .project-title {
          font-size: 2.6rem;
          margin: 0;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          color: #61dafb;
        }

        .front-button {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 8px 24px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .flip-card:hover .front-button {
          opacity: 1;
          transform: translateY(0);
        }

        .project-description {
          color: #ddd;
          line-height: 1.7;
          margin: 0 0 20px 0;
          font-size: 1.05rem;
          position: relative;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .project-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1;
        }

        .view-project,
        .live-link {
          color: #61dafb;
          font-size: 1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 10px 16px;
          background: rgba(97, 218, 251, 0.1);
          border-radius: 30px;
          border: 1px solid rgba(97, 218, 251, 0.2);
        }

        .view-project:hover,
        .live-link:hover {
          color: white;
          background: rgba(97, 218, 251, 0.25);
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.3);
        }

        .btn-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .view-project:hover .btn-icon {
          transform: translateX(5px);
        }

        .live-link:hover .btn-icon {
          transform: translate(3px, -3px);
        }

        /* Responsive styles - tablet */
        @media screen and (max-width: 768px) {
          .projects-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .projects-top h1 {
            font-size: 3rem;
          }
        }

        /* Responsive styles - mobile */
        @media screen and (max-width: 480px) {
          .flip-card {
            width: 290px;
            height: 230px;
          }

          .projects-top h1 {
            font-size: 2.5rem;
            letter-spacing: 5px;
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
            font-size: 2.2rem;
          }

          .flip-card-front,
          .flip-card-back {
            padding: 25px;
          }
        }

        /* Very small devices */
        @media screen and (max-width: 320px) {
          .flip-card {
            width: 250px;
            height: 200px;
          }

          .project-title {
            font-size: 1.8rem;
          }

          .projects-top h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsSection;
