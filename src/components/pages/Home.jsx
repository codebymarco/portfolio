import React from "react";
import Banner from "./Banner";
import AppsSection from "../components/AppsSection";
import SkillsSection from "../components/SkillsSection";
import CareerSection from "../components/CareerSection ";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <div>
      <Banner />

      <AboutSection />

      <SkillsSection />

      <AppsSection />

      <CareerSection />

      <ContactSection />
    </div>
  );
};

export default Home;
