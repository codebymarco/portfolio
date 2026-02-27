import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { LiaTasksSolid } from "react-icons/lia";
import { GrInfo } from "react-icons/gr";
import { HiOutlineBriefcase } from "react-icons/hi";
import { Helmet } from "react-helmet";
import useTranslationStore from "../../store/store";
import '../../styles/career.css'

const Career = () => {
  const { t } = useTranslationStore();

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <Helmet>
        {/* Basic SEO Tags */}
        <title>
          Career & Work Experience | Miguelmarco Ramcharan - Fullstack Developer
        </title>
        <meta
          name="description"
          content="Explore the career journey of Miguelmarco Ramcharan of CodeByMarco: a Fullstack Software Developer showcasing work experience, key projects & technical skills."
        ></meta>
        <link rel="canonical" href="https://www.codebymarco.com/career" />
        {/* Open Graph Tags (for Facebook, LinkedIn, WhatsApp etc.) */}
        <meta
          property="og:title"
          content="Career & Work Experience | Miguelmarco Ramcharan - Fullstack Developer"
        />
        <meta
          property="og:description"
          content="Explore the career journey of Miguelmarco Ramcharan of CodeByMarco: a Fullstack Software Developer showcasing work experience, key projects & technical skills."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.codebymarco.com/career" />
        <meta
          property="og:image"
          content="https://www.codebymarco.com/images/codebymarco-career-og-image.jpg"
        />{" "}
        {/* IMPORTANT: Create this image! */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="CodeByMarco" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />{" "}
        {/* IMPORTANT: Replace with your actual Twitter handle */}
        <meta name="twitter:creator" content="@your_twitter_handle" />{" "}
        {/* IMPORTANT: Replace with your actual Twitter handle */}
        <meta
          name="twitter:title"
          content="Career & Work Experience | Miguelmarco Ramcharan - Fullstack Developer"
        />
        <meta
          name="twitter:description"
          content="Explore the career journey of Miguelmarco Ramcharan of CodeByMarco: a Fullstack Software Developer showcasing work experience, key projects & technical skills."
        />
        <meta
          name="twitter:image"
          content="https://www.codebymarco.com/images/codebymarco-career-og-image.jpg"
        />
      </Helmet>
      <div className="career">
        <div className="career-top">
          <h1>{t("career_heading")}</h1>
        </div>
        {/*         <Certs />
         */}{" "}
        <div className="career-history-section">
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
                        <span>Jan 2023 - Dec 2025</span>
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
                      <h2 className="job-title">{t("job_title_two")}</h2>
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


    </div>
  );
};

export default Career;
