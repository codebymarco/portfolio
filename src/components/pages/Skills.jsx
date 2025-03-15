import {
  FaHtml5,
  FaCss3Alt,
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
import { TbBrandCSharp } from "react-icons/tb";

import "../../styles/skillsPage.css";
import { motion } from "framer-motion";
import useTranslationStore from "../../store/store";

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
  aws: { icon: FaAws, color: "#FF9900" },
  gcp: { icon: FaGoogle, color: "#4285F4" },
};

const Skills = () => {
  const { t } = useTranslationStore();

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
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <div className="skillsPage">
      <div className="container">
        <div className="skillsPageTop">
          <h1 className="skillsHeading">{t("skills_heading")}</h1>
          <div className="skills-intro">Technical expertise and proficiencies</div>
        </div>
        
        <motion.div
          className="skillsContainer"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {[
            "html",
            "css",
            "typescript",
            "react",
            "node",
            "golang",
            "python",
            "rabbitmq",
            "jenkins",
            "kubernetes",
            "docker",
            "sql",
            "nosql",
            "aws",
            "gcp",
          ].map((skill, index) => {
            const IconComponent = skillIcons[skill].icon;
            return (
              <motion.div 
                className="skill-box" 
                variants={itemVariants} 
                key={skill}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: `0 8px 25px rgba(0, 0, 0, 0.5), 0 0 20px ${skillIcons[skill].color}30`
                }}
              >
                <IconComponent color={skillIcons[skill].color} size={32} />
                <span className="skill-name">{skill}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        .skillsPage {
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

        .skillsPage::before {
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

        .skillsPage::after {
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

        .skillsPageTop {
          padding: 20px;
          text-align: center;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .skillsHeading {
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

        .skillsHeading::after {
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

        .skills-intro {
          font-size: 1.2rem;
          color: #aaa;
          margin-top: 15px;
          letter-spacing: 1px;
          font-weight: 300;
        }

        .skillsContainer {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          width: 100%;
          z-index: 1;
        }

        .skill-box {
          background-color: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(97, 218, 251, 0.15);
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35),
            0 0 15px rgba(97, 218, 251, 0.1);
          padding: 25px 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          height: 100%;
          min-height: 130px;
        }

        .skill-box:hover {
          border-color: rgba(97, 218, 251, 0.3);
          transform: translateY(-5px);
        }

        .skill-box::before {
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

        .skill-box:hover::before {
          opacity: 1;
        }

        .skill-name {
          color: #ffffff;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
          transition: color 0.3s ease;
          text-align: center;
        }

        .skill-box:hover .skill-name {
          color: #61dafb;
        }

        /* Responsive styles - tablet */
        @media screen and (max-width: 768px) {
          .skillsContainer {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .skillsHeading {
            font-size: 2.2rem;
          }
          
          .container {
            padding: 1.5rem;
          }
          
          .skill-box {
            min-height: 110px;
            padding: 20px 15px;
          }
        }

        /* Responsive styles - mobile */
        @media screen and (max-width: 480px) {
          .skillsContainer {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .skillsHeading {
            font-size: 1.8rem;
            letter-spacing: 1px;
          }

          .skillsPage {
            padding: 40px 15px;
          }
          
          .container {
            padding: 1rem;
            gap: 2rem;
          }
          
          .skill-box {
            min-height: 100px;
            padding: 15px 10px;
          }
        }

        /* Very small devices */
        @media screen and (max-width: 320px) {
          .skillsHeading {
            font-size: 1.6rem;
          }
          
          .skill-box {
            min-height: 90px;
            padding: 15px 10px;
          }
          
          .skill-name {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;