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
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Software Developer Portfolio | Miguelmarco Ramcharan</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Miguelmarco Ramcharan. Explore projects, skills, and more by CodeByMarco."
        />
        <meta name="author" content="Miguelmarco Ramcharan" />
        <meta
          name="keywords"
          content="marco ramcharan, codebymarco, software developer portfolio about"
        />
      </Helmet>
      <div className="about">
        <div className="about-top">
          <h1>ABOUT</h1>
          <p>this also serves as my dating profile</p>
          <span>please share with any single relatives</span>
        </div>
        <div className="about-container">
          <div className="about-container-2">
            <div className="about-left">
              <h1>HI I'M MARCO &#128075;</h1>
              <p style={{ color: "gray" }}>
                A self-taught software developer with a unconventional journey.
                After finishing school I found myself working in my dads
                carpentry company. While I mastered the art of woodwork, I
                realized that my true passion was on the web. Armed with nothing
                but curiosity and an internet connection, I was on a mission to
                teach myself coding. After countless late-night coding sessions
                I am now a full-fledged developer
                {/*             <p style={{ color: "red" }}>
              , but I have a serious
              case of wanderlust. If a place catches my fancy, I'm more than
              willing to pack my bags and relocate anywhere in the world.
              Adventure is my middle name, and I'm always up for trying and
              learning new things.
            </p> */}
                I call the sunny shores of Durban my home. From carpentry to
                coding &#x1F310;, my journey has been a blast. If you’re looking
                for someone who can build both a sturdy table and a secure web
                app, look no further. Hit your boy up
              </p>
            </div>
            <img src={img} alt="image" />
          </div>
          <div className="divider"></div>
          <div className="about-hobbies">
            <h2>stats</h2>
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
                <MdOutlineWatchLater color="dodgerblue" />
                procastinating
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="about-hobbies">
            <h2>hobbies</h2>
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
                <MdOutlineWatchLater color="dodgerblue" />
                procastinating
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="about-hobbies">
            <h2>&#x1F44D; likes</h2>
            <div className="hobbies-container">
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
                <FaRegLaughBeam color="orange" />
                memes
              </div>
              <div className="box">
                <FaPepperHot color="red" />
                spicy food
              </div>
              <div className="box">liverpool</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
4;
