import React from "react";
import linkbio from "../../../public/linkbio.png";
import fartup from "../../../public/fartup.png";
import blog from "../../assets/blog_images/36ec38b6-82a6-4ab8-82f7-ffdf7e0514b4.jpg";
import blog2 from "../../assets/blog_images/452a6885-7483-423c-86c0-a96a4a76e831.jpg";
import "../../styles/showcase.css";
import useTranslationStore from "../../store/store";

const Showcase = () => {
  const { t } = useTranslationStore();

  return (
    <div className="showcase" style={{ padding: "50px 20px", color: "white" }}>


      <div className="masonry">
        {/* LinkBio */}
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "25px",
            marginBottom: "20px",
            breakInside: "avoid",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "300px",
              background: "linear-gradient(135deg, dodgerblue, #6a11cb)",
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
          <h3 style={{ fontSize: "2rem", marginBottom: "15px" }}>
            {t("showcase_project_one_title")}
          </h3>
          <p
            style={{
              color: "#a0a0a0",
              marginBottom: "15px",
              lineHeight: "1.5",
            }}
          >
            {t("showcase_project_one_description")}
          </p>
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                background: "rgba(30, 144, 255, 0.2)",
                color: "dodgerblue",
                padding: "5px 10px",
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
                marginRight: "8px",
                fontSize: "0.9rem",
              }}
            >
              Node.js
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="https://linkbio.codebymarco.com"
              style={{
                display: "inline-block",
                backgroundColor: "dodgerblue",
                color: "white",
                padding: "12px 24px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
            {t("showcase_live")}
            </a>
            <a
              href="/apps/linkbio"
              style={{
                display: "inline-block",
                backgroundColor: "dodgerblue",
                color: "white",
                padding: "12px 24px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
            {t("showcase_project_details")}
            </a>
          </div>
        </div>

        {/* Fartup */}
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "25px",
            marginBottom: "20px",
            breakInside: "avoid",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "200px",
              background: "linear-gradient(135deg, #ff6b6b, #feca57)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              overflow: "hidden",
            }}
          >
            <img src={fartup} alt="Fartup Game" className="project-image" />
          </div>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
            {" "}
            {t("showcase_project_two_title")}
          </h3>
          <p
            style={{
              color: "#a0a0a0",
              marginBottom: "15px",
              lineHeight: "1.5",
            }}
          >
            {t("showcase_project_two_description")}
          </p>
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                background: "rgba(30, 144, 255, 0.2)",
                color: "dodgerblue",
                padding: "5px 10px",
                marginRight: "8px",
                fontSize: "0.9rem",
              }}
            >
              Flash
            </span>
            <span
              style={{
                background: "rgba(30, 144, 255, 0.2)",
                color: "dodgerblue",
                padding: "5px 10px",
                marginRight: "8px",
                fontSize: "0.9rem",
              }}
            >
              HTML
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="https://fartup.codebymarco.com"
              style={{
                display: "inline-block",
                backgroundColor: "dodgerblue",
                color: "white",
                padding: "12px 24px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
            {t("showcase_live")}
            </a>
            <a
              href="/apps/fartup"
              style={{
                display: "inline-block",
                backgroundColor: "dodgerblue",
                color: "white",
                padding: "12px 24px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
            {t("showcase_project_details")}
            </a>
          </div>
        </div>

        {/* Blog 1 */}
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "25px",
            marginBottom: "20px",
            breakInside: "avoid",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "150px",
              background: "linear-gradient(135deg, #48cae4, #0077b6)",
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
            {t("showcase_blog_one_title")}
          </h3>
          <p
            style={{
              color: "#a0a0a0",
              marginBottom: "15px",
              lineHeight: "1.5",
            }}
          >
            {t("showcase_blog_one_description")}
          </p>
          <a
            href="/blog/4"
            style={{
              display: "inline-block",
              backgroundColor: "dodgerblue",
              color: "white",
              padding: "10px 20px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            {t("showcase_read_more")}
            </a>
        </div>

        {/* Blog 2 */}
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "25px",
            marginBottom: "20px",
            breakInside: "avoid",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "150px",
              background: "linear-gradient(135deg, #f72585, #b5179e)",
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
            {t("showcase_blog_two_title")}
          </h3>
          <p
            style={{
              color: "#a0a0a0",
              marginBottom: "15px",
              lineHeight: "1.5",
            }}
          >
            {t("showcase_blog_two_description")}
          </p>
          <a
            href="blog/5"
            style={{
              display: "inline-block",
              backgroundColor: "dodgerblue",
              color: "white",
              padding: "10px 20px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            {t("showcase_read_more")}
            </a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
