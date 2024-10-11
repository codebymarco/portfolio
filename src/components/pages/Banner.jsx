import React from "react";
import { motion } from "framer-motion";
import "../../styles/banner.css";
import image from "../../assets/image5.jpg";
import { Link, useNavigate } from "react-router-dom";
import { SiOnlyfans } from "react-icons/si";
import { FaFilePdf, FaGithub } from "react-icons/fa";

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
      <div className="banner-links">
        <Link to="/about">
          <SiOnlyfans />
        </Link>
        <Link to="/apps">
          <FaGithub />
        </Link>
        <Link to="/contact">
          <FaFilePdf />
        </Link>
      </div>
      <p>
        Yeah, I’m shy. Hey, I’m Marco, a full-stack developer from and based in
        Durban, South Africa. I love creating full-stack web apps because I
        enjoy working on all aspects of a project. I do kind of get bored
        easily, so shifting focus to something new helps. I have 2 years of
        experience as a software developer. P.S. I used to be a carpenter, so if
        you’re looking for someone who can build both a secure website and a
        sturdy table, let’s have a chat!
      </p>
      <div className="banner-links">
        <Link to="/about">about</Link>
        <Link to="/apps">my work</Link>
        <Link to="/contact">contact</Link>
        <Link to="/contact">resume</Link>
        <Link to="/blog">blog</Link>
      </div>
    </div>
  );
};

export default Banner;
