import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../styles/blogsSection.css";
import useTranslationStore from "../../store/store";

// Import sample blog data (top 3)
const blogData = [
  {
    id: 1,
    title: "Dockerize a react app",
    tags: ["docker", "react", "javascript", "devops"],
    date: "2025-02-28",
    image:
      "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    title: "BunnyCDN, Faster and cheaper than AWS Cloudfront",
    tags: ["cdn", "devops", "cache", "backend"],
    date: "2025-02-20",
    image: "https://cloud2data.com/wp-content/uploads/2023/05/Kubernetes.png",
  },
  {
    id: 3,
    title: "Kubernetes Errors",
    tags: ["kubernetes", "docker", "debugging"],
    date: "2025-02-15",
    image: "https://cloud2data.com/wp-content/uploads/2023/05/Kubernetes.png",
  },
];

const BlogsSection = () => {
  const { t } = useTranslationStore();

  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="blogsSection">
      <div className="container">
        <div className="blogsSectionTop">
          <h1 className="blogsHeading">{t("blogs_section_heading")}</h1>
          <div className="blogs-intro">Explore the latest tech articles and insights</div>
        </div>
        
        <motion.div
          className="blogsSectionContainer"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {blogData.map((blog) => (
            <motion.div
              key={blog.id}
              className="blog-card"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <div className="blog-card-image-container">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-card-image"
                />
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">{blog.title}</h3>
                <div className="blog-card-tags">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="blog-card-tag">
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 3 && (
                    <span className="blog-card-tag-more">
                      +{blog.tags.length - 3}
                    </span>
                  )}
                </div>
                <div className="blog-card-date">{formatDate(blog.date)}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>

      <style jsx>{`
        .blogsSection {
          background: linear-gradient(
            to bottom,
            #000000 0%,
            rgba(0, 0, 0, 0.95) 70%,
            rgba(13, 21, 28, 0.9) 100%
          );
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.8);
        }

        .blogsSection::before {
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

        .blogsSection::after {
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
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          position: relative;
          z-index: 1;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(97, 218, 251, 0.1);
        }

        .blogsSectionTop {
          padding: 20px;
          text-align: center;
          margin-bottom: 20px;
          position: relative;
          gap:20px;
          z-index: 1;
        }

        .blogsHeading {
          color: #61dafb;
          font-size: 2.5rem;
          letter-spacing: 2px;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 15px rgba(97, 218, 251, 0.4);
          font-weight: 600;
          margin: 0;
          background: linear-gradient(to right, #61dafb, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .blogsHeading::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
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

        .blogs-intro {
          font-size: 1.2rem;
          color: #aaa;
          margin-top: 15px;
          letter-spacing: 1px;
          font-weight: 300;
        }

        .blogsSectionContainer {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
          width: 100%;
          z-index: 1;
        }

        .blog-card {
          background-color: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(97, 218, 251, 0.15);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35),
            0 0 15px rgba(97, 218, 251, 0.1);
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          border-color: rgba(97, 218, 251, 0.3);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4), 
            0 0 20px rgba(97, 218, 251, 0.2);
          transform: translateY(-5px);
        }

        .blog-card::before {
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
          border-radius: 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .blog-card:hover::before {
          opacity: 1;
        }

        .blog-card-image-container {
          width: 100%;
          height: 180px;
          overflow: hidden;
          position: relative;
        }

        .blog-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-card-image {
          transform: scale(1.05);
        }

        .blog-card-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .blog-card-title {
          font-size: 1.2rem;
          color: #ffffff;
          margin: 0 0 15px 0;
          font-weight: 600;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .blog-card:hover .blog-card-title {
          color: #61dafb;
        }

        .blog-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }

        .blog-card-tag {
          background: rgba(97, 218, 251, 0.1);
          color: #61dafb;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(97, 218, 251, 0.2);
          transition: all 0.3s ease;
        }

        .blog-card:hover .blog-card-tag {
          background: rgba(97, 218, 251, 0.15);
          border-color: rgba(97, 218, 251, 0.3);
        }

        .blog-card-tag-more {
          background: rgba(161, 57, 255, 0.1);
          color: #a139ff;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(161, 57, 255, 0.2);
        }

        .blog-card-date {
          color: #aaa;
          font-size: 0.9rem;
          margin-top: auto;
          padding-top: 15px;
          border-top: 1px solid rgba(97, 218, 251, 0.1);
        }

        /* More link styles */
        .more-link-container {
          margin-top: 30px;
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .more-link {
          display: inline-block;
          font-size: 1.4rem;
          color: #61dafb;
          text-decoration: none;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 500;
          padding: 12px 30px;
          border: 1px solid rgba(97, 218, 251, 0.3);
          border-radius: 30px;
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(5px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(97, 218, 251, 0.15);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .more-link:hover {
          background: rgba(17, 17, 17, 0.8);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(97, 218, 251, 0.25);
          transform: translateY(-2px);
          color: #ffffff;
          border-color: rgba(97, 218, 251, 0.5);
        }

        .more-link span {
          position: relative;
          z-index: 2;
        }

        .cosmic-trail {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(97, 218, 251, 0.1), rgba(97, 218, 251, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
          pointer-events: none;
        }

        .more-link:hover .cosmic-trail {
          transform: translateX(100%);
        }

        .more-link:after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #61dafb, transparent);
          transition: all 0.3s ease;
        }

        /* Responsive styles - tablet */
        @media screen and (max-width: 768px) {
          .blogsSectionContainer {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
          }

          .blogsHeading {
            font-size: 2.2rem;
          }
          
          .container {
            padding: 1.5rem;
          }
        }

        /* Responsive styles - mobile */
        @media screen and (max-width: 480px) {
          .blogsSectionContainer {
            grid-template-columns: 1fr;
          }

          .blogsHeading {
            font-size: 1.8rem;
            letter-spacing: 1px;
          }

          .blogsSection {
            padding: 40px 15px;
          }
          
          .more-link {
            font-size: 1.2rem;
            padding: 10px 25px;
          }
          
          .container {
            padding: 1rem;
            gap: 2rem;
          }
        }

        /* Very small devices */
        @media screen and (max-width: 320px) {
          .blog-card-title {
            font-size: 1.1rem;
          }

          .blogsHeading {
            font-size: 1.6rem;
          }

          .more-link {
            font-size: 1.1rem;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogsSection;