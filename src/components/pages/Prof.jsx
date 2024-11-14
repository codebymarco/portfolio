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
import { Link } from "react-router-dom";

const Prof = () => {
  return (
    <div className="about">
      <div className="about-top">
        <h1>CAREER</h1>
      </div>
      <div className="about-container">
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
          <h2>skills</h2>
          <div className="cert-container">
            <div className="box">create and update apis</div>
            <div className="box">fullstack featrues</div>
            <div className="box">deploymet to cloud</div>
            <div className="box">bug fixing</div>
            <div className="box">code improvemnts</div>
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
                frontend of <a href="https://www.truendo.com">TRENDO</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="divider">
        </div>
        <div className="projects-container">
          <h1>my apps</h1>
        <Link to={`/apps/portfoliohub`} className="box">
          <h2>Portfoliohub</h2>
        </Link>
        <Link to={`/apps/linkbio`} className="box">
          <h2>Linkbio</h2>
        </Link>
        <Link to={`/apps/formio`} className="box">
          <h2>Formio</h2>
        </Link>
        <Link to={`/apps/indeed`} className="box">
          <h2>Indeed</h2>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Prof;
