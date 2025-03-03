import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { LiaTasksSolid } from "react-icons/lia";
import { GrInfo } from "react-icons/gr";
import { HiOutlineBriefcase } from "react-icons/hi";
import Skills from "./Skills";
import Projects from "./Projects";
import { Helmet } from "react-helmet";
import Certs from "./Certs";

const Career = () => {
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
          <h1>MY PRO CAREER</h1>
        </div>
        <Skills />
        <Certs />
        <Projects />

        <div className="career-history-section">
          <h1 className="career-history-title">CAREER HISTORY</h1>

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
                      <h2 className="job-title">Fullstack Developer</h2>
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
                      <h3>Description</h3>
                    </div>
                    <p>
                      I initially joined Decidio to work as a support agent on
                      the TRUENDO product. I was then promoted to a developer
                      role, more specifically working on the backend and
                      operations as well as some frontend tasks from time to
                      time. I had to learn new technologies as I got deeper into
                      the product.
                    </p>
                  </div>

                  <div className="job-responsibilities">
                    <div className="section-heading">
                      <LiaTasksSolid />
                      <h3>Responsibilities</h3>
                    </div>
                    <div className="responsibilities-grid">
                      <div className="responsibility-item">
                        <span className="responsibility-number">1</span>
                        <span className="responsibility-text">
                          Find bugs and fix them
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">2</span>
                        <span className="responsibility-text">
                          Optimization of data
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">3</span>
                        <span className="responsibility-text">
                          Implement new features
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">4</span>
                        <span className="responsibility-text">Quick fixes</span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">5</span>
                        <span className="responsibility-text">
                          Fix client issues
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">6</span>
                        <span className="responsibility-text">
                          DevOps assistance
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">7</span>
                        <span className="responsibility-text">
                          DB migration
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">8</span>
                        <span className="responsibility-text">
                          Docker migration
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">9</span>
                        <span className="responsibility-text">
                          Consent record migration
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
                      <h2 className="job-title">Fitter</h2>
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
                      <h3>Description</h3>
                    </div>
                    <p>
                      I started working for my dad straight after high school.
                      My job was to learn everything my dad knew so I could
                      lessen the burden on him. Left after I found a new career
                      path. Just to put it out there, my brother took over from
                      me.
                    </p>
                  </div>

                  <div className="job-responsibilities">
                    <div className="section-heading">
                      <LiaTasksSolid />
                      <h3>Responsibilities</h3>
                    </div>
                    <div className="responsibilities-grid">
                      <div className="responsibility-item">
                        <span className="responsibility-number">1</span>
                        <span className="responsibility-text">
                          Accept order from supplier
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">2</span>
                        <span className="responsibility-text">
                          Check if order is correct
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">3</span>
                        <span className="responsibility-text">
                          Categorize pieces based on the units
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">4</span>
                        <span className="responsibility-text">
                          Assemble the units
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">5</span>
                        <span className="responsibility-text">
                          Fit and finish units
                        </span>
                      </div>
                      <div className="responsibility-item">
                        <span className="responsibility-number">6</span>
                        <span className="responsibility-text">
                          Allocate tasks to my team
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
          background-color: #000;
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
        }

        .career-top h1:after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: #fff;
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
        }

        .career-history-title:after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: #fff;
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
          background-color: #333;
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
          background-color: #222;
          border: 3px solid #444;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1rem;
          z-index: 2;
        }

        .timeline-marker.current {
          background-color: #1a1a1a;
          border-color: #666;
        }

        /* Job card styling */
        .job-card {
          background-color: #111;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .job-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
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
          color: #fff;
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
          color: #aaa;
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
          background-color: #1a1a1a;
          padding: 12px 15px;
          border-radius: 6px;
          transition: background-color 0.2s ease;
        }

        .responsibility-item:hover {
          background-color: #222;
        }

        .responsibility-number {
          min-width: 25px;
          height: 25px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #333;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 600;
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
      `}</style>
    </div>
  );
};

export default Career;
