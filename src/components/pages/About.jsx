import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import "../../styles/about.css";
import { IoIosNotifications, IoIosSend } from "react-icons/io";
import ScrollToTop from "../components/ScrollToTop";
import {
  FaArrowAltCircleUp,
  FaCode,
  FaFilter,
  FaGraduationCap,
  FaHeart,
  FaLanguage,
  FaToolbox,
} from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { MdCancel, MdVerified, MdWork } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FaLocationPin } from "react-icons/fa6";
import { CiRuler, CiSearch } from "react-icons/ci";
import { PiEyesBold, PiFireSimpleFill, PiHouseLineBold } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";
import Anthems from "../components/Anthems";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiAdjustmentsHorizontal, HiOutlineAcademicCap } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import pic from "../../assets/upgrade.svg";
import img from "../../assets/image.png";
import img2 from "../../assets/my_pics/six.jpg";
import img3 from "../../assets/my_pics/five.jpg";
import img4 from "../../assets/my_pics/seven.jpg";
import img5 from "../../assets/my_pics/one.jpg";
import { BiCodeAlt } from "react-icons/bi";
import useTranslationStore from "../../store/store";

// Swipe Hint Component (internal)
const SwipeHint = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide hint after 3 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="swipe-hint">
      <span>← Swipe to navigate →</span>
    </div>
  );
};

