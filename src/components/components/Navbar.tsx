import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import FullPageNavbar from "./FullPageNavbar";
import { CiMenuFries, CiMenuKebab } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(false);
  };

  const navigate = useNavigate();

  return (
    <nav>
      <AnimatePresence>
        {show && <FullPageNavbar key="full-page-navbar" close={close} />}
      </AnimatePresence>
      <h1 onClick={() => navigate("/")}>codebymarco</h1>
      <div>
        <div className="desktop-links" id="desktop-links">
          <Link to="/about">about</Link>
          <div className="line"></div>
          <Link to="/skills">skills</Link>
          <div className="line"></div>
          <Link to="/contact">contact</Link>
          <div className="line"></div>
          <Link to="/apps">apps</Link>
          <div className="line"></div>
          <Link to="/career">career</Link>
        </div>
        <CiMenuFries
          id="mobile-links"
          className="menu-icon"
          onClick={() => setShow(true)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
