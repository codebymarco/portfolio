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
import { SiGooglecloud, SiMicrosoftazure } from "react-icons/si";

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
              <div class="image-container"></div>A self-taught software
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
          <h2>skills</h2>
          <div className="hobbies-container">
            <div className="box">create and update apis</div>
            <div className="box">fullstack featrues</div>
            <div className="box">deploymet to cloud</div>
            <div className="box">bug fixing</div>
            <div className="box">code improvemnts</div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-hobbies">
          <h2>technologies and tools</h2>
          <div className="hobbies-container">
            <div className="box">
              <TbBrandNetflix color="red" /> html
            </div>
            <div className="box">
              <FaYoutube color="red" /> css
            </div>
            <div className="box">
              <GiSoccerKick color="yellow" />
              typescript
            </div>
            <div className="box">
              <FaLaptopCode color="white" />
              react
            </div>
            <div className="box">
              <MdOutlineWatchLater color="dodgerblue" />
              node
            </div>
            <div className="box">
              <MdOutlineWatchLater color="dodgerblue" />
              golang
            </div>
            <div className="box">
              <MdOutlineWatchLater color="dodgerblue" />
              python
            </div>
            <div className="box">
              <MdOutlineWatchLater color="dodgerblue" />
              rabbitmq
            </div>

            <div className="box">
              <MdOutlineWatchLater color="dodgerblue" />
              jenkins
            </div>
            <div className="box">
              <MdOutlineWatchLater color="dodgerblue" />
              kubernetes
            </div>

            <div className="box">
              <MdOutlineWatchLater color="dodgerblue" />
              docker
            </div>

            <div className="box">
              <MdOutlineWatchLater color="dodgerblue" />
              sql
            </div>

            <div className="box">
              <MdOutlineWatchLater color="dodgerblue" />
              nosql
            </div>

            <div className="box">
              <MdOutlineWatchLater color="dodgerblue" />
              aws
            </div>

            <div className="box">
              <MdOutlineWatchLater color="dodgerblue" />
              gcp
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-hobbies">
          <h2>CERTIFICATIONS</h2>
          <div className="cert-container">
            <div className="box">
              <FaAws />
              AWS Certified Cloud Practitioner
            </div>
            <div className="box">
              <FaAws />
              AWS Certified Solutions Architect – Associate
            </div>
            <div className="box">
              <FaAws />
              AWS Certified Developer – Associate
            </div>
            <div className="box">
              <SiMicrosoftazure />
              Microsoft Certified: Azure Fundamentals
            </div>
            <div className="box">
              <SiMicrosoftazure />
              Microsoft Certified: Azure Administrator Associate
            </div>
            <div className="box">
              <SiMicrosoftazure />
              Microsoft Certified: Azure Developer Associate
            </div>
            <div className="box">
              <SiGooglecloud /> Google Cloud Digital Leader
            </div>
            <div className="box">
              <SiGooglecloud /> Google Associate Cloud Engineer
            </div>
            <div className="box">
              <SiGooglecloud /> Google Professional Data Engineer
            </div>
          </div>
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
                  <a href="https://www.decidio.cc">Decidio GMBH</a>
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
              <GiSleepingBag color="grey" />
              Sleeping
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
      </div>
    </div>
  );
};

export default About;
