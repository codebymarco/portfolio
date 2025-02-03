import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Banner from "../pages/Banner";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import App from "../pages/apps/App";
import PortfolioHub from "../pages/apps/PortfolioHub";
import Career from "../pages/Career";
import LinkBio from "../pages/apps/LinkBio";
import Formio from "../pages/apps/Formio";
import Indeed from "../pages/apps/Indeed";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Banner />}></Route>

          <Route path="about" element={<About />}></Route>
          <Route path="skills" element={<Skills />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="apps" element={<Projects />}></Route>
          <Route path="career" element={<Career />}></Route>
        </Route>

        <Route path="/apps/app" element={<App />}></Route>
        <Route path="/apps/portfoliohub" element={<PortfolioHub />}></Route>
        <Route path="/apps/linkbio" element={<LinkBio />}></Route>
        <Route path="/apps/formio" element={< Formio/>}></Route>
        <Route path="/apps/indeed" element={< Indeed/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
