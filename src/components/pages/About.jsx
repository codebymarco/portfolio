import "../../styles/about.css";
import img from "../../assets/image.png";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpeg";
import img4 from "../../assets/image4.jpg";
import img5 from "../../assets/image5.jpg";
import img6 from "../../assets/image6.jpg";
import { TbBrandNetflix, TbMoodLookRight } from "react-icons/tb";
import {
  FaAws,
  FaFilePdf,
  FaHeart,
  FaLaptopCode,
  FaPepperHot,
  FaRegLaughBeam,
  FaYoutube,
} from "react-icons/fa";
import { GiCharm, GiForkKnifeSpoon, GiSoccerKick } from "react-icons/gi";
import { MdCardTravel, MdOutlineWatchLater } from "react-icons/md";
import { BiCool } from "react-icons/bi";
import { LuEar } from "react-icons/lu";
import { FcGlobe } from "react-icons/fc";
import { IoFootballOutline } from "react-icons/io5";
import { SiGooglecloud, SiMicrosoftazure } from "react-icons/si";
import resumePDF from "../../../public/resume.pdf";

const About = () => {
  const handleDownloadResume = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = resumePDF;
    downloadLink.download = "resume.pdf";
    downloadLink.click();
  };

  return (
    <div className="about">
      <div className="about-top">
        <h1>ABOUT</h1>
      </div>
      <div className="about-container">
        <div className="about-container-2">
          <div className="about-left">
            <p style={{ color: "gray" }}>
              <div class="image-container"></div>Hey Im MARCO and im a software
              developer with a unconventional journey. After finishing school I
              found myself working in my dads carpentry company. While I
              mastered the art of woodwork, I realized that my true passion was
              on the web.
            </p>
            <p style={{ color: "gray" }}>
              Armed with nothing but curiosity and an internet connection, I was
              on a mission to teach myself coding. After countless late-night
              coding sessions I am now a full-fledged developer
            </p>
            {/*             <p style={{ color: "red" }}>
              , but I have a serious
              case of wanderlust. If a place catches my fancy, I'm more than
              willing to pack my bags and relocate anywhere in the world.
              Adventure is my middle name, and I'm always up for trying and
              learning new things.
            </p> */}
            <p style={{ color: "gray" }}>
              I call the sunny shores of Durban my home. From carpentry to
              coding &#x1F310;, my journey has been a blast. If you’re looking
              for someone who can build both a sturdy table and a secure web
              app, look no further. Hit your boy up
            </p>
          </div>
        </div>
        <div className="about-images">
          <div class="image-container">
            <img src={img} alt="image" />
          </div>
          <div class="image-container">
            <img src={img2} alt="image2" />
          </div>
          <div class="image-container">
            <img src={img3} alt="image3" />
          </div>
          <div class="image-container">
            <img src={img4} alt="image4" />
          </div>
          <div class="image-container">
            <img src={img5} alt="image5" />
          </div>
          <div class="image-container">
            <img src={img6} alt="image6" />
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
              <FaLaptopCode color="white" />
              learning new things
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-hobbies">
          <h2>&#x1F44D; likes</h2>
          <div className="hobbies-container">
            <div className="box">
              <IoFootballOutline color="yellow" />
              Football
            </div>
            <div className="box">
              <FaLaptopCode color="white" />
              Coding
            </div>
            <div className="box">
              <FcGlobe />
              Travelling
            </div>
            <div className="box">
              <FaPepperHot color="red" />
              Spicy Food
            </div>
            <div className="box">liverpool</div>
          </div>
        </div>
        <div className="divider"></div>
        <div onClick={handleDownloadResume} className="box">
          <div>
            <FaFilePdf color="gray" />
            <p>check out my resume</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-hobbies">
          <h2>timeline</h2>
          <div className="cert-container">
            <div className="box">big bang 1998</div>
            <div className="box">a start was born 1999</div>
            <div className="box">started school</div>
            <div className="box">taught my teacher some stuff</div>
            <div className="box">useless matricultion</div>
            <div className="box">started college</div>
            <div className="box">dropout college</div>
            <div className="box">join dad carpenter</div>
            <div className="box">learnt coding</div>
            <div className="box">looting in south africa</div>
            <div className="box">started work at decidio</div>
            <div className="box">rest is history</div>
            <div className="box">
              tomorrow is a mystery but when tomorrow passes it will be history
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
