import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../components/AboutSection";
import BannerTwo from "./BannerTwo";
import Skills from "./Skills";
import BlogsSection from "./BlogsSection";
import ProjectsSection from "./ProjectsSection";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="home">
      <Helmet>
        <title>
          Home | Software Developer Portfolio | Miguelmarco Ramcharan
        </title>
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
      <ScrollToTop />
      <BannerTwo />
      <AboutSection />
      <div className="skills-wrapper">
        <Skills />
      </div>
      {/*       <Certs />
       */}{" "}
      <ProjectsSection />
      <BlogsSection />
      <style>
        {`      .skills-wrapper {
        }


        }`}
      </style>
    </div>
  );
};

export default Home;
