import React from "react";
import { motion } from "framer-motion";
import "../../styles/banner.css";
import image from "../../assets/image.png";
import { Link, useNavigate } from "react-router-dom";

const BannerTwo = () => {
  const navigate = useNavigate();

  const showAbout = () => {
    navigate("/about");
  };

  return (
    <div className="banner">
      <motion.img
        src={image}
        alt=""
        initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5 }}
      />
      <div className="banner-right">
        <h3>
          MARCO<br></br>RAMCHARAN
        </h3>
        <p style={{color:"grey"}}>SOFTWARE DEVELOPER</p>
        <div>
          <Link to="/contact">contact me</Link>
          <Link to="/about">about</Link>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
