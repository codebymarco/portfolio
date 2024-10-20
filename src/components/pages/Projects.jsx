import { Link } from "react-router-dom";
import "../../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-top">
        <h1>APPS</h1>
      </div>
      <div className="projects-container">
        <Link to={`/apps/linkbio`} className="box">
          <h2>Linkbio</h2>
          <span>01</span>
        </Link>
        <Link to={`/apps/formio`} className="box">
          <h2>Formio</h2>
          <span>02</span>
        </Link>
        <Link to={`/apps/indeed`} className="box">
          <h2>Indeed</h2>
          <span>03</span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
