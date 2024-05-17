import "../../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-top">
        <h1>APPS</h1>
      </div>
      <div className="projects-container">
        <div className="box">
          <h2>iportfolio</h2>
          <span>1</span>
        </div>
        <div className="box">
          <h2>contact me</h2>
          <span>2</span>
        </div>
        <div className="box">
          <h2>linkbio</h2>
          <span>3</span>
        </div>
        <div className="box">
          <h2>indeed</h2>
          <span>4</span>
        </div>{" "}
        <div className="box">
          <h2>notes</h2>
          <span>4</span>
        </div>
        <div className="box">
          <h2>todo</h2>
          <span>5</span>
        </div>
        <div className="box">
          <h2>webbly</h2>
          <span>6</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
