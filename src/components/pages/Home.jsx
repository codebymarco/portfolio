import React from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../components/AboutSection";
import BannerTwo from "./BannerTwo";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Software Developer Portfolio | Miguelmarco Ramcharan</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Miguelmarco Ramcharan. Explore projects, skills, and more by CodeByMarco."
        />
        <meta name="author" content="Miguelmarco Ramcharan" />
        <meta
          name="keywords"
          content="marco ramcharan, codebymarco, software developer portfolio"
        />
      </Helmet>
      <BannerTwo />
      <AboutSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
