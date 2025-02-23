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
import "../../styles/skills.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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

const Blogs = () => {
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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="skills">
      <div className="skills-top">
        <h1>BLOGS</h1>
      </div>
      <motion.div
        className="skillspage-container3"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {[
          "Introduction to Full-Stack Development",
          "Modern Frontend Frameworks: React vs. Angular vs. Vue",
          "Mastering HTML5 & CSS3: Responsive Design Essentials",
          "Exploring JavaScript ES6+: New Features and Best Practices",
          "Building Robust Backends with Node.js and Express",
          "Web Development with Python: A Look at Flask and Django",
          "Understanding Databases: SQL, NoSQL, and Beyond",
          "Designing and Consuming RESTful APIs",
          "GraphQL in Action: When and How to Use It",
          "Microservices Architecture: Benefits and Challenges",
          "State Management in Modern Web Applications",
          "Real-Time Web Apps: Implementing WebSockets",
          "Continuous Integration and Continuous Deployment (CI/CD) Explained",
          "Serverless Architecture: Concepts and Practical Use Cases",
          "Version Control with Git: Essential Workflows for Teams",
          "Security Best Practices for Full-Stack Applications",
          "Optimizing Performance: Frontend and Backend Strategies",
          "Integrating Third-Party APIs for Enhanced Functionality",
          "DevOps Fundamentals: Bridging Development and Operations",
          "Future Trends in Full-Stack Development and Deployment",
        ].map((skill, index) => {
          return (
            <motion.div
              onClick={() => navigate(`/blog/data`)}
              className="box"
              variants={itemVariants}
              key={skill}
            >
              <span
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                {skill}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Blogs;
