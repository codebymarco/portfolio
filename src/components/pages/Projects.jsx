import React from "react";
import formio from "../../../public/formio.png";
import linkbio from "../../../public/linkbio.png";
import indeed from "../../../public/indeed.png";
import ai_translator from "../../../public/ai_translator.png";
import nft_shop from "../../../public/nft_shop.png";
import portfoliobio from "../../../public/portfoliobio.png";
import "../../styles/projects.css";

const Projects = () => {
  const projects = [
    {
      name: "LINKBIO",
      description:
        "Personal linkbio website showcasing all links with analytics and custom themes",
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
      content: "💡 Currently obsessed with building seamless user experiences",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
      size: "small",
    },
    {
      name: "INDEED",
      description:
        "Job search platform clone with custom filtering and real-time search",
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
      content: "🚀 50+ Projects Completed\n3+ Years of Coding",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      size: "small",
    },
    {
      name: "FORMIO",
      description:
        "Dynamic form builder with drag-and-drop interface and validation",
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
      content: '"Code is poetry written in logic" ✨',
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      size: "small",
    },
    {
      name: "AI TRANSLATOR",
      description:
        "Intelligent chatbot with natural language processing and machine learning",
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
      content:
        "💻 Pro Tip:\nAlways comment your code - your future self will thank you!",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      size: "small",
    },
    {
      name: "PORTFOLIOBIO",
      description:
        "Real-time weather app with beautiful animations and forecasts",
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
      content:
        "🎯 Let's build something amazing together!\nAlways open to new opportunities",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      size: "small",
    },
    {
      name: "NFT SHOP",
      description:
        "Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard",
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
            <h1 className="projects-title">My Projects</h1>
            <p className="projects-subtitle">
              Crafted with passion and precision
            </p>
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
                        View Project →
                      </a>
                      <a
                        href={item.info}
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Project Details →
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
