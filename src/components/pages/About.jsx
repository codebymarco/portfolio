import { useState } from "react";
import "../../styles/about.css";
import { IoIosNotifications, IoIosSend } from "react-icons/io";
import { FaFilter, FaHeart, FaLanguage, FaMusic } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FaLocationPin } from "react-icons/fa6";
import { CiRuler } from "react-icons/ci";
import { PiEyesBold } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";
import Anthems from "../components/Anthems";

const About = () => {
  // Array of images (using the same image URL for demonstration)
  const images = [
    "https://th.bing.com/th/id/R.6e5c581e51eb9ee2d5b4f079066ba884?rik=bdcSOJNU1VnqfA&riu=http%3a%2f%2fcdn.designbump.com%2fwp-content%2fuploads%2f2015%2f05%2fenhanced-buzz-wide-29647-1394478394-12.jpg&ehk=JPk1fLlgcqoRCZJeVV9N46o5que23SXtaTB3BIzCQWM%3d&risl=&pid=ImgRaw&r=0",
    "https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
    "https://th.bing.com/th/id/R.6e5c581e51eb9ee2d5b4f079066ba884?rik=bdcSOJNU1VnqfA&riu=http%3a%2f%2fcdn.designbump.com%2fwp-content%2fuploads%2f2015%2f05%2fenhanced-buzz-wide-29647-1394478394-12.jpg&ehk=JPk1fLlgcqoRCZJeVV9N46o5que23SXtaTB3BIzCQWM%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.6e5c581e51eb9ee2d5b4f079066ba884?rik=bdcSOJNU1VnqfA&riu=http%3a%2f%2fcdn.designbump.com%2fwp-content%2fuploads%2f2015%2f05%2fenhanced-buzz-wide-29647-1394478394-12.jpg&ehk=JPk1fLlgcqoRCZJeVV9N46o5que23SXtaTB3BIzCQWM%3d&risl=&pid=ImgRaw&r=0",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="about">
      <div className="fixed-menu">
        <GrPowerReset />
        <MdCancel />
        <ImStarFull />
        <FaHeart />
        <IoIosSend />
      </div>
      {/* Top */}
      <div className="top">
        <span>tinder logo</span>
        <div>
          <IoIosNotifications /> <FaFilter />
          <ImStarFull />
        </div>
      </div>
      {/* Photo section with carousel */}
      <div className="about-photo">
        <div className="tab-buttons">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
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
        {/* Tab buttons */}
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
                backgroundColor: currentIndex === index ? "black" : "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* Looking for section */}
      <div className="about-about">
        <div>
          <span>sreach icon</span>
          <span>lokking for</span>
        </div>
        <span>
          I'm looking to work with people that will help me grow as a persona
          and a programmer, as well as learn stuff about new cultures.
        </span>
      </div>
      {/* About me section */}
      <div className="about-main">
        <div>
          <span>about me</span>
        </div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
          recusandae quisquam voluptas iusto repellat accusamus iure vero odit
          eligendi nulla.
        </span>
      </div>

      <div className="about-stats">
        <div>
          <span>Essentials</span>
        </div>
        <div className="about-stats-container">
          <div>
            <FaLocationPin />
            <span>20 light years away</span>
          </div>
          <div>
            <CiRuler />
            <span>1cm shorter than 6 feet</span>
          </div>
          <div>
            <GiWorld />
            <span>Durban</span>
          </div>
          <div>
            <PiEyesBold />
            <span>Women</span>{" "}
          </div>
          <div>
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
  );
};

export default About;
