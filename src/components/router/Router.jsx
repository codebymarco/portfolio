import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import App from "../pages/apps/App";
import PortfolioHub from "../pages/apps/PortfolioHub";
import Career from "../pages/Career";
import LinkBio from "../pages/apps/LinkBio";
import Formio from "../pages/apps/Formio";
import Indeed from "../pages/apps/Indeed";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Three from "../pages/blogs/Three";
import GamesPage from "../pages/Games";
import Fartup from "../pages/apps/Fartup";
import NftShop from "../pages/apps/NftShop";
import AiTranslator from "../pages/apps/AiTranslator";
import DeveloperToolsBlog from "../pages/blogs/DeveloperToolsBlog";
import PortfolioStructureBlog from "../pages/blogs/PortfolioStructureBlog";
import ScalableReactBlog from "../pages/blogs/ScalableReactBlog ";
import FutureWebDevBlog from "../pages/blogs/FutureWebDevBlog";
import GolangBlog from "../pages/blogs/GolangBlog";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>

          <Route path="about" element={<About />}></Route>
          <Route path="skills" element={<Skills />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="games" element={<GamesPage />}></Route>
          <Route path="apps" element={<Projects />}></Route>
          <Route path="career" element={<Career />}></Route>
          <Route path="blog" element={<Blogs />}></Route>
          <Route path="blog/1" element={<Blog />}></Route>
          <Route path="blog/2" element={<DeveloperToolsBlog />}></Route>
          <Route path="blog/3" element={<PortfolioStructureBlog />}></Route>
          <Route path="blog/4" element={<ScalableReactBlog />}></Route>
          <Route path="blog/5" element={<FutureWebDevBlog />}></Route>
          <Route path="blog/6" element={<GolangBlog />}></Route>
        </Route>

        <Route path="/apps/app" element={<App />}></Route>
        <Route path="/apps/portfoliobio" element={<PortfolioHub />}></Route>
        <Route path="/apps/linkbio" element={<LinkBio />}></Route>
        <Route path="/apps/formio" element={<Formio />}></Route>
        <Route path="/apps/indeed" element={<Indeed />}></Route>
        <Route path="/apps/fartup" element={<Fartup />}></Route>
        <Route path="/apps/nftshop" element={<NftShop />}></Route>
        <Route path="/apps/aitranslator" element={<AiTranslator />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
