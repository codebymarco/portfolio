import React, { useState } from "react";

const NavigationSection = () => {
  const navData = [
    {
      id: 1,
      title: "Apps",
      tags: ["react", "javascript", "web apps", "projects"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Blogs",
      tags: ["tech", "tutorials", "insights", "coding"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d0?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Games",
      tags: ["unity", "javascript", "interactive", "fun"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    },
  ];

  return (
    <>
      <style jsx>{`
        .navigationSection {
          background-image: radial-gradient(circle at 50% 30%, #111111 0%, #000000 70%);
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 20px;
        }

        .navigationSectionTop {
          padding: 20px;
          text-align: center;
          color: white;
          font-size: 1rem;
          display: flex;
          justify-content: center;
          width: 100%;
          position: relative;
          margin-bottom: 20px;
        }

        .navigationSectionTop h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .navigationHeading {
          font-size: 3rem;
          letter-spacing: 8px;
          position: relative;
          display: inline-block;
          color: white;
          font-weight: 800;
          margin: 0;
        }

        .navigationSectionContainer {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          width: 100%;
          max-width: 1200px;
        }

        .nav-card {
          background-color: #111;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .nav-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .nav-card-image-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .nav-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .nav-card:hover .nav-card-image {
          transform: scale(1.05);
        }

        .nav-card-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .nav-card-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .nav-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
          margin-top: auto;
        }

        .nav-card-tag {
          font-size: 0.8rem;
          padding: 4px 8px;
          border-radius: 4px;
          background-color: #222;
          color: #aaa;
        }

        /* Responsive styles */
        @media screen and (max-width: 992px) {
          .navigationSectionContainer {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media screen and (max-width: 768px) {
          .navigationSectionContainer {
            grid-template-columns: 1fr;
            gap: 25px;
            max-width: 500px;
            padding: 0 15px;
          }

          .navigationSectionTop {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
          }

          .navigationSectionTop h1 {
            font-size: 2rem;
          }
        }

        @media screen and (max-width: 400px) {
          .navigationSection {
            padding: 15px 20px;
            gap: 15px;
          }

          .navigationSectionContainer {
            padding: 0 10px;
            width: 90%;
          }
        }
      `}</style>

      <div className="navigationSection">
        <div className="navigationSectionTop">
          <h1 className="navigationHeading">EXPLORE</h1>
        </div>
        
        <div className="navigationSectionContainer">
          {navData.map((item) => (
            <div
              key={item.id}
              className="nav-card"
              onClick={() => window.location.href = `/${item.title.toLowerCase()}`}
            >
              <div className="nav-card-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="nav-card-image"
                />
              </div>
              <div className="nav-card-content">
                <h3 className="nav-card-title">{item.title}</h3>
                <div className="nav-card-tags">
                  {item.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="nav-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavigationSection;