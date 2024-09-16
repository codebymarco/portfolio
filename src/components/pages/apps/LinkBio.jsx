import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../../styles/app.css";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiOpenstreetmap,
  SiRabbitmq,
  SiRender,
  SiTypescript,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import img from "../../../assets/linkbio.png";

const LinkBio = () => {
  return (
    <div className="app">
      <div className="app-nav">
        <Link to="/apps">apps/linkbio</Link>
      </div>
      <div className="app-top">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          LINKBIO
        </motion.h1>
      </div>
      <div className="app-links">
        <a href="https://indeed-console.vercel.app/" target="_blank">
          view site
        </a>
        <a href="https://github.com/codebymarco/indeed_backend" target="_blank">
          <FiGithub color="white" />
          repo
        </a>
      </div>
      <div className="app-container">
        <motion.div
          className="app-photo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img src={img} alt="akfjhfl" />
        </motion.div>
        <div className="app-detials">
          <div className="app-details-box description">
            <h2>description</h2>
            <p>
              <span style={{ color: "dodgerblue" }}>LINKBIO</span> is a
              versatile application designed to help users create and manage a
              personalized bio link in one place. Whether you're a content
              creator wanting to share multiple links or a business looking to
              streamline your online presence, LinkBio provides an efficient
              platform to consolidate and showcase your most important links.
              With its user-friendly interface and customizable features,
              LinkBio enhances how you connect with your audience and present
              your online identity.
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
              <div className="box">
                <SiOpenstreetmap color="#47A248" />
                open street map
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

export default LinkBio;
