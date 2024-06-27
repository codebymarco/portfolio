import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../../styles/app.css";

const Indeed = () => {
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
          INDEED
        </motion.h1>
      </div>
      <div className="app-links">
        <Link to="/">view site</Link>
        <Link to="/">repo</Link>
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
              LinkBio is an innovative app designed to streamline your online
              presence by consolidating all your links onto a single,
              customizable page. Whether you're an influencer, a business, or an
              individual looking to share multiple links efficiently, LinkBio
              offers a user-friendly platform to manage and showcase your
              digital footprint.
            </p>
            <p>
              With LinkBio, you can create a personalized page that includes
              links to your social media profiles, websites, blogs, online
              stores, and any other online resources you want to share. The app
              provides various templates and customization options, allowing you
              to design a page that reflects your unique style and branding.
            </p>
          </div>
          <div className="divider"></div>

          <div className="app-details-box">
            <h2>technologies used</h2>
            <div className="app-detials-box-technologies">
              <div className="box">html</div>
              <div className="box">css</div>
              <div className="box">typescript</div>
              <div className="box">node</div>
              <div className="box">nosql</div>
              <div className="box">mongodb</div>
              <div className="box">rabbitmq</div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="app-details-box">
            <h2>hosting</h2>
            <div className="app-detials-box-technologies">
              <div className="box">vercel</div>
              <div className="box">render</div>
              <div className="box">mongoatls</div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="app-details-box">
            <h2>links</h2>
            <div className="app-detials-box-technologies">
              <div className="box">live app</div>
              <div className="box">git repo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indeed;
