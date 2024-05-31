import { Link } from "react-router-dom";
import "../../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-top">
        <h1>APPS</h1>
      </div>
      <div className="projects-container">
        <Link to={`/apps/app`} className="box">
          <h2>portfoliohub</h2>
          <span>01</span>
        </Link>
        <Link to={`/apps/app`} className="box">
          {" "}
          <h2>contact me</h2>
          <span>02</span>
        </Link>
        <Link to={`/apps/app`} className="box">
          <h2>linkbio</h2>
          <span>03</span>
        </Link>
        <Link to={`/apps/app`} className="box">
          <h2>indeed</h2>
          <span>04</span>
        </Link>{" "}
        <Link to={`/apps/app`} className="box">
          <h2>notes</h2>
          <span>05</span>
        </Link>{" "}
        <Link to={`/apps/app`} className="box">
          <h2>todo</h2>
          <span>06</span>
        </Link>{" "}
        <Link to={`/apps/app`} className="box">
          <h2>webbly</h2>
          <span>07</span>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Projects;
