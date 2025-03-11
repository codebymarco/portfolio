import { useEffect, useState } from "react";
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
import { BiCodeAlt } from "react-icons/bi";

const About = () => {
  // Array of images (using the same image URL for demonstration)
  const images = [img, img, img, img, pic];

  // Selected language for the interface
  const [language, setLanguage] = useState("english");

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
      position: "Software Developer",
      period: "Present",
      description:
        "Working on the Truendo product, focusing on front-end development and user experience.",
    },
    {
      company: "Previous Company",
      position: "Carpenter",
      period: "Past",
      description:
        "Built sturdy tables and furniture, developing hands-on skills and attention to detail.",
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
                <span>Durban, South Africa</span>
              </div>
              <div>
                <h4>Marco 22</h4>
                <MdVerified style={{ color: "dodgerblue" }} />
              </div>
              <div>
                <BiCodeAlt />
                <span>Software Developer</span>
              </div>
              <div>
                <PiHouseLineBold />
                <span>Lives in Durban</span>
              </div>
            </div>
            <FaArrowAltCircleUp style={{ color: "white" }} />
          </div>

          <div className="photo-section" style={{ position: "relative" }}>
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
          </div>
        </div>

        {/* Looking for section */}
        <div className="about-about">
          <div className="about-section-top">
            <CiSearch />
            <span>{t.searchingFor}:</span>
          </div>
          <div className="search-items">
            <div>The meaning of life.</div>
            <div>The perfect lady.</div>
            <div>More mula.</div>
            <div>Innovative projects to contribute to.</div>
            <div>Collaborative coding experiences.</div>
          </div>
        </div>

        {/* About me section */}
        <div className="about-main">
          <div className="about-section-top">
            <span>{t.aboutMe}:</span>
          </div>
          <span className="about-text">
            Hello, I'm Marco—a South African based in Durban. I completed high
            school and began my career as a carpenter. Being self-taught, I
            later transitioned into software development. I currently work for
            Decido on the Truendo product. My diverse skill set spans from
            building sturdy tables to developing functional websites. I'm
            passionate about creating intuitive user experiences and solving
            complex problems through elegant code solutions.
          </span>
        </div>

        {/* Essential info */}
        <div className="about-stats">
          <div>
            <span>{t.essentials}:</span>
          </div>
          <div className="about-stats-container">
            <div className="box2">
              <FaLocationPin />
              <span>Durban, South Africa</span>
            </div>
            <div className="box2">
              <CiRuler />
              <span>6 feet</span>
            </div>
            <div className="box2">
              <GiWorld />
              <span>South African</span>
            </div>
            <div className="box2">
              <PiEyesBold />
              <span>Women</span>
            </div>
            <div className="box2">
              <FaLanguage />
              <span>English, Portuguese</span>
            </div>
            <div className="box2">
              <MdWork />
              <span>Software Developer at Decido</span>
            </div>
          </div>
        </div>

        {/* Professional Skills section - NEW */}
        <div className="about-stats">
          <div className="section-header">
            <FaCode className="section-icon" />
            <span>{t.skills}</span>
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
            <span>{t.experience}</span>
          </div>
          <div className="timeline-container">
            {workExperience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{job.position}</h3>
                  <h4>{job.company}</h4>
                  <p className="timeline-period">{job.period}</p>
                  <p className="timeline-description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education section - NEW */}
        <div className="about-stats">
          <div className="section-header">
            <HiOutlineAcademicCap className="section-icon" />
            <span>{t.education}</span>
          </div>
          <div className="education-container">
            <div className="education-item">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <h3>Self-taught Developer</h3>
                <p>
                  Continuous learning through online resources, documentation,
                  and practical projects
                </p>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <h3>High School Diploma</h3>
                <p>
                  Completed secondary education with focus on technical subjects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects section - NEW */}
        <div className="about-stats">
          <div className="section-header">
            <FaToolbox className="section-icon" />
            <span>{t.projects}</span>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Truendo</h3>
                <span className="project-tag">Professional</span>
              </div>
              <p>
                Working on front-end development and user experience for the
                Truendo product at Decido.
              </p>
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
              <p>
                Designed and developed a personal portfolio website to showcase
                skills and projects.
              </p>
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
            <span>{t.hobbies}</span>
          </div>
          <div className="about-stats-container-flex-row">
            <div className="box2">football</div>
            <div className="box2">youtube</div>
            <div className="box2">old tv shows and movies</div>
            <div className="box2">music</div>
            <div className="box2">horror movies</div>
            <div className="box2">coding</div>
            <div className="box2">working out</div>
            <div className="box2">gaming</div>
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
          flex-direction: column;
          gap: 15px;
        }

        .skill-item {
          width: 100%;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }

        .skill-name {
          font-weight: 500;
        }

        .skill-percentage {
          color: #61dafb;
        }

        .skill-bar-bg {
          width: 100%;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #61dafb, #3490dc);
          border-radius: 4px;
          transition: width 1s ease-in-out;
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
