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
          <h2>iportfolio</h2>
          <span>1</span>
        </Link>
        <Link to={`/apps/app`} className="box">
          {" "}
          <h2>contact me</h2>
          <span>2</span>
        </Link>
        <Link to={`/apps/app`} className="box">
          <h2>linkbio</h2>
          <span>3</span>
        </Link>
        <Link to={`/apps/app`} className="box">
          <h2>indeed</h2>
          <span>4</span>
        </Link>{" "}
        <Link to={`/apps/app`} className="box">
          <h2>notes</h2>
          <span>4</span>
        </Link>{" "}
        <Link to={`/apps/app`} className="box">
          <h2>todo</h2>
          <span>5</span>
        </Link>{" "}
        <Link to={`/apps/app`} className="box">
          <h2>webbly</h2>
          <span>6</span>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Projects;
