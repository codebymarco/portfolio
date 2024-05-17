import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Banner from "../pages/Banner";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
