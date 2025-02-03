import React from "react";
import AppsSection from "../components/AppsSection";
import SkillsSection from "../components/SkillsSection";
import CareerSection from "../components/CareerSection ";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";
import BannerTwo from "./BannerTwo";

const Home = () => {
  return (
    <div>
      <BannerTwo />

      <AboutSection />

      <SkillsSection />

      <AppsSection />

      <CareerSection />

      <ContactSection />
    </div>
  );
};

export default Home;
