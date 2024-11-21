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
  const navigate = useNavigate();

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
              My professiobal career started after droping out of college. I
              found myself working in my dads carpentry company. While I
              mastered the art of woodwork, I realized that my true passion was
              on the web. Armed with nothing but curiosity and an internet
              connection, I was on a mission to teach myself coding. After
              countless late-night coding sessions I joined a company called
              decidio and started work on the truendo product i went from being
              a support agent to a fullstack devloper in no time. i am currently
              still working for decidio where i work on fullstacj developer abd
              devops engineer. i am currently wokign on my cloud cerfitictaiosn,
              i have a few but i want mroe to make up for my lak of a degree,
              cliu certs will make cv look alot better
            </p>
          </div>
          {/* add in a picture of me with a laptop working */}
          <img src={img} alt="image" />
        </div>
        {/*         <Timeline />
         */}
        <div className="about-hobbies">
          <h2>what I can do</h2>
          <div className="hobbies-container2">
            <div className="box">create and manage apis</div>
            <div className="box">deploy applications on the cloud</div>
            <div className="box">dev operations</div>
            <div className="box">
              create web app frontends not my speciality
            </div>
          </div>
        </div>
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
        <div className="about-hobbies">
          <h2>certifications</h2>
          <div className="hobbies-container2">
            <div className="box">aws cloud practioner</div>
            <div className="box">gcp didgital leader</div>
            <div className="box">azure fundementals</div>
          </div>
        </div>
        <div className="about-hobbies">
          <h2>my work</h2>
          <div className="hobbies-container2">
            <div className="box">portfoliohub</div>
            <div className="box">linkbio</div>
            <div onClick={() => navigate("/apps")} className="box">
              more
            </div>
          </div>
        </div>
        <div className="about-hobbies">
          <h2>my documents</h2>
          <div className="hobbies-container2">
            <div className="box">resume</div>
            <div className="box">my certifications</div>
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
