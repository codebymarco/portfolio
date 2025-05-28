import React from "react";

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
              fontSize: "4rem",
              marginBottom: "20px",
            }}
          >
            🔗
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
          <a
            href="#"
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
            View Project
          </a>
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
              fontSize: "3rem",
              marginBottom: "20px",
            }}
          >
            🎮
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
          <a
            href="#"
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
            Play Game
          </a>
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
              fontSize: "2rem",
              marginBottom: "15px",
            }}
          >
            📝
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
            href="#"
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
              fontSize: "2rem",
              marginBottom: "15px",
            }}
          >
            💻
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
            href="#"
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
