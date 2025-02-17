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
          <div>photo here</div>
        </div>
      </div>
      {/* looking for div */}
      <div className="about-about">
        <div>
          <span>sreach icon</span>
          <span>lokking for</span>
        </div>
        <span>
          I'm looking to work with people that will help me grow as a persona and
          a programmer, as well as learn stuff about new cultures.
        </span>
      </div>
      {/* about me div */}
      <div>
        <div>
          <span>about me</span>
        </div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
          recusandae quisquam voluptas iusto repellat accusamus iure vero odit
          eligendi nulla.
        </span>
      </div>
      {/* essentials div */}
      <div>
        <div>
          <span>essentials</span>
        </div>
        <span>all my stats here</span>
      </div>
    </div>
  );
};

export default About;