const About = () => {
  const { t: trans } = useTranslationStore();

  // Array of images (using the same image URL for demonstration)
  const images = [img, img2, img3, img4, img5, pic];

  // Selected language for the interface
  const [language, setLanguage] = useState("english");

  // Touch handling state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const translations = {
    english: {
      title: "About",
      searchingFor: "Searching for",
      aboutMe: "About me",
      essentials: "Essentials",
      hobbies: "Hobbies, Likes and Interests",
      skills: "Professional Skills",
      experience: "Work Experience",
      education: "Education",
      projects: "Notable Projects",
    },
    zulu: {
      title: "Mayelana",
      searchingFor: "Ngifuna",
      aboutMe: "Mayelana nami",
      essentials: "Okubalulekile",
      hobbies: "Izinto engizithandayo",
      skills: "Amakhono omsebenzi",
      experience: "Isipiliyoni somsebenzi",
      education: "Imfundo",
      projects: "Amaphrojekthi abalulekile",
    },
    afrikaans: {
      title: "Oor",
      searchingFor: "Soek vir",
      aboutMe: "Oor my",
      essentials: "Noodsaaklike",
      hobbies: "Stokperdjies en belange",
      skills: "Professionele vaardighede",
      experience: "Werkervaring",
      education: "Opvoeding",
      projects: "Noemenswaardige projekte",
    },
    espanol: {
      title: "Acerca de",
      searchingFor: "Buscando",
      aboutMe: "Sobre mí",
      essentials: "Esenciales",
      hobbies: "Aficiones e intereses",
      skills: "Habilidades profesionales",
      experience: "Experiencia laboral",
      education: "Educación",
      projects: "Proyectos destacados",
    },
  };

  // Get current language text
  const t = translations[language];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle language change
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    console.log("Language changed to:", selectedLanguage);
  };

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

  // Professional skills data without percentages
  const professionalSkills = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "HTML/CSS" },
    { name: "Node.js" },
    { name: "Golang" },
    { name: "SQL" },
    { name: "Docker" },
    { name: "Jenkins" },
    { name: "Linux" },
    { name: "Windows" },
    { name: "VSCode" },
    { name: "AWS" },
    { name: "GCP" },
    { name: "BunnyCDN" },
  ];

  // Work experience data
  const workExperience = [
    {
      company: "Decido (Truendo)",
      position: "about_we_one_occupation",
      period: "present",
      description: "about_we_one_description",
    },
    {
      company: "Previous Company",
      position: "about_we_two_occupation",
      period: "past",
      description: "about_we_two_description",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
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
      <ScrollToTop />

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
                <span>{trans("about_location")}</span>
              </div>
              <div>
                <h4>Marco 26</h4>
                <MdVerified style={{ color: "dodgerblue" }} />
              </div>
              <div>
                <BiCodeAlt />
                <span>{trans("about_occupation")}</span>
              </div>
              <div>
                <PiHouseLineBold />
                <span>{trans("about_lives")}</span>
              </div>
            </div>
            <FaArrowAltCircleUp style={{ color: "white" }} />
          </div>

          <div
            className="photo-section"
            ref={carouselRef}
            style={{ position: "relative" }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="tab-buttons">
              {images.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    height: "10px",
                    width: "30px",
                    flexGrow: "1",
                    backgroundColor:
                      currentIndex === index
                        ? "#FFFFFF"
                        : "rgba(255, 255, 255, 0.3)",
                    borderRadius: "10%",
                    cursor: "pointer",
                  }}
                ></div>
              ))}
            </div>
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
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              →
            </button>
            <SwipeHint />
          </div>
        </div>

        {/* Looking for section */}
        <div className="about-about">
          <div className="about-section-top">
            <CiSearch />
            <span>{trans("about_searching_for")}:</span>
          </div>
          <div className="search-items">
            <div>{trans("about_searching_for_1")}</div>
            <div>{trans("about_searching_for_2")}</div>
            <div>{trans("about_searching_for_3")}</div>
            <div>{trans("about_searching_for_4")}</div>
            <div>{trans("about_searching_for_5")}</div>
          </div>
        </div>

        {/* About me section */}
        <div className="about-main">
          <div className="about-section-top">
            <span>{trans("about_about_heading")}:</span>
          </div>
          <span className="about-text">{trans("about_about_description")}</span>
        </div>

        {/* Essential info */}
        <div className="about-stats">
          <div>
            <span>{trans("about_about_essentials")}:</span>
          </div>
          <div className="about-stats-container">
            <div className="box2">
              <FaLocationPin />
              <span>{trans("about_about_essentials_1")}</span>
            </div>
            <div className="box2">
              <CiRuler />
              <span>{trans("about_about_essentials_2")}</span>
            </div>
            <div className="box2">
              <GiWorld />
              <span>{trans("about_about_essentials_3")}</span>
            </div>
            <div className="box2">
              <PiEyesBold />
              <span>{trans("about_about_essentials_4")}</span>
            </div>
            <div className="box2">
              <FaLanguage />
              <span>{trans("about_about_essentials_5")}</span>
            </div>
            <div className="box2">
              <MdWork />
              <span>{trans("about_about_essentials_6")}</span>
            </div>
          </div>
        </div>

        {/* Professional Skills section - NEW */}
        <div className="about-stats">
          <div className="section-header">
            <FaCode className="section-icon" />
            <span>{trans("about_skills_heading")}</span>
          </div>
          <div className="skills-container">
            {professionalSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-chip">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience section - NEW */}
        <div className="about-stats">
          <div className="section-header">
            <MdWork className="section-icon" />
            <span>{trans("about_we_heading")}</span>
          </div>
          <div className="timeline-container">
            {workExperience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{trans(job.position)}</h3>
                  <h4>{job.company}</h4>
                  <p className="timeline-period">{trans(job.period)}</p>
                  <p className="timeline-description">
                    {trans(job.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education section - NEW */}
        <div className="about-stats">
          <div className="section-header">
            <HiOutlineAcademicCap className="section-icon" />
            <span>{trans("about_edu_heading")}</span>
          </div>
          <div className="education-container">
            <div className="education-item">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <h3>{trans("about_edu_one_title")}</h3>
                <p>{trans("about_edu_one_description")}</p>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <h3>{trans("about_edu_two_title")}</h3>
                <p>{trans("about_edu_two_description")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects section - NEW */}
        <div className="about-stats">
          <div className="section-header">
            <FaToolbox className="section-icon" />
            <span>{trans("about_projects_heading")}</span>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Truendo</h3>
                <span className="project-tag">Professional</span>
              </div>
              <p>{trans("about_projects_one_description")}</p>
              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>Portfolio Website</h3>
                <span className="project-tag">Personal</span>
              </div>
              <p>{trans("about_projects_two_description")}</p>
              <div className="project-tech">
                <span>React</span>
                <span>CSS</span>
                <span>Animation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies section */}
        <div className="about-stats">
          <div>
            <span>{trans("about_hoobies_etc_heading")}</span>
          </div>
          <div className="about-stats-container-flex-row">
            <div className="box2">{trans("about_hobbies_1")}</div>
            <div className="box2">{trans("about_hobbies_2")}</div>
            <div className="box2">{trans("about_hobbies_3")}</div>
            <div className="box2">{trans("about_hobbies_4")}</div>
            <div className="box2">{trans("about_hobbies_5")}</div>
            <div className="box2">{trans("about_hobbies_6")}</div>
            <div className="box2">{trans("about_hobbies_7")}</div>
            <div className="box2">{trans("about_hobbies_8")}</div>
          </div>
        </div>

        {/* Music Anthems section */}
        <Anthems />

        <div className="space"></div>
      </div>

      <style jsx>{`
        .language-label {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #61dafb;
        }

        .language-options {
          display: flex;
          gap: 5px;
        }

        .language-options button {
          background-color: rgba(97, 218, 251, 0.1);
          border: 1px solid rgba(97, 218, 251, 0.3);
          color: white;
          padding: 5px 10px;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .language-options button:hover {
          background-color: rgba(97, 218, 251, 0.2);
        }

        .language-options button.active {
          background-color: rgba(97, 218, 251, 0.3);
          border-color: #61dafb;
        }

        .search-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 15px;
        }

        .search-items div {
          padding: 5px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .about-text {
          line-height: 1.6;
          font-size: 1.05rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .section-icon {
          color: #61dafb;
          font-size: 1.3rem;
        }

        /* Skills styles */
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-chip {
          background-color: rgba(97, 218, 251, 0.1);
          border: 1px solid rgba(97, 218, 251, 0.3);
          border-radius: 15px;
          padding: 5px 12px;
          font-size: 0.9rem;
        }

        /* Timeline styles */
        .timeline-container {
          position: relative;
          padding-left: 30px;
        }

        .timeline-container:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background-color: rgba(97, 218, 251, 0.5);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 30px;
        }

        .timeline-marker {
          position: absolute;
          left: -36px;
          top: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #61dafb;
          border: 2px solid #1a1a1a;
        }

        .timeline-content h3 {
          margin: 0 0 5px;
          color: #fff;
        }

        .timeline-content h4 {
          margin: 0 0 10px;
          color: #61dafb;
          font-weight: normal;
        }

        .timeline-period {
          font-style: italic;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 10px;
        }

        .timeline-description {
          line-height: 1.5;
        }

        /* Education styles */
        .education-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .education-item {
          display: flex;
          gap: 15px;
        }

        .education-icon {
          background-color: rgba(97, 218, 251, 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .education-icon svg {
          color: #61dafb;
          font-size: 1.2rem;
        }

        .education-content h3 {
          margin: 0 0 8px;
          color: #fff;
        }

        .education-content p {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
        }

        /* Projects styles */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .project-card {
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          background-color: rgba(255, 255, 255, 0.08);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .project-header h3 {
          margin: 0;
          color: #61dafb;
        }

        .project-tag {
          background-color: rgba(97, 218, 251, 0.2);
          color: #61dafb;
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
        }

        .project-card p {
          margin: 10px 0 15px;
          line-height: 1.5;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-tech span {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 0.85rem;
        }

        /* Photo section styles */
        .photo-section {
          position: relative;
          touch-action: pan-y; /* Improves touch behavior on mobile */
          user-select: none; /* Prevents text selection during swipe */
        }

        .tab-buttons {
          display: flex;
          gap: 5px;
          position: absolute;
          top: 10px;
          left: 0;
          right: 0;
          z-index: 10;
          padding: 0 15px;
        }

        /* Swipe hint */
        .swipe-hint {
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          text-align: center;
          color: white;
          background: rgba(0, 0, 0, 0.5);
          padding: 10px;
          border-radius: 20px;
          margin: 0 auto;
          width: 200px;
          animation: fadeOut 3s forwards;
          display: none;
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        /* Media queries */
        @media (max-width: 768px) {
          .prev-arrow,
          .next-arrow {
            display: none;
          }

          .swipe-hint {
            display: block;
          }

          /* Make tab indicators slightly larger on mobile for easier tapping */
          .tab-buttons div {
            height: 12px !important;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .education-item {
            flex-direction: column;
          }

          .education-icon {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
