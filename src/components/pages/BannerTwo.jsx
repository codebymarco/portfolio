import React from "react";
import { motion } from "framer-motion";
import "../../styles/banner.css";
import image from "../../assets/image.png";
import { useNavigate } from "react-router-dom";

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
      <p>hey im marco</p>
      <p>im a software developer based in durban south africa</p>
      <div>
        <button>contact me</button>
        <button>more about</button>
      </div>
    </div>
  );
};

export default BannerTwo;
