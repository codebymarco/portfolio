import "../../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="fixed-menu">bottom menu</div>
      {/* top */}
      <div className="top">
        <span>tinder logo</span>
        <div>
          <span>notifications</span>
          <span>filter</span>
          <span>super like</span>
        </div>
      </div>
      {/* photo div */}
      <div className="about-photo">
        <div className="tab-buttons">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="photo-section">
          <img
            src="https://th.bing.com/th/id/R.6e5c581e51eb9ee2d5b4f079066ba884?rik=bdcSOJNU1VnqfA&riu=http%3a%2f%2fcdn.designbump.com%2fwp-content%2fuploads%2f2015%2f05%2fenhanced-buzz-wide-29647-1394478394-12.jpg&ehk=JPk1fLlgcqoRCZJeVV9N46o5que23SXtaTB3BIzCQWM%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
      </div>
      {/* looking for div */}
      <div className="about-about">
        <div>
          <span>sreach icon</span>
          <span>lokking for</span>
        </div>
        <span>
          I'm looking to work with people that will help me grow as a persona
          and a programmer, as well as learn stuff about new cultures.
        </span>
      </div>
      {/* about me div */}
      <div className="about-main">
        <div>
          <span>about me</span>
        </div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
          recusandae quisquam voluptas iusto repellat accusamus iure vero odit
          eligendi nulla.
        </span>
      </div>
      <div className="about-stats">
        <div>
          <span>statistics</span>
        </div>
        <span>all my stats here</span>
      </div>
      <div className="about-stats">
        <div>
          <span>hobbies</span>
        </div>
        <span>all my stats here</span>
      </div>
      <div className="about-stats">
        <div>
          <span>likes</span>
        </div>
        <span>all my stats here</span>
      </div>
      <div className="about-stats">
        <div>
          <span>favorite music</span>
        </div>
        <span>all my stats here</span>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default About;
