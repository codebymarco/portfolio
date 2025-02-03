import React from "react";
import { motion } from "framer-motion";
import "../../styles/banner.css";
import image from "../../assets/image.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {

  const navigate = useNavigate()

  const showAbout = () =>{
    navigate('/about')
  }

  return (
    <div className="banner">
      <motion.img
        src={image}
        alt=""
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5 }}
      />
      <button className="blink" onClick={() => showAbout()} id="banner-about">about</button>
    </div>
  );
};

export default Banner;
