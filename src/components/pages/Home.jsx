import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../components/AboutSection";
import BannerTwo from "./BannerTwo";
import Skills from "./Skills";
import BlogsSection from "./BlogsSection";
import ProjectsSection from "./ProjectsSection";
import ScrollToTop from "../components/ScrollToTop";
import Showcase from "./Showcase";

const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="home">
      <Helmet>
        <title>Marco Ramcharan | Fullstack Software Developer - Durban, KZN</title>
        <meta
          name="description"
          content="Miguelmarco Ramcharan of CodeByMarco: Expert Fullstack Software Developer in Durban, KZN. Building robust web & mobile apps with React, Node.js & more."
        />
        <link rel="canonical" href="https://www.marcoramcharan.com/" />

        <meta
          property="og:title"
          content="Marco Ramcharan | Fullstack Software Developer - Durban, KZN"
        />
        <meta
          property="og:description"
          content="Miguelmarco Ramcharan of CodeByMarco: Expert Fullstack Software Developer in Durban, KZN. Building robust web & mobile apps with React, Node.js & more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codebymarco.com/" />
        <meta
          property="og:image"
          content="https://www.marcoramcharan.com/images/codebymarco-og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Marco Ramcharan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <meta name="twitter:creator" content="@your_twitter_handle" />
        <meta
          name="twitter:title"
          content="Marco Ramcharan | Fullstack Software Developer - Durban, KZN"
        />
        <meta
          name="twitter:description"
          content="Miguelmarco Ramcharan: Expert Fullstack Software Developer in Durban, KZN. Building robust web & mobile apps with React, Node.js & more."
        />
        <meta
          name="twitter:image"
          content="https://www.codebymarco.com/images/codebymarco-og-image.jpg"
        />
      </Helmet>
      <ScrollToTop />
      <BannerTwo />
      <AboutSection />
      <Skills />
      <Showcase />
      {/*       <Certs />
       */}
{/*       <BlogsSection />
 */}    </div>
  );
};

export default Home;
