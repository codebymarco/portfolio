import React from "react";
import formio from "../../../public/formio.png";
import linkbio from "../../../public/linkbio.png";
import indeed from "../../../public/indeed.png";
import ai_translator from "../../../public/ai_translator.png";
import nft_shop from "../../../public/nft_shop.png";
import portfoliobio from "../../../public/portfoliobio.png";
import "../../styles/projects.css";
import useTranslationStore from "../../store/store";

const Projects = () => {
  const { t } = useTranslationStore();

  const projects = [
    {
      name: t("projects_one_title"),
      description: t("projects_one_decsription"),
      liveUrl: "https://linkbio.codebymarco.com",
      info: "/apps/linkbio",
      image: linkbio,
      tags: ["REACT", "EXPRESSJS", "MONGODB"],
      size: "large",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      type: "project",
    },
    {
      type: "filler",
      content: `💡 ${t("projects_filler_three")}`,
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
      size: "small",
    },
    {
      name: t("projects_four_title"),
      description: t("projects_four_decsription"),
      liveUrl: "https://indeed.codebymarco.com",
      info: "/apps/indeed",
      image: indeed,
      tags: ["REACT", "EXPRESSJS", "MONGODB"],
      size: "medium",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      type: "project",
    },
    {
      type: "filler",
      content: `🚀 ${t("projects_filler_one")}`,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      size: "small",
    },
    {
      name: t("projects_two_title"),
      description: t("projects_two_decsription"),
      liveUrl: "https://formio.codebymarco.com",
      info: "/apps/formio",
      image: formio,
      tags: ["REACT", "EXPRESSJS", "MONGODB"],
      size: "medium",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      type: "project",
    },
    {
      type: "filler",
      content: `"${t("projects_filler_five")}" ✨`,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      size: "small",
    },
    {
      name: t("projects_five_title"),
      description: t("projects_five_decsription"),
      liveUrl: "https://translato.codebymarco.com",
      info: "/apps/aitranslator",
      image: ai_translator,
      tags: ["HTML", "CSS", "JS", "OPEN AI"],
      size: "large",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      type: "project",
    },
    {
      type: "filler",
      content: `💻 ${t("projects_filler_two")}`,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      size: "small",
    },
    {
      name: t("projects_three_title"),
      description: t("projects_three_decsription"),
      liveUrl: "https://portfoliobio.codebymarco.com",
      info: "/apps/portfoliobio",
      image: portfoliobio,
      tags: ["REACT", "EXPRESSJS", "MONGODB"],
      size: "small",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      type: "project",
    },
    {
      type: "filler",
      content: `🎯 ${t("projects_filler_four")} `,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      size: "small",
    },
    {
      name: t("projects_six_title"),
      description: t("projects_six_decsription"),
      liveUrl: "https://nftcentral.codebymarco.com/",
      image: nft_shop,
      info: "/apps/nftshop",
      tags: ["HTML", "CSS", "JS"],
      size: "medium",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      type: "project",
    },
  ];

  return (
    <>
      <div className="projects">
        <div className="container">
          <div className="projects-header">
            <h1 className="projects-title">{t("projects_heading")}</h1>
            <p className="projects-subtitle">{t("projects_description")}</p>
          </div>

          <div className="projects-masonry">
            {projects.map((item, index) =>
              item.type === "filler" ? (
                <div
                  key={`filler-${index}`}
                  className={`filler-card filler-${item.size}`}
                >
                  <div
                    className="filler-overlay"
                    style={{ background: item.gradient }}
                  />
                  <div className="filler-content">{item.content}</div>
                </div>
              ) : (
                <div
                  key={item.name}
                  className={`project-card project-${item.size}`}
                  onClick={() => window.open(item.liveUrl, "_blank")}
                >
                  <div className="project-header">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="project-image"
                    />
                    <div
                      className="project-overlay"
                      style={{ background: item.gradient }}
                    />
                  </div>

                  <div className="project-content">
                    <h3 className="project-name">{item.name}</h3>
                    <p className="project-description">{item.description}</p>

                    <div className="project-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <a
                        href={item.liveUrl}
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t("projects_view")} →
                      </a>
                      <a
                        href={item.info}
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t("projects_details")} →
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
