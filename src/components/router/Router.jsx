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
import Blogs from "../pages/Blogs";
import One from "../pages/blogs/one";
import Two from "../pages/blogs/two";
import Three from "../pages/blogs/three";
import Four from "../pages/blogs/four";
import Five from "../pages/blogs/five";
import { DiExtjs } from "react-icons/di";
import Six from "../pages/blogs/six";
import Seven from "../pages/blogs/seven";
import Eight from "../pages/blogs/eight";
import Nine from "../pages/blogs/nine";

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
        <Route path="/apps/formio" element={<Formio />}></Route>
        <Route path="/apps/indeed" element={<Indeed />}></Route>

        <Route path="/blog" element={<Blogs />}></Route>

        <Route path="/blog/one" element={<One />}></Route>
        <Route path="/blog/two" element={<Two />}></Route>
        <Route path="/blog/three" element={<Three />}></Route>
        <Route path="/blog/four" element={<Four />}></Route>
        <Route path="/blog/five" element={<Five />}></Route>
        <Route path="/blog/six" element={<Six />}></Route>
        <Route path="/blog/seven" element={<Seven />}></Route>
        <Route path="/blog/eight" element={<Eight />}></Route>
        <Route path="/blog/nine" element={<Nine />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
