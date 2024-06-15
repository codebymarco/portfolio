import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../../styles/app.css";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiRabbitmq, SiRender, SiTypescript } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

const PortfolioHub = () => {
  return (
    <div className="app">
      <div className="app-nav">
        <Link to="/apps">apps/portfoliohub</Link>
      </div>
      <div className="app-top">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          PORTFOLIOHUB
        </motion.h1>
      </div>
      <div className="app-links">
        <a href="https://iportfolio-console.vercel.app/" target="_blank">view site</a>
        <Link to="/">
          {" "}
          <FiGithub color="white" />
          repo
        </Link>
      </div>
      <div className="app-container">
        <motion.div
          className="app-photo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        ></motion.div>
        <div className="app-detials">
          <div className="app-details-box description">
            <h2>description</h2>
            <p>
              <span style={{color:'dodgerblue'}}>PortfolioHub</span> is a versatile web application designed to empower
              users to create and manage their personal web portfolios
              effortlessly. Whether you're a designer, developer, artist, or any
              other professional, PortfolioHub provides the tools you need to
              showcase your work and track your portfolio's performance.
            </p>
          </div>
          <div className="divider"></div>

          <div className="app-details-box">
            <h2>technologies used</h2>
            <div className="app-detials-box-technologies">
              <div className="box">
                <FaHtml5 color="E34F26" />
                html
              </div>
              <div className="box">
                {" "}
                <FaCss3Alt color="1572B6" />
                css
              </div>
              <div className="box">
                {" "}
                <SiTypescript color="007ACC" /> typescript
              </div>
              <div className="box">
                <FaNodeJs color="#339933" />
                node
              </div>
              <div className="box">
                <SiMongodb color="#47A248" />
                nosql
              </div>
              <div className="box">
                <SiMongodb color="#47A248" />
                mongodb
              </div>
              <div className="box">
                <SiRabbitmq color="#FF6600" />
                rabbitmq
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="app-details-box">
            <h2>hosting</h2>
            <div className="app-detials-box-technologies">
              <div className="box">
                {" "}
                <IoLogoVercel color="white" />
                vercel
              </div>
              <div className="box">
                <SiRender color="yellow" />
                render
              </div>
              <div className="box">
                <SiMongodb color="#47A248" />
                mongo atlas
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="app-details-box">
            <h2>links</h2>
            <div className="app-detials-box-technologies">
              <div className="box hover">live app</div>
              <div className="box hover">
                <FiGithub color="white" />
                git repo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHub;
