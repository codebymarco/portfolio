import React from "react";
import "../../styles/career.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { LiaTasksSolid } from "react-icons/lia";
import { GrInfo } from "react-icons/gr";

const Career = () => {
  return (
    <div className="career">
      <div className="career-top">
        <h1>Career History</h1>
      </div>
      <div className="career-container">
        <div className="career-box">
          <div className="career-box-top">
            <div>
              <h1>Fitter</h1>
              <h2>El-Shaddai Interiors</h2>
              <h2>
                <IoLocationOutline color="yellow" /> Durban
              </h2>
            </div>

            <h3>
              <BsCalendarDate />
              jan 2016 - dec 2022
            </h3>
          </div>

          <div className="job-desc">
          <h3 className="job-response-heading">
          <GrInfo />
              Description :
            </h3>
            <p>
              I started working for my dad straight after high school. My job
              was to learn everything my dad knew so I could lessen the burden
              on him. Left after I found a new career path, Just to put it out
              there, my brother took over from me.
            </p>
          </div>

          <div className="job-response">
            <h3 className="job-response-heading">
              <LiaTasksSolid />
              Resposniblities:
            </h3>
            <div className="job-response-box">
              <span>accept order from supplier</span>
              <span>1</span>
            </div>
            <div className="job-response-box">
              <span>check if order is correct</span>
              <span>2</span>
            </div>

            <div className="job-response-box">
              <span>categorize peieces based on the units</span>
              <span>3</span>
            </div>

            <div className="job-response-box">
              <span>assemble the units</span>
              <span>4</span>
            </div>

            <div className="job-response-box">
              <span>fit and finish units</span>
              <span>5</span>
            </div>

            <div className="job-response-box">
              <span>allocate tasks to my team</span>
              <span>6</span>
            </div>
          </div>
        </div>
        <div className="career-box">
          <div className="career-box-top">
            <div>
              <h1>Fullstack Developer</h1>
              <h2>Decidio GMBH</h2>
              <h2>
                <IoLocationOutline color="yellow" /> Durban
              </h2>
            </div>

            <h3>
              <BsCalendarDate />
              jan 2023 - present
            </h3>
          </div>

          <div className="job-desc">
          <h3 className="job-response-heading">
          <GrInfo />
              Description :
            </h3>
            <p>
              I initialy joined Decdio to work as a support agent on the TRUENDO
              product, I was then promoted to a developer role, more specificlay
              working on the backend and operations as well as some frontend
              tasks from time to time.I had to learn new technologies as i got
              deeper into the product.
            </p>
          </div>

          <div className="job-response">
            <h3 className="job-response-heading">
              <LiaTasksSolid />
              Resposniblities :
            </h3>
            <div className="job-response-box">
              <span>find bugs and fix them</span>
              <span>1</span>
            </div>
            <div className="job-response-box">
              <span>optimization of data</span>
              <span>2</span>
            </div>

            <div className="job-response-box">
              <span>implement new features</span>
              <span>3</span>
            </div>

            <div className="job-response-box">
              <span>quick fixes</span>
              <span>4</span>
            </div>

            <div className="job-response-box">
              <span>fix client issues</span>
              <span>5</span>
            </div>
            <div className="job-response-box">
              <span>devops assistance</span>
              <span>6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
