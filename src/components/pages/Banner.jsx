import React from "react";
import { motion } from "framer-motion";
import "../../styles/banner.css";
import image from "../../assets/image.png";

const Banner = () => {
  return (
    <div className="banner">
      <motion.img
        src={image}
        alt=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Banner;
