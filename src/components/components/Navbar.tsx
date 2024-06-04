import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import FullPageNavbar from "./FullPageNavbar";
import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(false);
  };

  return (
    <nav>
      {show ? <FullPageNavbar close={close} /> : null}
      <h1>codebymarco</h1>
      <CiMenuKebab className="menu-icon" onClick={() => setShow(true)} />
    </nav>
  );
};

export default Navbar;
