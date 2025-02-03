import React from "react";
import AboutSection from "../components/AboutSection";
import BannerTwo from "./BannerTwo";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <BannerTwo />
      <AboutSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
