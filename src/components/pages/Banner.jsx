import React from "react";
import { motion } from "framer-motion";
import "../../styles/banner.css";
import image from "../../assets/image.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
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
      <button className="blink" onClick={() => showAbout()} id="banner-about">
        about
      </button>
      <p>
        Hey im marco i am a fullstack developer from and based in durban south
        africa.i love createing fullstack web apps because i love touching all, aspects of a project.
        i do kinda get bored eacsily so hoftig fcus to soething new helps.
        i have 2 years experience as a software devloper.
        ps, i used to be a carpneter 
        if u lookign for someone who can uild a secire table and website, ets have a chat
      </p>
    </div>
  );
};

export default Banner;
