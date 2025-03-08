import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGoogle,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGoland,
  SiRabbitmq,
  SiJenkins,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import "../../styles/certs.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const skillIcons = {
  html: { icon: FaHtml5, color: "#E34F26" },
  css: { icon: FaCss3Alt, color: "#1572B6" },
  typescript: { icon: SiTypescript, color: "#007ACC" },
  react: { icon: FaReact, color: "#61DAFB" },
  node: { icon: FaNodeJs, color: "#339933" },
  golang: { icon: SiGoland, color: "#00ADD8" },
  python: { icon: FaPython, color: "#3776AB" },
  rabbitmq: { icon: SiRabbitmq, color: "#FF6600" },
  jenkins: { icon: SiJenkins, color: "#D24939" },
  kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  docker: { icon: FaDocker, color: "#2496ED" },
  sql: { icon: SiPostgresql, color: "#336791" }, // Using PostgreSQL icon for SQL
  nosql: { icon: SiMongodb, color: "#47A248" },
  "aws s3": { icon: FaAws, color: "#FF9900" },
  "aws cloudfront": { icon: FaAws, color: "#FF9900" },
  "google cloud platform": { icon: FaGoogle, color: "#4285F4" },
};

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
        damping: 12
      }
    },
  };

  // Project details with tech stacks
  const projects = [
    {
      name: "portfoliobio",
      description: "Personal portfolio website showcasing skills and projects",
      tech: ["react", "css", "node"],
      liveUrl: "https://codebymarco.vercel.app"
    },
    {
      name: "indeed",
      description: "Job search platform clone with custom filtering",
      tech: ["react", "node", "sql"],
      liveUrl: "https://indeed-clone.codebymarco.com"
    },
    {
      name: "linkbio",
      description: "Linktree-style bio page for social media profiles",
      tech: ["html", "css", "typescript"],
      liveUrl: "https://linkbio.codebymarco.com"
    },
    {
      name: "formio",
      description: "Dynamic form builder and submission management system",
      tech: ["react", "node", "nosql"],
      liveUrl: "https://formio.codebymarco.com"
    }
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
              onClick={() => navigate(`/apps/${project.name}`)}
              className="project-box"
              variants={itemVariants}
              key={project.name}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(97, 218, 251, 0.2)",
                borderColor: "rgba(97, 218, 251, 0.4)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="project-title">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech) => {
                  const IconComponent = skillIcons[tech]?.icon;
                  return IconComponent ? (
                    <div className="tech-icon" key={tech}>
                      <IconComponent 
                        style={{ color: skillIcons[tech].color }} 
                        title={tech}
                      />
                      <span>{tech}</span>
                    </div>
                  ) : null;
                })}
              </div>
              <div className="project-actions">
                <div className="view-project" onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/apps/${project.name}`);
                }}>
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
            </motion.div>
          );
        })}
      </motion.div>

      <style jsx>{`
        .projects {
          background-image: radial-gradient(circle at 50% 30%, #111111 0%, #000000 70%);
          background-color: black;
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 30px;
          padding: 40px 20px;
        }
        
        .projects-top {
          padding: 20px;
          text-align: center;
          color: white;
          margin-bottom: 20px;
          position: relative;
        }
        
        .projects-top h1 {
          font-size: 2.5rem;
          letter-spacing: 2px;
          position: relative;
          display: inline-block;
          color: #61DAFB;
          text-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
        }
        
        .projects-top h1:after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: #61DAFB;
          box-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
        }
        
        .projects-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          width: fit-content;
          max-width: 1000px;
        }
        
        .project-box {
          display: flex;
          flex-direction: column;
          border-radius: 15px;
          color: white;
          padding: 25px;
          cursor: pointer;
          width: 320px;
          height: 320px;
          background-color: rgba(13, 13, 13, 0.9);
          border: 1px solid rgba(97, 218, 251, 0.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .project-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(97, 218, 251, 0.1);
          border-color: rgba(97, 218, 251, 0.3);
        }
        
        .project-title {
          font-size: 1.5rem;
          margin: 0 0 15px 0;
          color: #61DAFB;
          font-weight: 600;
        }
        
        .project-description {
          color: #bbb;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        
        .tech-stack {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
        }
        
        .tech-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }
        
        .tech-icon svg {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }
        
        .tech-icon span {
          font-size: 0.7rem;
          color: #999;
        }
        
        .project-box:hover .tech-icon svg {
          transform: scale(1.2);
        }
        
        .project-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }
        
        .view-project, .live-link {
          color: #61DAFB;
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          cursor: pointer;
        }
        
        .view-project span, .live-link span {
          transition: transform 0.3s ease;
        }
        
        .project-box:hover .view-project span {
          transform: translateX(5px);
        }
        
        .project-box:hover .live-link span {
          transform: translate(3px, -3px);
        }
        
        .live-link {
          position: relative;
        }
        
        .live-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #61DAFB;
          transition: width 0.3s ease;
        }
        
        .project-box:hover .live-link::after {
          width: 100%;
        }
        
        /* Responsive styles - tablet */
        @media screen and (max-width: 768px) {
          .projects-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
        
        /* Responsive styles - mobile */
        @media screen and (max-width: 480px) {
          .project-box {
            width: 280px;
            height: auto;
            min-height: 280px;
            padding: 20px;
          }
          
          .projects-top h1 {
            font-size: 2rem;
          }
          
          .projects {
            padding: 20px 10px;
            gap: 20px;
          }
          
          .tech-stack {
            gap: 10px;
            flex-wrap: wrap;
          }
          
          .project-actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          
          .tech-icon svg {
            font-size: 1.3rem;
          }
        }
        
        /* Very small devices */
        @media screen and (max-width: 320px) {
          .project-box {
            width: 250px;
            min-height: 250px;
            padding: 15px;
          }
          
          .project-title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;