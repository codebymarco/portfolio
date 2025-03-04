import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
  
  // Check if the current pathname is "/about"
  const showFooter = location.pathname !== "/about";

  return (
    <div>
      <Navbar />
      <Outlet />
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
