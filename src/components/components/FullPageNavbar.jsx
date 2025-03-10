import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import "../../styles/fullpagenavbar.css";

const FullPageNavbar = ({ close }) => {
  const navigate = useNavigate();

  const route = (path) => {
    navigate(path);
    close();
  };

  useEffect(() => {
    // Set the body height and overflow when the component mounts
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";

    // Cleanup function to reset the body overflow when the component unmounts
    return () => {
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
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

  const menuItems = [
    { label: "home", path: "/" },
    { label: "about", path: "/about" },
    { label: "contact", path: "/contact" },
    { label: "blog", path: "/blog" },
    { label: "career", path: "/career" },
    { label: "projects", path: "/apps" }
  ];

  return (
    <motion.div
      className="fullpagenavbar"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="close-button" onClick={close}>
        <IoClose />
      </div>
      
      <motion.div className="navbar-items-container">
        {menuItems.map((item, index) => (
          <motion.div 
            key={item.path}
            className="navbar-item"
            variants={itemVariants}
            onClick={() => route(item.path)}
            whileHover={{ 
              x: 10,
              color: "#61DAFB",
              transition: { duration: 0.2 }
            }}
          >
            <div className="navbar-content">
              <span className="navbar-label">{item.label}</span>
            </div>
            <div className="navbar-number">{"0" + (index + 1)}</div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="navbar-footer">
        <div className="footer-line"></div>
        <p>© 2025 CodeByMarco</p>
      </div>
    </motion.div>
  );
};

export default FullPageNavbar;