import "../../styles/skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-top">
        <h1>SKILLS</h1>
        <p>what i am good at</p>
      </div>
      <div className="skillspage-container">
        <div className="box">html</div>
        <div className="box">css</div>
        <div className="box">typescript</div>
        <div className="box">react</div>

        <div className="box">node</div>
        <div className="box">golang</div>
        <div className="box">python</div>
        <div className="box">rabbitmq</div>

        <div className="box">jenkins</div>
        <div className="box">kubernetes</div>
        <div className="box">docker</div>
        <div className="box">sql</div>
        <div className="box">nosql</div>
        <div className="box">aws s3</div>
        <div className="box">aws cloudfront</div>
        <div className="box">google cloud platform</div>
      </div>
    </div>
  );
};

export default Skills;
