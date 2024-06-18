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
            <p style={{ color: "green" }}>
              A self-taught software developer with a unconventional journey.
              After finishing school, I was knee-deep in sawdust working with my
              dad in his carpentry company. While I mastered the art of
              hammering &#x1F528; nails &#x1F6E0; and screwing stuff, I realized
              that my true passion was creating digital masterpieces.
            </p>
            <p style={{ color: "dodgerblue" }}>
              Armed with nothing but curiosity and an internet connection, I was
              on a mission to teach myself coding. After countless late-night
              coding sessions I am now a full-fledged developer
            </p>
            <p style={{ color: "red" }}>
              I call the sunny shores of Durban my home, but I have a serious
              case of wanderlust. If a place catches my fancy, I'm more than
              willing to pack my bags and relocate anywhere in the world.
              Adventure is my middle name, and I'm always up for trying and
              learning new things.
            </p>
            <p style={{ color: "white" }}>
              From carpentry to coding &#x1F310;, my journey has been a blast.
              If you’re looking for someone who can build both a sturdy table
              and a secure web app, look no further. Hit your boy up
            </p>
          </div>
          <img src={img} alt="image" />
        </div>
        <div className="divider"></div>
        <div className="about-we">
          <h2>work experience</h2>
          <div className="we-container">
            <div className="box">
              <div className="box-top">
                <div>
                  <h1>Carpenter</h1>
                  <h2>El-Shaddai Interiors</h2>
                </div>
                <h3>2017 - 2023</h3>
              </div>
              <p>
                I started working for my dada straight after high school. My job
                was to learn everything my dad knew so I could lessen the burden
                on him. Left after I found a new career path, Just to put it out
                there, my brother took over from me.
              </p>
            </div>
            <div className="box">
              <div className="box-top">
                <div>
                  <h1>Fullstack Developer</h1>
                  <h2>Decidio GMBH</h2>
                </div>
                <h3>2023 - present</h3>
              </div>
              <p>
                I started off working on support for the TRENDO product, but
                then got promoted to developer, working on the backend and
                frontend of TRUENDO.
              </p>
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

        <div className="divider"></div>
        <div className="about-hobbies">
          <h2> &#128078; dislikes</h2>
          <div className="hobbies-container">
            <div className="box">veggies</div>
            <div className="box">manchester united</div>
            <div className="box">the red devils</div>
            <div className="box">old trafford</div>
            <div className="box">gary neville</div>
            <div className="box">class of 92</div>
            <div className="box">karens</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
4;
