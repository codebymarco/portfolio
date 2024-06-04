import "../../styles/skills.css";
import { motion } from "framer-motion";

const Skills = () => {
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
    <div className="skills">
      <div className="skills-top">
        <h1>SKILLS</h1>
      </div>
      <motion.div
        className="skillspage-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {["html", "css", "typescript", "react", "node", "golang", "python", "rabbitmq", "jenkins", "kubernetes", "docker", "sql", "nosql", "aws s3", "aws cloudfront", "google cloud platform"].map((skill, index) => (
          <motion.div className="box" variants={itemVariants} key={skill}>
            <span>{skill}</span>
            <span>{String(index + 1).padStart(2, '0')}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
