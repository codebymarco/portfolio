import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import FullPageNavbar from "./FullPageNavbar";
import { CiMenuFries } from "react-icons/ci";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(false);
  };

  return (
    <nav>
      <AnimatePresence>
        {show && <FullPageNavbar key="full-page-navbar" close={close} />}
      </AnimatePresence>
      <div></div>
      <div>
        <div className="desktop-links" id="desktop-links">
          <Link className="desktop-links-link" to="/">
            home
          </Link>
          <div className="line"></div>
          <Link className="desktop-links-link" to="/about">
            about
          </Link>
          <div className="line"></div>
          <Link className="desktop-links-link" to="/contact">
            contact
          </Link>
          <div className="line"></div>
          <Link className="desktop-links-link" to="/career">
            career
          </Link>
          <div className="line"></div>
          <Link className="desktop-links-link" to="/blog">
            blog
          </Link>
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
