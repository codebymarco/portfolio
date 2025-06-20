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
  SiVisualstudiocode,
  SiXaml,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

// Import the new CSS file
import { motion } from "framer-motion";
import useTranslationStore from "../../store/store";
import { Helmet } from "react-helmet";
import "../../styles/skillsPage.css";
import my_image from "../../assets/blog_images/452a6885-7483-423c-86c0-a96a4a76e831.jpg";
import n8n from "../../assets/n8n.png";
import ai from "../../assets/ai.png";
import gpt from "../../assets/gpt.png";
import zabix from "../../assets/zabix.png";
import xml from "../../assets/xml.png";
import claude from "../../assets/claude.png";
import rest from "../../assets/rest.png";
import api from "../../assets/api.png";

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
  sql: { icon: SiPostgresql, color: "#336791" },
  nosql: { icon: SiMongodb, color: "#47A248" },
  aws: { icon: FaAws, color: "#FF9900" },
  gcp: { icon: FaGoogle, color: "#4285F4" },
  // New skills using image
  n8n: { icon: n8n, color: "#EA4B71", isImage: true },
  zabbix: { icon: zabix, color: "#CC0000", isImage: true },
  ai: { icon: ai, color: "#FF6B6B", isImage: true },
  chatgpt: { icon: gpt, color: "#10A37F", isImage: true },
  claude: { icon: claude, color: "#CC785C", isImage: true },
  vscode: { icon: SiVisualstudiocode, color: "#007ACC" },
  apis: { icon: api, color: "#4A90E2", isImage: true },
  rest: { icon: rest, color: "#61DAFB", isImage: true },
  xml: { icon: xml, color: "#FF6600", isImage: true },
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
    <div className="skillsPageMobile">
      <Helmet>
        <title>
          Technical Skills & Expertise | Miguelmarco Ramcharan - Fullstack
          Developer
        </title>
        <meta
          name="description"
          content="Explore the technical skills of Miguelmarco Ramcharan of CodeByMarco: a Fullstack Developer proficient in React, Node.js, JavaScript, Python & more. See my expertise."
        />
        <link rel="canonical" href="https://www.codebymarco.com/skills" />
        <meta
          property="og:title"
          content="Technical Skills & Expertise | Miguelmarco Ramcharan - Fullstack Developer"
        />
        <meta
          property="og:description"
          content="Explore the technical skills of Miguelmarco Ramcharan of CodeByMarco: a Fullstack Developer proficient in React, Node.js, JavaScript, Python & more. See my expertise."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.codebymarco.com/skills" />
        <meta
          property="og:image"
          content="https://www.codebymarco.com/images/codebymarco-skills-og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="CodeByMarco" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <meta name="twitter:creator" content="@your_twitter_handle" />
        <meta
          name="twitter:title"
          content="Technical Skills & Expertise | Miguelmarco Ramcharan - Fullstack Developer"
        />
        <meta
          name="twitter:description"
          content="Explore the technical skills of Miguelmarco Ramcharan of CodeByMarco: a Fullstack Developer proficient in React, Node.js, JavaScript, Python & more. See my expertise."
        />
        <meta
          name="twitter:image"
          content="https://www.codebymarco.com/images/codebymarco-skills-og-image.jpg"
        />
      </Helmet>

      <div className="skillsHeaderMobile">
        <h1 className="skillsTitleMobile">{t("skills_heading") || "SKILLS"}</h1>
        <div className="skillsSubtitleMobile">
          Technical expertise and proficiencies
        </div>
      </div>

      <motion.div
        className="skillsGridMobile"
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
          "n8n",
          "zabbix",
          "ai",
          "chatgpt",
          "claude",
          "vscode",
          "apis",
          "rest",
          "xml",
        ].map((skill) => {
          const skillData = skillIcons[skill];
          const IconComponent = skillData.icon;

          return (
            <motion.div
              className="skillBoxMobile"
              variants={itemVariants}
              key={skill}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 8px 25px rgba(0, 0, 0, 0.5), 0 0 20px ${skillData.color}30`,
              }}
            >
              <div className="skillIconMobile">
                {skillData.isImage ? (
                  <img
                    src={IconComponent}
                    alt={skill}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                ) : (
                  <IconComponent color={skillData.color} />
                )}
              </div>
              <span className="skillNameMobile">{skill}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
