import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../components/AboutSection";
import BannerTwo from "./BannerTwo";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import BlogsSection from "./BlogsSection";

const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
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
      <BannerTwo />
      <AboutSection />
      <div className="skills-wrapper">
        <Skills />
      </div>
      {/*       <Certs />
       */}{" "}
      <Projects />
      <BlogsSection />
      <Contact />
      <style>
        {`      .skills-wrapper {
        }


        }`}
      </style>
    </div>
  );
};

export default Home;
