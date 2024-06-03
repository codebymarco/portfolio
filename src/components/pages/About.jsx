import "../../styles/about.css";
import img from "../../assets/image.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <h1>ABOUT</h1>
      </div>
      <div className="about-container">
        <div className="about-container-2">
          <div className="about-left">
            <h1>HI I'M MARCO &#128075;</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              &#127758; veniam, enim sed optio aliquid soluta molestiae
              blanditiis itaque &#127891; voluptatum dicta fuga, eum eos magni
              distinctio aperiam. Iusto, placeat. Exercitationem, ipsam
              consectetur. Fuga corrupti &#128296; temporibus optio numquam modi
              natus excepturi inventore!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              fugit amet numquam id, explicabo quod exercitationem eos impedit
              &#128187;
            </p>
          </div>
          <img src={img} alt="image" />
        </div>

        <div className="divider"></div>

        <div className="about-details">
          <h2>details</h2>
          <div className="details-container">
            <div className="box">height: 1.82</div>
            <div className="box">weight: 65kg</div>
            <div className="box">eye: brown</div>
            <div className="box">nationlaity: south african</div>
            <div className="box">race: indian</div>
            <div className="box">left-hand: 5star</div>
            <div className="box">right-hand: 5star</div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="about-details">
          <h2>facts about me</h2>
          <div className="details-container">
            <div className="box">had yellow jourdas, isloated before covid</div>
            <div className="box">tried to learn spanish but blow it</div>
            <div className="box">i can code with both hands</div>
            <div className="box">i use chatgpt to write for loops</div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="about-hobbies">
          <h2>hobbies</h2>
          <div className="hobbies-container">
            <div className="box">netflix</div>
            <div className="box">youtube</div>
            <div className="box">football</div>
            <div className="box">coding</div>
            <div className="box">procastinating</div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-skills">
          <h2>soft skills</h2>
          <div className="hobbies-container">
            <div className="box">soft eater</div>
            <div className="box">chill</div>
            <div className="box">charismatic</div>
            <div className="box">good listener</div>
            <div className="box">compasionate</div>
            <div className="box">gangsta</div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-hobbies">
          <h2>&#x1F44D; likes</h2>
          <div className="hobbies-container">
            <div className="box">watching football</div>
            <div className="box">coding</div>
            <div className="box">sleeping</div>
            <div className="box">relaxing</div>
            <div className="box">travelling</div>
            <div className="box">conspiracies</div>
            <div className="box">scrolling</div>
            <div className="box">watches</div>
            <div className="box">spicy food</div>
            <div className="box">liverpool</div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="about-hobbies">
          <h2>dislikes</h2>
          <div className="hobbies-container">
            <div className="box">manchester united</div>
            <div className="box">the red devils</div>
            <div className="box">old trafford</div>
            <div className="box">gary neville</div>
            <div className="box">class of 92</div>
            <div className="box">karens</div>
            <div className="box">the ocean</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
4;
