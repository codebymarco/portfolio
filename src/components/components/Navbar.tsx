import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import FullPageNavbar from "./FullPageNavbar";
import { CiMenuFries, CiMenuKebab } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
import { LiaArrowAltCircleRightSolid } from "react-icons/lia";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const location = useLocation();

  // Example condition: return true if the current path is '/home'
  const isHomePage = location.pathname === "/";

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
          {isHomePage ? (
            <>
              <Link
                to="/about"
                className="desktop-links-link"
                style={{ gap: "5px" }}
                id="clickme"
              >
                about
                <LiaArrowAltCircleRightSolid />
              </Link>
            </>
          ) : (
            <>
              <Link className="desktop-links-link" to="/about">
                about
              </Link>
              <div className="line"></div>
              <Link className="desktop-links-link" to="/skills">
                skills
              </Link>
              <div className="line"></div>
              <Link className="desktop-links-link" to="/contact">
                contact
              </Link>
              <div className="line"></div>
              <Link className="desktop-links-link" to="/apps">
                apps
              </Link>
              <div className="line"></div>
              <Link className="desktop-links-link" to="/career">
                career
              </Link>
            </>
          )}
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
