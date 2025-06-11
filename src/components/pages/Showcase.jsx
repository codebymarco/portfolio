import React from "react";
import linkbio from "../../../public/linkbio.png";
import fartup from "../../../public/fartup.png";
import blog from "../../assets/blog_images/36ec38b6-82a6-4ab8-82f7-ffdf7e0514b4.png";
import blog2 from "../../assets/blog_images/452a6885-7483-423c-86c0-a96a4a76e831.png";

const Showcase = () => {
  return (
    <div
      style={{ padding: "50px 20px", backgroundColor: "#000", color: "white" }}
    >
      <style jsx>{`
        .masonry {
          columns: 3;
          column-gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .masonry {
            columns: 1;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .masonry {
            columns: 2;
          }
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
      `}</style>

      <div className="masonry">
        {/* LinkBio */}
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "25px",
            borderRadius: "15px",
            marginBottom: "20px",
            breakInside: "avoid",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "300px",
              background: "linear-gradient(135deg, dodgerblue, #6a11cb)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src={linkbio}
              alt="LinkBio Project"
              className="project-image"
            />
          </div>
          <h3 style={{ fontSize: "2rem", marginBottom: "15px" }}>LinkBio</h3>
          <p
            style={{
              color: "#a0a0a0",
              marginBottom: "15px",
              lineHeight: "1.5",
            }}
          >
            A modern, customizable bio link platform that helps creators
            showcase their work, social media, and important links in one
            beautiful page.
          </p>
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                background: "rgba(30, 144, 255, 0.2)",
                color: "dodgerblue",
                padding: "5px 10px",
                borderRadius: "12px",
                marginRight: "8px",
                fontSize: "0.9rem",
              }}
            >
              React
            </span>
            <span
              style={{
                background: "rgba(30, 144, 255, 0.2)",
                color: "dodgerblue",
                padding: "5px 10px",
                borderRadius: "12px",
                marginRight: "8px",
                fontSize: "0.9rem",
              }}
            >
              Node.js
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="https://linkbio-console.vercel.app/"
              style={{
                display: "inline-block",
                backgroundColor: "dodgerblue",
                color: "white",
                padding: "12px 24px",
                borderRadius: "20px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Live
            </a>
            <a
              href="/apps/linkbio"
              style={{
                display: "inline-block",
                backgroundColor: "dodgerblue",
                color: "white",
                padding: "12px 24px",
                borderRadius: "20px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Project Details
            </a>
          </div>
        </div>

        {/* Fartup */}
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "25px",
            borderRadius: "15px",
            marginBottom: "20px",
            breakInside: "avoid",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "200px",
              background: "linear-gradient(135deg, #ff6b6b, #feca57)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              overflow: "hidden",
            }}
          >
            <img src={fartup} alt="Fartup Game" className="project-image" />
          </div>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Fartup</h3>
          <p
            style={{
              color: "#a0a0a0",
              marginBottom: "15px",
              lineHeight: "1.5",
            }}
          >
            A hilarious mobile game where timing is everything! Navigate through
            challenges with perfect timing.
          </p>
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                background: "rgba(30, 144, 255, 0.2)",
                color: "dodgerblue",
                padding: "5px 10px",
                borderRadius: "12px",
                marginRight: "8px",
                fontSize: "0.9rem",
              }}
            >
              Unity
            </span>
            <span
              style={{
                background: "rgba(30, 144, 255, 0.2)",
                color: "dodgerblue",
                padding: "5px 10px",
                borderRadius: "12px",
                marginRight: "8px",
                fontSize: "0.9rem",
              }}
            >
              C#
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="https://games-one-lemon.vercel.app/fartup"
              style={{
                display: "inline-block",
                backgroundColor: "dodgerblue",
                color: "white",
                padding: "12px 24px",
                borderRadius: "20px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Live
            </a>
            <a
              href="/apps/fartup"
              style={{
                display: "inline-block",
                backgroundColor: "dodgerblue",
                color: "white",
                padding: "12px 24px",
                borderRadius: "20px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Project Details
            </a>
          </div>
        </div>

        {/* Blog 1 */}
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "25px",
            borderRadius: "15px",
            marginBottom: "20px",
            breakInside: "avoid",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "150px",
              background: "linear-gradient(135deg, #48cae4, #0077b6)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              overflow: "hidden",
            }}
          >
            <img src={blog} alt="React Development" className="project-image" />
          </div>
          <div
            style={{
              color: "dodgerblue",
              fontSize: "0.9rem",
              marginBottom: "10px",
            }}
          >
            Dec 15, 2024
          </div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
            Building Scalable React Apps
          </h3>
          <p
            style={{
              color: "#a0a0a0",
              marginBottom: "15px",
              lineHeight: "1.5",
            }}
          >
            Learn best practices for structuring large React applications.
          </p>
          <a
            href="/blog/4"
            style={{
              display: "inline-block",
              backgroundColor: "dodgerblue",
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Read More
          </a>
        </div>

        {/* Blog 2 */}
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "25px",
            borderRadius: "15px",
            marginBottom: "20px",
            breakInside: "avoid",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "150px",
              background: "linear-gradient(135deg, #f72585, #b5179e)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              overflow: "hidden",
            }}
          >
            <img src={blog2} alt="Web Development" className="project-image" />
          </div>
          <div
            style={{
              color: "dodgerblue",
              fontSize: "0.9rem",
              marginBottom: "10px",
            }}
          >
            Dec 10, 2024
          </div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
            Future of Web Development
          </h3>
          <p
            style={{
              color: "#a0a0a0",
              marginBottom: "15px",
              lineHeight: "1.5",
            }}
          >
            Exploring emerging technologies that will shape web development.
          </p>
          <a
            href="blog/5"
            style={{
              display: "inline-block",
              backgroundColor: "dodgerblue",
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
