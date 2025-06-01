import React from "react";
import formio from "../../../public/formio.png";
import linkbio from "../../../public/linkbio.png";
import indeed from "../../../public/indeed.png";
import ai_translator from "../../../public/ai_translator.png";
import nft_shop from "../../../public/nft_shop.png";
import portfoliobio from "../../../public/portfoliobio.png";

const Projects = () => {
  const projects = [
    {
      name: "LINKBIO",
      description: "Personal linkbio website showcasing all links with analytics and custom themes",
      liveUrl: "https://linkbio-console.vercel.app",
      image: linkbio,
      tags: ["React", "Node.js", "Analytics"],
      size: "large",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      type: "project"
    },
    {
      type: "filler",
      content: "💡 Currently obsessed with building seamless user experiences",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
      size: "small"
    },
    {
      name: "INDEED",
      description: "Job search platform clone with custom filtering and real-time search",
      liveUrl: "https://indeed-console.vercel.app",
      image: indeed,
      tags: ["React", "API", "Search"],
      size: "medium",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      type: "project"
    },
    {
      type: "filler",
      content: "🚀 50+ Projects Completed\n3+ Years of Coding",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      size: "small"
    },
    {
      name: "FORMIO",
      description: "Dynamic form builder with drag-and-drop interface and validation",
      liveUrl: "https://linkbio-console.vercel.app",
      image: formio,
      tags: ["Forms", "Builder", "Validation"],
      size: "medium",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      type: "project"
    },
    {
      type: "filler",
      content: "\"Code is poetry written in logic\" ✨",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      size: "small"
    },
    {
      name: "AI TRANSLATOR",
      description: "Intelligent chatbot with natural language processing and machine learning",
      liveUrl: "#",
      image: ai_translator,
      tags: ["AI", "NLP", "Python"],
      size: "large",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      type: "project"
    },
    {
      type: "filler",
      content: "💻 Pro Tip:\nAlways comment your code - your future self will thank you!",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      size: "small"
    },
    {
      name: "PORTFOLIOBIO",
      description: "Real-time weather app with beautiful animations and forecasts",
      liveUrl: "#",
      image: portfoliobio,
      tags: ["API", "Weather", "Charts"],
      size: "small",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      type: "project"
    },
    {
      type: "filler",
      content: "🎯 Let's build something amazing together!\nAlways open to new opportunities",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      size: "small"
    },
    {
      name: "NFT SHOP",
      description: "Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard",
      liveUrl: "#",
      image: nft_shop,
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      size: "medium",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      type: "project"
    }
  ];

  return (
    <>
      <style jsx>{`
        .projects {
          background: linear-gradient(
            to bottom,
            #000000 0%,
            rgba(0, 0, 0, 0.95) 70%,
            rgba(13, 21, 28, 0.9) 100%
          );
          min-height: 100vh;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
        }

        .projects::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(97, 218, 251, 0.1);
          filter: blur(120px);
          z-index: 0;
        }

        .projects::after {
          content: "";
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: rgba(97, 218, 251, 0.08);
          filter: blur(100px);
          z-index: 0;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .projects-title {
          color: #61dafb;
          font-size: 3rem;
          letter-spacing: 2px;
          font-weight: 600;
          margin: 0;
          background: linear-gradient(to right, #61dafb, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 15px rgba(97, 218, 251, 0.4);
        }

        .projects-title::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 3px;
          background: linear-gradient(
            to right,
            rgba(97, 218, 251, 0.3),
            #61dafb,
            rgba(97, 218, 251, 0.3)
          );
          border-radius: 3px;
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.6);
        }

        .projects-subtitle {
          font-size: 1.2rem;
          color: #aaa;
          margin-top: 20px;
          letter-spacing: 1px;
          font-weight: 300;
        }

        .projects-masonry {
          columns: 3;
          column-gap: 30px;
          margin: 0 auto;
        }

        .project-card {
          break-inside: avoid;
          margin-bottom: 30px;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(97, 218, 251, 0.15);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35),
            0 0 15px rgba(97, 218, 251, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(5px);
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(97, 218, 251, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 
            0 0 25px rgba(97, 218, 251, 0.2);
        }

        .project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(97, 218, 251, 0.05),
            transparent
          );
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-header {
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .project-large .project-header {
          height: 300px;
        }

        .project-small .project-header {
          height: 150px;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
          z-index: 2;
        }

        .project-content {
          padding: 25px;
          position: relative;
          z-index: 3;
        }

        .project-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin: 0 0 15px 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .project-large .project-name {
          font-size: 2.2rem;
        }

        .project-description {
          font-size: 1rem;
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .project-tag {
          background: rgba(97, 218, 251, 0.1);
          color: #61dafb;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(97, 218, 251, 0.2);
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(97, 218, 251, 0.1);
          color: #61dafb;
          padding: 10px 20px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          border: 1px solid rgba(97, 218, 251, 0.2);
          transition: all 0.3s ease;
        }

        .filler-card {
          break-inside: avoid;
          margin-bottom: 30px;
          border-radius: 20px;
          padding: 25px;
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(97, 218, 251, 0.15);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35),
            0 0 15px rgba(97, 218, 251, 0.1);
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 120px;
        }

        .filler-card:hover {
          transform: translateY(-5px);
          border-color: rgba(97, 218, 251, 0.3);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4), 
            0 0 20px rgba(97, 218, 251, 0.2);
        }

        .filler-content {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          line-height: 1.5;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
          white-space: pre-line;
          z-index: 2;
          position: relative;
        }

        .project-link:hover {
          background: rgba(97, 218, 251, 0.2);
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(97, 218, 251, 0.2);
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .projects-masonry {
            columns: 2;
            column-gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .projects-masonry {
            columns: 1;
            column-gap: 0;
          }

          .projects-title {
            font-size: 2.5rem;
          }

          .projects {
            padding: 40px 15px;
          }

          .project-card {
            margin-bottom: 25px;
          }

          .project-content {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .projects-title {
            font-size: 2rem;
          }

          .project-name {
            font-size: 1.5rem;
          }

          .project-large .project-name {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <div className="projects">
        <div className="container">
          <div className="projects-header">
            <h1 className="projects-title">My Projects</h1>
            <p className="projects-subtitle">Crafted with passion and precision</p>
          </div>

          <div className="projects-masonry">
            {projects.map((item, index) => (
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
                  onClick={() => window.open(item.liveUrl, '_blank')}
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
                    
                    <a 
                      href={item.liveUrl} 
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;