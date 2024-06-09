import "../../styles/about.css";
import img from "../../assets/image.png";
import { TbBrandNetflix } from "react-icons/tb";
import { FaHeart, FaLaptopCode, FaYoutube } from "react-icons/fa";
import { GiCharm, GiForkKnifeSpoon, GiSoccerKick } from "react-icons/gi";
import { MdCardTravel, MdOutlineWatchLater } from "react-icons/md";
import { BiCool } from "react-icons/bi";
import { LuEar } from "react-icons/lu";

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
              Hey there! I'm Marco, a self-taught software developer with a
              rather unconventional journey. After finishing school, I found
              myself knee-deep in sawdust and carpentry glue, working with my
              dad in his carpentry company. While I mastered the art of
              hammering nails and making fine wooden furniture, I realized that
              my true passion lay in creating digital masterpieces.
            </p>
            <p>
              Armed with nothing but curiosity and an internet connection, I
              embarked on a mission to teach myself software development.
              Countless late-night coding sessions later, I emerged as a
              full-fledged developer, ready to take on the world one line of
              code at a time.
            </p>
            <p>
              I call the sunny shores of Durban, South Africa, my home, but I
              have a serious case of wanderlust. If a place catches my fancy,
              I'm more than willing to pack my bags and relocate anywhere in the
              world. Adventure is my middle name (okay, not really, but you get
              the point), and I'm always up for trying and learning new things.
            </p>
            <p>
              From carpentry to coding, my journey has been anything but
              ordinary. If you’re looking for someone who can build both a
              sturdy table and a sleek website, look no further. Let's create
              something amazing together!
            </p>
          </div>
          <img src={img} alt="image" />
        </div>
        <div className="divider"></div>
        <div className="about-hobbies">
          <h2>hobbies</h2>
          <div className="hobbies-container">
            <div className="box">
              {" "}
              <TbBrandNetflix color="red" /> netflix
            </div>
            <div className="box">
              {" "}
              <FaYoutube color="red" /> youtube
            </div>
            <div className="box">
              <GiSoccerKick color="yellow" />
              football
            </div>
            <div className="box">
              <FaLaptopCode color="white" />
              coding
            </div>
            <div className="box">
              <MdOutlineWatchLater color="dodgerblue" />
              procastinating
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-skills">
          <h2>soft skills</h2>
          <div className="hobbies-container">
            <div className="box">
              <GiForkKnifeSpoon color="white" />
              soft eater
            </div>
            <div className="box">
              <BiCool color="yellow" />
              chill
            </div>
            <div className="box">
              <GiCharm color="pink" />
              charismatic
            </div>
            <div className="box">
              <LuEar color="brown" />
              good listener
            </div>
            <div className="box">
              <FaHeart color="red" />
              compasionate
            </div>
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
            <div className="box">
              <MdCardTravel color="purple"/>
              travelling</div>
            <div className="box">conspiracies</div>
            <div className="box">scrolling</div>
            <div className="box">watches</div>
            <div className="box">spicy food</div>
            <div className="box">liverpool</div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="about-hobbies">
          <h2> &#128078; dislikes</h2>
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
