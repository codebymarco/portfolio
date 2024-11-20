import "../../styles/about.css";
import img from "../../assets/image.png";
import { TbBrandNetflix, TbMoodLookRight } from "react-icons/tb";
import {
  FaHeart,
  FaLaptopCode,
  FaPepperHot,
  FaRegLaughBeam,
  FaYoutube,
} from "react-icons/fa";
import {
  GiCharm,
  GiForkKnifeSpoon,
  GiSleepingBag,
  GiSoccerKick,
} from "react-icons/gi";
import { MdCardTravel, MdOutlineWatchLater } from "react-icons/md";
import { BiCool } from "react-icons/bi";
import { LuEar } from "react-icons/lu";
import { FcGlobe } from "react-icons/fc";
import { IoFootballOutline } from "react-icons/io5";

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
            <p style={{ color: "gray" }}>
              A self-taught software developer with a unconventional journey.
              After finishing school I found myself working in my dads carpentry
              company. While I mastered the art of woodwork, I realized that my
              true passion was on the web.
            </p>
            <p style={{ color: "gray" }}>
              Armed with nothing but curiosity and an internet connection, I was
              on a mission to teach myself coding. After countless late-night
              coding sessions I am now a full-fledged developer
            </p>
            <p style={{ color: "gray" }}>
              I call the sunny shores of Durban my home. From carpentry to
              coding &#x1F310;, my journey has been a blast. If you’re looking
              for someone who can build both a sturdy table and a secure web
              app, look no further. Hit your boy up
            </p>
          </div>
          <img src={img} alt="image" />
        </div>
        {/*         <Timeline />
         */}{" "}
        <div className="divider"></div>
        <div className="about-hobbies">
          <h2>hobbies and likes</h2>
          <div className="hobbies-container">
            <div className="box">
              <TbBrandNetflix color="red" /> netflix
            </div>
            <div className="box">
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
              <IoFootballOutline color="yellow" />
              watching football
            </div>
            <div className="box">
              <FaLaptopCode color="white" />
              coding
            </div>
            <div className="box">
              <GiSleepingBag color="grey" />
              sleeping
            </div>
            <div className="box">
              <FcGlobe />
              travelling
            </div>
            <div className="box">
              <TbMoodLookRight />
              conspiracies
            </div>
            <div className="box">
              <FaPepperHot color="red" />
              spicy food
            </div>
            <div className="box">liverpool</div>
            <div className="box">history</div>
            <div className="box">to learn a new language</div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-hobbies">
          <h2> &#128078; dislikes</h2>
          <div className="hobbies-container">
            <div className="box">veggies</div>
            <div className="box">manchester united</div>
            <div className="box">karens</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* 
  
  doont forget to add a timeline of my about
  liek the big bang
  i was born
  
  */
}
