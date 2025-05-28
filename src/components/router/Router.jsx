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
import BunnyCDNBlog from "../pages/blogs/BunnyCDNBlog";
import KubernetesErrorsBlog from "../pages/blogs/KubernetesErrorsBlog";
import One from "../pages/blogs/One";
import Two from "../pages/blogs/Two";
import Three from "../pages/blogs/Three";
import Four from "../pages/blogs/Four";
import Five from "../pages/blogs/Five";
import Six from "../pages/blogs/Six";
import GamesPage from "../pages/Games";

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
          <Route path="blog/2" element={<BunnyCDNBlog />}></Route>
          <Route path="blog/3" element={<KubernetesErrorsBlog />}></Route>
          <Route path="blog/4" element={<One />}></Route>
          <Route path="blog/5" element={<Two />}></Route>
          <Route path="blog/6" element={<Three />}></Route>
          <Route path="blog/7" element={<Four />}></Route>
          <Route path="blog/8" element={<Five />}></Route>
          <Route path="blog/9" element={<Six />}></Route>
        </Route>

        <Route path="/apps/app" element={<App />}></Route>
        <Route path="/apps/portfoliobio" element={<PortfolioHub />}></Route>
        <Route path="/apps/linkbio" element={<LinkBio />}></Route>
        <Route path="/apps/formio" element={<Formio />}></Route>
        <Route path="/apps/indeed" element={<Indeed />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
