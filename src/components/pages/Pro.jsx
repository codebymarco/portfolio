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
import { useNavigate } from "react-router-dom";

const Pro = () => {

  const navigate = useNavigate()

  return (
    <div className="about">
      <div className="about-top">
        <h1>CAREER</h1>
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
          {/* add in a picture of me with a laptop working */}
          <img src={img} alt="image" />
        </div>
        {/*         <Timeline />
         */}{" "}
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
                I started working for my dad straight after high school. My job
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
          <h2>what I can do</h2>
          <div className="hobbies-container">
            <div className="box">create and manage apis</div>
            <div className="box">deploy applications on the cloud</div>
            <div className="box">dev operations</div>
            <div className="box">
              create web app frontends not my speciality
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-hobbies">
          <h2>what I use to get work done</h2>
          <div className="hobbies-container">
            <div className="box">html</div>
            <div className="box">css</div>
            <div className="box">javascript</div>
            <div className="box">typescript</div>
            <div className="box">node</div>
            <div className="box">react</div>
            <div className="box">golang</div>
            <div className="box">rabbitMQ</div>
            <div className="box">jenkins</div>
            <div className="box">kubernetes</div>
            <div className="box">docker</div>
            <div className="box">sql</div>
            <div className="box">nosql</div>
            <div className="box">aws</div>
            <div className="box">gcp</div>
            <div className="box">azure</div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-hobbies">
          <h2>certifications</h2>
          <div className="hobbies-container">
            <div className="box">aws cloud practioner</div>
            <div className="box">gcp didgital leader</div>
            <div className="box">azure fundementals</div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-hobbies">
          <h2>my work</h2>
          <div className="hobbies-container">
            <div className="box">portfoliohub</div>
            <div className="box">linkbio</div>
            <div onClick={() => navigate("/apps")} className="box">more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro;

{
  /* 
  
  doont forget to add a timeline of my about
  liek the big bang
  i was born
  
  */
}
