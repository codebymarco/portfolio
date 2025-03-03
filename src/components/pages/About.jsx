import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../../styles/about.css";
import { IoIosNotifications, IoIosSend } from "react-icons/io";
import {
  FaArrowAltCircleUp,
  FaFilter,
  FaHeart,
  FaLanguage,
} from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { MdCancel, MdVerified } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FaLocationPin } from "react-icons/fa6";
import { CiRuler, CiSearch } from "react-icons/ci";
import { PiEyesBold, PiFireSimpleFill, PiHouseLineBold } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";
import Anthems from "../components/Anthems";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import pic from "../../assets/upgrade.svg";
import img from "../../assets/image.png";

const About = () => {
  // Array of images (using the same image URL for demonstration)
  const images = [img, img, img, img, pic];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <Helmet>
        <title>
          {" "}
          About | Software Developer Portfolio | Miguelmarco Ramcharan
        </title>
        <meta
          name="description"
          content="Welcome to the portfolio of Miguelmarco Ramcharan. Explore projects, skills, and more by CodeByMarco."
        />
        <meta name="author" content="Miguelmarco Ramcharan" />
        <meta
          name="keywords"
          content="marco ramcharan, codebymarco, software developer portfolio"
        />
      </Helmet>
      <div className="about">
        <div className="fixed-menu">
          <GrPowerReset style={{ color: "gray" }} />
          <RxCross2 style={{ color: "red" }} />
          <ImStarFull style={{ color: "dodgerblue" }} />
          <FaHeart style={{ color: "orange" }} />
          <IoIosSend style={{ color: "dodgerblue" }} />
        </div>
        {/* Top */}
        <div className="top">
          <div className="top-logo">
            <PiFireSimpleFill style={{ color: "red" }} />
            <span>Tinder</span>
          </div>
          <div className="top-icons">
            <IoIosNotifications style={{ color: "gray" }} />
            <HiAdjustmentsHorizontal style={{ color: "gray" }} />

            <AiFillThunderbolt style={{ color: "dodgerblue" }} />
          </div>
        </div>
        {/* Photo section with carousel */}
        <div className="about-photo">
          <div className="about-photo-absolute">
            <div className="left-div">
              <div>
                <FaLocationPin />
                <span>Nearby</span>
              </div>
              <div>
                <h4>Marco 22</h4>
                <MdVerified style={{ color: "dodgerblue" }} />
              </div>
              <div>
                <PiHouseLineBold />
                <span>Lives in Durban</span>
              </div>
              <div>
                <FaLocationPin />
                <span>20 light years away</span>
              </div>
            </div>
            <FaArrowAltCircleUp style={{ color: "white" }} />
          </div>
          <div
            className="tab-buttons"
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  height: "10px",
                  width: "10px",
                  backgroundColor:
                    currentIndex === index ? "black" : "dodgerblue",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              ></div>
            ))}
          </div>
          <div className="photo-section" style={{ position: "relative" }}>
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              style={{ width: "100%", height: "70vh", objectFit: "cover" }}
            />
            <button
              className="prev-arrow"
              onClick={handlePrev}
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                border: "none",
                color: "white",
                fontSize: "1.5rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
              }}
            >
              ←
            </button>
            <button
              className="next-arrow"
              onClick={handleNext}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                border: "none",
                color: "white",
                fontSize: "1.5rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
              }}
            >
              →
            </button>
          </div>
        </div>
        {/* Looking for section */}
        <div className="about-about">
          <div className="about-section-top">
            <CiSearch />
            <span>Searching for :</span>
          </div>
          <div>
            <div>Meaning of life.</div>
            <div>The perfect lady.</div>
            <div>More mula.</div>
            <div></div>
          </div>
        </div>
        {/* About me section */}
        <div className="about-main">
          <div className="about-section-top">
            <span>About me :</span>
          </div>
          <span>
            Hello, I'm Marco—a South African Indian based in Durban. I completed
            high school and began my career as a carpenter. Being self-taught, I
            later transitioned into software development. I currently work for
            Decido on the Truendo product (link provided). My diverse skill set
            spans from building sturdy tables to developing functional websites.
          </span>
        </div>

        <div className="about-stats">
          <div>
            <span>Essentials :</span>
          </div>
          <div className="about-stats-container">
            <div className="box2">
              <FaLocationPin />
              <span>20 light years away</span>
            </div>
            <div className="box2">
              <CiRuler />
              <span>6 feet</span>
            </div>
            <div className="box2">
              <GiWorld />
              <span>Durban</span>
            </div>
            <div className="box2">
              <PiEyesBold />
              <span>Women</span>{" "}
            </div>
            <div className="box2">
              <FaLanguage />
              <span>English, Portuguese</span>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div>
            <span>Hobbies, Likes and Interests</span>
          </div>
          <div className="about-stats-container-flex-row">
            <div className="box2">football</div>
            <div className="box2">youtube</div>
            <div className="box2">old tv shows and movie</div>
            <div className="box2">music</div>
            <div className="box2">football</div>
            <div className="box2">horror movies</div>
            <div className="box2">coding</div>
            <div className="box2">working out</div>
          </div>
        </div>
        <Anthems />

        <div className="space"></div>
      </div>
    </div>
  );
};

export default About;
