import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { LiaTasksSolid } from "react-icons/lia";
import { GrInfo } from "react-icons/gr";
import { HiOutlineBriefcase } from "react-icons/hi";
import Skills from "./Skills";
import { Helmet } from "react-helmet";
import useTranslationStore from "../../store/store";

const Career = () => {
  const { t } = useTranslationStore();

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <Helmet>
        <title>
          Career | Software Developer Portfolio | Miguelmarco Ramcharan
        </title>
        <meta
          name="description"
          content="Welcome to the portfolio of Miguelmarco Ramcharan. Explore projects, skills, and more by CodeByMarco."
        />
        <meta name="author" content="Miguelmarco Ramcharan" />
        <meta
          name="keywords"
          content="marco ramcharan, codebymarco, software developer portfolio about"
        />
      </Helmet>
      <div className="career">
        <div className="career-top">
          <h1>{t("career_heading")}</h1>
        </div>
        <div className="skills-wrapper">
          <Skills />
        </div>{" "}
        {/*         <Certs />
         */}{" "}
        <div className="career-history-section">
          <h1 className="career-history-title">{t("career_history")}</h1>

          <div className="career-timeline">
            <div className="timeline-line"></div>

            {/* Current Job */}
            <div className="timeline-item">
              <div className="timeline-marker current">
                <HiOutlineBriefcase />
              </div>
              <div className="timeline-content">
                <div className="job-card">
                  <div className="job-header">
                    <div className="job-title-section">
                      <h2 className="job-title">{t("job_title_one")}</h2>
                      <div className="job-company">
                        <span>Decidio GMBH</span>
                      </div>
                    </div>
                    <div className="job-meta">
                      <div className="job-location">
                        <IoLocationOutline />
                        <span>Durban</span>
                      </div>
                      <div className="job-date">
                        <BsCalendarDate />
                        <span>Jan 2023 - Present</span>
                      </div>
                    </div>
                  </div>

                  <div className="job-description">
                    <div className="section-heading">
                      <GrInfo />
                      <h3>{t("job_description")}</h3>
                    </div>
                    <p>{t("job_description_one")}</p>
                  </div>

                  <div className="job-responsibilities">
                    <div className="section-heading">
                      <LiaTasksSolid />
                      <h3>{t("job_responsibility")}</h3>
                    </div>
                    <div className="responsibilities-grid">
                      <div className="responsibility-item">
                        <span className="responsibility-number">1</span>
                        <span className="responsibility-text">
                          {t("job_res_one_1")}
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">2</span>
                        <span className="responsibility-text">
                          {t("job_res_one_2")}
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">3</span>
                        <span className="responsibility-text">
                          {t("job_res_one_3")}
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">4</span>
                        <span className="responsibility-text">
                          {t("job_res_one_4")}
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">5</span>
                        <span className="responsibility-text">
                        {t("job_res_one_5")}

                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">6</span>
                        <span className="responsibility-text">
                        {t("job_res_one_6")}
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">7</span>
                        <span className="responsibility-text">
                        {t("job_res_one_7")}
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">8</span>
                        <span className="responsibility-text">
                        {t("job_res_one_8")}
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">9</span>
                        <span className="responsibility-text">
                        {t("job_res_one_9")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Job */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <HiOutlineBriefcase />
              </div>
              <div className="timeline-content">
                <div className="job-card">
                  <div className="job-header">
                    <div className="job-title-section">
                      <h2 className="job-title">{t("job_title_one")}</h2>
                      <div className="job-company">
                        <span>El-Shaddai Interiors</span>
                      </div>
                    </div>
                    <div className="job-meta">
                      <div className="job-location">
                        <IoLocationOutline />
                        <span>Durban</span>
                      </div>
                      <div className="job-date">
                        <BsCalendarDate />
                        <span>Jan 2016 - Dec 2022</span>
                      </div>
                    </div>
                  </div>

                  <div className="job-description">
                    <div className="section-heading">
                      <GrInfo />
                      <h3> {t("job_description")}</h3>
                    </div>
                    <p>{t("job_description_two")}</p>
                  </div>

                  <div className="job-responsibilities">
                    <div className="section-heading">
                      <LiaTasksSolid />
                      <h3>{t("job_responsibility")}</h3>
                    </div>
                    <div className="responsibilities-grid">
                      <div className="responsibility-item">
                        <span className="responsibility-number">1</span>
                        <span className="responsibility-text">
                        {t("job_res_two_1")}
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">2</span>
                        <span className="responsibility-text">
                        {t("job_res_two_2")}
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">3</span>
                        <span className="responsibility-text">
                        {t("job_res_two_3")}
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">4</span>
                        <span className="responsibility-text">
                        {t("job_res_two_4")}
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">5</span>
                        <span className="responsibility-text">
                        {t("job_res_two_5")}
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">6</span>
                        <span className="responsibility-text">
                        {t("job_res_two_6")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* General career page styling */
        .career {
          background-image: radial-gradient(
            circle at 50% 30%,
            #111111 0%,
            #000000 70%
          );
          background-color: black;
          min-height: 100vh;
          color: #fff;
          padding: 40px 20px 80px;
        }

        .career-top {
          text-align: center;
          margin-bottom: 50px;
          padding: 20px 0;
        }

        .career-top h1 {
          font-size: 2.5rem;
          letter-spacing: 2px;
          position: relative;
          display: inline-block;
          color: #61dafb;
          text-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
        }

        .career-top h1:after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: #61dafb;
          box-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
        }

        /* Career history section */
        .career-history-section {
          max-width: 1000px;
          margin: 80px auto 0;
        }

        .career-history-title {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 60px;
          letter-spacing: 2px;
          position: relative;
          color: #61dafb;
          text-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
        }

        .career-history-title:after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: #61dafb;
          box-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
        }

        /* Timeline styling */
        .career-timeline {
          position: relative;
          padding: 30px 0;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 30px;
          width: 3px;
          background: linear-gradient(
            to bottom,
            rgba(97, 218, 251, 0.6),
            rgba(97, 218, 251, 0.1)
          );
          box-shadow: 0 0 8px rgba(97, 218, 251, 0.3);
        }

        .timeline-item {
          position: relative;
          padding-left: 70px;
          margin-bottom: 70px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: 16px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: rgba(13, 13, 13, 0.9);
          border: 3px solid rgba(97, 218, 251, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #61dafb;
          font-size: 1rem;
          z-index: 2;
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.3);
          transition: all 0.3s ease;
        }

        .timeline-marker.current {
          background-color: rgba(97, 218, 251, 0.1);
          border-color: #61dafb;
          box-shadow: 0 0 20px rgba(97, 218, 251, 0.4);
        }

        .timeline-item:hover .timeline-marker {
          transform: scale(1.1);
          box-shadow: 0 0 25px rgba(97, 218, 251, 0.5);
        }

        /* Job card styling */
        .job-card {
          background-color: rgba(13, 13, 13, 0.9);
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(97, 218, 251, 0.1);
        }

        .job-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4),
            0 0 15px rgba(97, 218, 251, 0.1);
          border-color: rgba(97, 218, 251, 0.3);
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 25px;
          flex-wrap: wrap;
          gap: 15px;
        }

        .job-title {
          font-size: 1.6rem;
          margin: 0 0 10px;
          color: #61dafb;
        }

        .job-company {
          font-size: 1.2rem;
          color: #aaa;
        }

        .job-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .job-location,
        .job-date {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: #888;
          transition: color 0.3s ease;
        }

        .job-card:hover .job-location,
        .job-card:hover .job-date {
          color: #aaa;
        }

        .job-description,
        .job-responsibilities {
          margin-top: 25px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
          color: #ddd;
        }

        .section-heading h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .section-heading svg {
          color: #61dafb;
        }

        .job-description p {
          line-height: 1.6;
          color: #bbb;
          margin: 0;
        }

        /* Responsibilities grid */
        .responsibilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .responsibility-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background-color: rgba(255, 255, 255, 0.05);
          padding: 12px 15px;
          border-radius: 8px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .responsibility-item:hover {
          background-color: rgba(255, 255, 255, 0.08);
          transform: translateX(5px);
          border-color: rgba(97, 218, 251, 0.2);
        }

        .responsibility-number {
          min-width: 25px;
          height: 25px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(97, 218, 251, 0.1);
          color: #61dafb;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .responsibility-item:hover .responsibility-number {
          background-color: rgba(97, 218, 251, 0.2);
          transform: scale(1.1);
        }

        .responsibility-text {
          font-size: 0.95rem;
          color: #ccc;
          line-height: 1.3;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }

          .timeline-marker {
            left: 6px;
          }

          .timeline-item {
            padding-left: 50px;
          }

          .job-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .job-meta {
            align-items: flex-start;
            margin-top: 10px;
          }

          .responsibilities-grid {
            grid-template-columns: 1fr;
          }

          .job-title {
            font-size: 1.4rem;
          }

          .job-card {
            padding: 20px;
          }
        }

        .skills-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 40px;
        }

        .skills-wrapper .skillsPageNewcontainer {
          margin: 0 auto;
          background-color: rgba(13, 13, 13, 0.9);
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(97, 218, 251, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skills-wrapper .skillsPageNewcontainer:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4),
            0 0 15px rgba(97, 218, 251, 0.1);
          border-color: rgba(97, 218, 251, 0.3);
        }

        @media screen and (max-width: 768px) {
          .skills-wrapper .skillsPageNewcontainer {
            width: fit-content;
            margin: 0 auto;
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Career;
