import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";
import { motion } from "framer-motion";

const Blog = () => {
  const navigate = useNavigate();

  // Similar blog data
  const similarBlogs = [
    {
      id: 1,
      title: "Microservices Architecture: Benefits and Challenges",
      tags: ["microservices", "architecture", "devops"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      title: "DevOps Fundamentals: Bridging Development and Operations",
      tags: ["devops", "ci-cd", "automation"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      title: "Building Robust Backends with Node.js and Express",
      tags: ["node", "express", "backend"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
  ];

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
      },
    },
  };

  return (
    <div className="blogWrapper">
      <div className="container">
        <article className="blog-post">
          <nav className="blog-navigation">
            <button onClick={() => navigate(-1)} className="blog-back-button">
              <FaArrowLeft /> Back to blogs
            </button>
          </nav>

          <motion.header 
            className="blog-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="blog-title">
              How to Dockerize a React.js Application
            </h1>
            <p className="blog-description">
              A step-by-step guide to containerizing your React applications for
              consistent deployment across any environment
            </p>
            <div className="blog-meta">
              <span className="blog-timestamp">March 2, 2025</span>
              <span className="blog-category">DevOps</span>
              <span className="blog-reading-time">10 min read</span>
            </div>
          </motion.header>

          <motion.div 
            className="blog-featured-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img
              src="https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0"
              alt="Code on screen - Dockerizing React application"
              className="blog-featured-image"
            />
          </motion.div>

          <motion.div 
            className="blog-content"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <motion.p variants={itemVariants}>
              Containerizing React applications with Docker offers numerous
              benefits including consistent development environments, simplified
              deployment processes, and isolation from system dependencies. In
              this guide, we'll walk through the complete process of setting up
              Docker for a React application built with Create React App.
            </motion.p>

            <motion.h2 variants={itemVariants}>Prerequisites</motion.h2>

            <motion.p variants={itemVariants}>
              Before we begin, make sure you have the following installed on your
              system:
            </motion.p>

            <motion.ul variants={itemVariants}>
              <li>Node.js and npm (for local development)</li>
              <li>
                Docker (Docker Desktop for Windows/Mac or Docker Engine for Linux)
              </li>
              <li>
                A React application (we'll use Create React App in this tutorial)
              </li>
            </motion.ul>

            <motion.h2 variants={itemVariants}>Step 1: Create a Dockerfile</motion.h2>

            <motion.p variants={itemVariants}>
              First, we need to create a Dockerfile in the root of your React
              project. This file contains instructions for Docker on how to build
              your application container.
            </motion.p>

            <motion.div className="code-block" variants={itemVariants}>
              <pre>
                <code>{`# Use official Node.js image as base
FROM node:16-alpine as build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Production environment
FROM nginx:stable-alpine

# Copy built files from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
`}</code>
              </pre>
            </motion.div>

            {/* Remaining content would continue here */}
          </motion.div>

          <div className="blog-author">
            <div className="blog-author-image">
              <img src="https://via.placeholder.com/60" alt="Author" />
            </div>
            <div className="blog-author-info">
              <h3>Miguel Marco Ramcharan</h3>
              <p>Fullstack Developer based in Durban, South Africa</p>
            </div>
          </div>

          <footer className="blog-footer">
            <div className="blog-tags">
              <span>React</span>
              <span>Docker</span>
              <span>DevOps</span>
              <span>Frontend</span>
              <span>Deployment</span>
            </div>
            <div className="blog-actions">
              <button className="blog-action-button">
                <FaBookmark /> Save
              </button>
              <button className="blog-action-button">
                <FaShare /> Share
              </button>
            </div>
          </footer>
        </article>

        {/* Similar Blogs Section */}
        <section className="similar-blogs-section">
          <h2 className="similar-blogs-title">Similar Articles</h2>
          <motion.div 
            className="similar-blogs-container"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            {similarBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                className="similar-blog-card"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                <div className="similar-blog-image-container">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="similar-blog-image"
                  />
                </div>
                <div className="similar-blog-content">
                  <h3 className="similar-blog-title">{blog.title}</h3>
                  <div className="similar-blog-tags">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="similar-blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      <style jsx>{`
        .blogWrapper {
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
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.8);
        }

        .blogWrapper::before {
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

        .blogWrapper::after {
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
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(97, 218, 251, 0.1);
        }

        .blog-post {
          max-width: 800px;
          margin: 0 auto;
          color: #e0e0e0;
        }

        .blog-navigation {
          margin-bottom: 30px;
        }

        .blog-back-button {
          background: none;
          border: none;
          color: #aaa;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 8px 15px;
          border-radius: 20px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .blog-back-button:hover {
          color: #61dafb;
          background: rgba(97, 218, 251, 0.05);
          border-color: rgba(97, 218, 251, 0.2);
        }

        .blog-header {
          margin-bottom: 40px;
          text-align: center;
        }

        .blog-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 16px;
          background: linear-gradient(to right, #61dafb, #ffffff);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }
        
        .blog-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
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

        .blog-description {
          font-size: 1.2rem;
          line-height: 1.5;
          max-width: 700px;
          margin: 20px auto 24px;
          color: #aaa;
        }

        .blog-meta {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          font-size: 0.9rem;
          color: #777;
          flex-wrap: wrap;
        }

        .blog-category,
        .blog-reading-time {
          background: rgba(97, 218, 251, 0.1);
          padding: 4px 12px;
          border-radius: 20px;
          color: #61dafb;
          border: 1px solid rgba(97, 218, 251, 0.2);
        }

        .blog-featured-image-container {
          margin: 40px 0;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(97, 218, 251, 0.1);
          border: 1px solid rgba(97, 218, 251, 0.15);
        }

        .blog-featured-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .blog-featured-image:hover {
          transform: scale(1.02);
        }

        .blog-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #ddd;
        }

        .blog-content p {
          margin-bottom: 24px;
        }

        .blog-content h2 {
          font-size: 1.8rem;
          font-weight: 600;
          margin: 40px 0 20px;
          color: #61dafb;
          position: relative;
          display: inline-block;
        }
        
        .blog-content h2::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 40px;
          height: 2px;
          background: #61dafb;
          border-radius: 2px;
        }

        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 30px 0 16px;
          color: #ffffff;
        }

        .blog-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 25px 0 14px;
          color: #ffffff;
        }

        .blog-content ul,
        .blog-content ol {
          margin-bottom: 24px;
          padding-left: 20px;
        }

        .blog-content li {
          margin-bottom: 12px;
        }
        
        .blog-content strong {
          color: #fff;
          font-weight: 600;
        }
        
        blockquote {
          border-left: 4px solid rgba(97, 218, 251, 0.3);
          padding: 15px 20px;
          margin: 30px 0;
          background: rgba(97, 218, 251, 0.05);
          color: #ddd;
          border-radius: 0 8px 8px 0;
        }

        .code-block {
          background-color: rgba(10, 10, 10, 0.8);
          border-radius: 10px;
          padding: 20px;
          margin: 25px 0;
          overflow-x: auto;
          border: 1px solid rgba(97, 218, 251, 0.15);
        }

        .code-block pre {
          margin: 0;
          width: 100%;
        }

        .code-block code {
          font-family: "Fira Code", monospace;
          font-size: 0.9rem;
          color: #e0e0e0;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .blog-author {
          display: flex;
          align-items: center;
          gap: 15px;
          margin: 60px 0 30px;
          padding: 20px;
          background-color: rgba(10, 10, 10, 0.6);
          border-radius: 15px;
          border: 1px solid rgba(97, 218, 251, 0.15);
        }

        .blog-author-image img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(97, 218, 251, 0.2);
        }

        .blog-author-info h3 {
          margin: 0 0 5px 0;
          font-size: 1.1rem;
          color: #fff;
        }

        .blog-author-info p {
          margin: 0;
          font-size: 0.9rem;
          color: #aaa;
        }

        .blog-footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid rgba(97, 218, 251, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .blog-tags span {
          background: rgba(97, 218, 251, 0.1);
          color: #61dafb;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          border: 1px solid rgba(97, 218, 251, 0.2);
          transition: all 0.3s ease;
        }
        
        .blog-tags span:hover {
          background: rgba(97, 218, 251, 0.15);
          border-color: rgba(97, 218, 251, 0.3);
          transform: translateY(-2px);
        }

        .blog-actions {
          display: flex;
          gap: 12px;
        }

        .blog-action-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(10, 10, 10, 0.6);
          color: #61dafb;
          border: 1px solid rgba(97, 218, 251, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .blog-action-button:hover {
          background: rgba(97, 218, 251, 0.1);
          border-color: rgba(97, 218, 251, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2), 0 0 10px rgba(97, 218, 251, 0.1);
        }

        /* Similar Blogs Section */
        .similar-blogs-section {
          max-width: 1000px;
          margin: 60px auto 0;
          padding-top: 40px;
          border-top: 1px solid rgba(97, 218, 251, 0.1);
        }

        .similar-blogs-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 40px;
          color: #61dafb;
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .similar-blogs-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(
            to right,
            rgba(97, 218, 251, 0.3),
            #61dafb,
            rgba(97, 218, 251, 0.3)
          );
          border-radius: 3px;
        }

        .similar-blogs-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .similar-blog-card {
          background-color: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(97, 218, 251, 0.15);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35),
            0 0 15px rgba(97, 218, 251, 0.1);
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          height: 100%;
        }

        .similar-blog-card:hover {
          border-color: rgba(97, 218, 251, 0.3);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4), 
            0 0 20px rgba(97, 218, 251, 0.2);
          transform: translateY(-5px);
        }

        .similar-blog-card::before {
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

        .similar-blog-card:hover::before {
          opacity: 1;
        }

        .similar-blog-image-container {
          width: 100%;
          height: 160px;
          overflow: hidden;
          position: relative;
        }

        .similar-blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .similar-blog-card:hover .similar-blog-image {
          transform: scale(1.05);
        }

        .similar-blog-content {
          padding: 20px;
        }

        .similar-blog-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          margin: 0 0 15px 0;
          line-height: 1.4;
          transition: color 0.3s ease;
        }
        
        .similar-blog-card:hover .similar-blog-title {
          color: #61dafb;
        }

        .similar-blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .similar-blog-tag {
          background: rgba(97, 218, 251, 0.1);
          color: #61dafb;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(97, 218, 251, 0.2);
          transition: all 0.3s ease;
        }
        
        .similar-blog-card:hover .similar-blog-tag {
          background: rgba(97, 218, 251, 0.15);
          border-color: rgba(97, 218, 251, 0.3);
        }

        /* Medium screens */
        @media screen and (max-width: 992px) {
          .similar-blogs-container {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .blog-title {
            font-size: 2.2rem;
          }
          
          .blog-content h2 {
            font-size: 1.6rem;
          }
        }

        /* Small screens (tablets) */
        @media screen and (max-width: 768px) {
          .blogWrapper {
            padding: 30px 15px;
          }
          
          .container {
            padding: 1.5rem;
          }
          
          .blog-title {
            font-size: 2rem;
          }

          .blog-description {
            font-size: 1.1rem;
          }

          .blog-content {
            font-size: 1rem;
          }

          .blog-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          
          .blog-tags {
            width: 100%;
          }
          
          .blog-actions {
            width: 100%;
            justify-content: flex-start;
          }
          
          .similar-blogs-container {
            gap: 20px;
          }
          
          .blog-meta {
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
          }
          
          .similar-blogs-title {
            font-size: 1.8rem;
          }
          
          .blog-author {
            flex-direction: column;
            text-align: center;
            align-items: center;
            gap: 10px;
          }
        }

        /* Mobile devices */
        @media screen and (max-width: 576px) {
          .blogWrapper {
            padding: 20px 10px;
          }
          
          .container {
            padding: 1rem;
            border-radius: 15px;
          }
          
          .blog-post {
            padding: 0;
          }
          
          .blog-title {
            font-size: 1.7rem;
            letter-spacing: 0.5px;
          }
          
          .blog-title::after {
            width: 60px;
          }
          
          .blog-meta {
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
            width: 100%;
          }
          
          .blog-category, 
          .blog-reading-time,
          .blog-timestamp {
            width: fit-content;
            margin: 0 auto;
          }
          
          .similar-blogs-container {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .blog-content h2 {
            font-size: 1.4rem;
            display: block;
            width: 100%;
          }
          
          .blog-content h3 {
            font-size: 1.3rem;
          }
          
          .blog-content p,
          .blog-content li {
            font-size: 0.95rem;
          }
          
          .code-block {
            padding: 12px;
            margin: 20px 0;
            border-radius: 8px;
          }
          
          .code-block code {
            font-size: 0.8rem;
          }
          
          .blog-action-button {
            padding: 8px 12px;
            font-size: 0.8rem;
          }
          
          .blog-tags span {
            padding: 4px 10px;
            font-size: 0.75rem;
          }
          
          .similar-blog-card {
            border-radius: 10px;
          }
          
          .similar-blog-image-container {
            height: 140px;
          }
          
          .similar-blog-content {
            padding: 15px;
          }
          
          .similar-blog-title {
            font-size: 1rem;
            margin-bottom: 10px;
          }
          
          .similar-blog-tag {
            padding: 3px 8px;
            font-size: 0.7rem;
          }
          
          .similar-blogs-title {
            font-size: 1.6rem;
            margin-bottom: 20px;
          }
        }

        /* Very small devices */
        @media screen and (max-width: 375px) {
          .blogWrapper {
            padding: 15px 5px;
          }
          
          .container {
            padding: 12px;
          }
          
          .blog-title {
            font-size: 1.5rem;
          }
          
          .blog-description {
            font-size: 0.95rem;
          }
          
          .blog-featured-image-container {
            margin: 20px 0;
            border-radius: 10px;
          }
          
          .blog-content h2 {
            font-size: 1.3rem;
            margin: 30px 0 15px;
          }
          
          .blog-navigation {
            margin-bottom: 20px;
          }
          
          .blog-back-button {
            font-size: 0.8rem;
            padding: 6px 10px;
          }
          
          .blog-author-image img {
            width: 50px;
            height: 50px;
          }
          
          .blog-author-info h3 {
            font-size: 1rem;
          }
          
          .blog-author-info p {
            font-size: 0.8rem;
          }
          
          .blog-action-button {
            width: 100%;
            justify-content: center;
          }
          
          .blog-actions {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;