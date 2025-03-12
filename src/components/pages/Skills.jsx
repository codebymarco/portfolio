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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="skillsPageNew">
      <div className="skillsPageNewTop">
        <h1 className="career-history-title">{t("skills_heading")}</h1>
      </div>
      <motion.div
        className="skillsPageNewcontainer"
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
            <motion.div className="box" variants={itemVariants} key={skill}>
              <span
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <IconComponent color={skillIcons[skill].color} size="0.8em" />
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
