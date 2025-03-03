import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";

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

  return (
    <div className="blog-container">
      <article className="blog-post">
        <nav className="blog-navigation">
          <button onClick={() => navigate(-1)} className="blog-back-button">
            <FaArrowLeft /> Back to blogs
          </button>
        </nav>

        <header className="blog-header">
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
        </header>

        <div className="blog-featured-image-container">
          <img
            src="https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0"
            alt="Code on screen - Dockerizing React application"
            className="blog-featured-image"
          />
        </div>

        <div className="blog-content">
          <p>
            Containerizing React applications with Docker offers numerous
            benefits including consistent development environments, simplified
            deployment processes, and isolation from system dependencies. In
            this guide, we'll walk through the complete process of setting up
            Docker for a React application built with Create React App.
          </p>

          <h2>Prerequisites</h2>

          <p>
            Before we begin, make sure you have the following installed on your
            system:
          </p>

          <ul>
            <li>Node.js and npm (for local development)</li>
            <li>
              Docker (Docker Desktop for Windows/Mac or Docker Engine for Linux)
            </li>
            <li>
              A React application (we'll use Create React App in this tutorial)
            </li>
          </ul>

          <h2>Step 1: Create a Dockerfile</h2>

          <p>
            First, we need to create a Dockerfile in the root of your React
            project. This file contains instructions for Docker on how to build
            your application container.
          </p>

          <div className="code-block">
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
          </div>

          <p>
            This Dockerfile uses a multi-stage build approach, which is a best
            practice for creating optimized Docker images:
          </p>

          <ol>
            <li>
              The first stage uses a Node.js image to build the React
              application
            </li>
            <li>
              The second stage uses a lightweight Nginx image to serve the
              static files
            </li>
            <li>
              Only the built files are copied to the final image, keeping it
              small and efficient
            </li>
          </ol>

          <h2>Step 2: Create .dockerignore File</h2>

          <p>
            Next, create a .dockerignore file to prevent unnecessary files from
            being copied into your Docker image:
          </p>

          <div className="code-block">
            <pre>
              <code>{`node_modules
npm-debug.log
build
.git
.github
.gitignore
README.md
docker-compose.yml
Dockerfile
.dockerignore`}</code>
            </pre>
          </div>

          <blockquote>
            Using a .dockerignore file helps keep your Docker images smaller and
            builds faster by excluding files that aren't needed in the
            container.
          </blockquote>

          <h2>Step 3: Build Your Docker Image</h2>

          <p>
            Now that we have our Dockerfile and .dockerignore set up, we can
            build the Docker image. Open a terminal in your project directory
            and run:
          </p>

          <div className="code-block">
            <pre>
              <code>{`docker build -t react-app .`}</code>
            </pre>
          </div>

          <p>
            This command builds a Docker image tagged as 'react-app' based on
            the instructions in your Dockerfile. The '.' at the end tells Docker
            to look for the Dockerfile in the current directory.
          </p>

          <h2>Step 4: Run Your Containerized React App</h2>

          <p>
            Once the build process is complete, you can run your containerized
            React application with:
          </p>

          <div className="code-block">
            <pre>
              <code>{`docker run -p 3000:80 --name react-container react-app`}</code>
            </pre>
          </div>

          <p>
            This command runs your Docker image as a container named
            'react-container' and maps port 3000 on your host machine to port 80
            in the container. You can now access your React application by
            navigating to http://localhost:3000 in your browser.
          </p>

          <h2>Step 5: Development Environment with Docker Compose</h2>

          <p>
            For a development environment with hot-reloading, create a
            docker-compose.yml file:
          </p>

          <div className="code-block">
            <pre>
              <code>{`version: '3'
services:
  react-app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - ./src:/app/src
    environment:
      - CHOKIDAR_USEPOLLING=true`}</code>
            </pre>
          </div>

          <p>
            And create a development-specific Dockerfile named Dockerfile.dev:
          </p>

          <div className="code-block">
            <pre>
              <code>{`FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`}</code>
            </pre>
          </div>

          <p>Start your development environment with:</p>

          <div className="code-block">
            <pre>
              <code>{`docker-compose up`}</code>
            </pre>
          </div>

          <h2>Advanced Configuration: Environment Variables</h2>

          <p>
            To use environment variables in your React application, you can
            create a .env file and pass it to your container:
          </p>

          <div className="code-block">
            <pre>
              <code>{`docker run -p 3000:80 --env-file .env react-app`}</code>
            </pre>
          </div>

          <p>
            Remember that for Create React App, only variables prefixed with
            REACT_APP_ will be accessible in your application.
          </p>

          <h2>Conclusion</h2>

          <p>
            Dockerizing your React application provides consistency across
            development, testing, and production environments. It eliminates "it
            works on my machine" problems and simplifies deployment to any
            infrastructure that supports Docker.
          </p>

          <p>
            With the multi-stage build approach, you can keep your production
            images small while still having all the tools you need for
            development. This containerization strategy works well with CI/CD
            pipelines and modern cloud deployment services.
          </p>
        </div>

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
        <div className="similar-blogs-container">
          {similarBlogs.map((blog) => (
            <div
              key={blog.id}
              className="similar-blog-card"
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
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .blog-container {
          background-color: #000;
          color: #e0e0e0;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          padding: 0;
          min-height: 100vh;
        }

        .blog-post {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px 20px;
        }

        .blog-navigation {
          margin-bottom: 30px;
          z-index: 399;
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
          padding: 0;
          transition: color 0.2s ease;
        }

        .blog-back-button:hover {
          color: #fff;
        }

        .blog-header {
          margin-bottom: 40px;
          text-align: center;
        }

        .blog-title {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 16px;
          background: linear-gradient(90deg, #ffffff, #cccccc);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .blog-description {
          font-size: 1.2rem;
          line-height: 1.5;
          max-width: 700px;
          margin: 0 auto 24px;
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
          background-color: #222;
          padding: 4px 12px;
          border-radius: 20px;
        }

        .blog-featured-image-container {
          margin: 30px 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .blog-featured-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }

        .blog-featured-image:hover {
          transform: scale(1.02);
        }

        .blog-content {
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .blog-content p {
          margin-bottom: 24px;
        }

        .blog-content h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 40px 0 20px;
          color: #ffffff;
        }

        .blog-content ul,
        .blog-content ol {
          margin-bottom: 24px;
          padding-left: 20px;
        }

        .blog-content li {
          margin-bottom: 8px;
        }

        blockquote {
          border-left: 4px solid #444444;
          padding-left: 20px;
          margin: 30px 0;
          font-style: italic;
          color: #bbb;
        }

        .code-block {
          background-color: #121212;
          border-radius: 8px;
          padding: 20px;
          margin: 25px 0;
          overflow-x: auto;
        }

        .code-block pre {
          margin: 0;
        }

        .code-block code {
          font-family: "Fira Code", monospace;
          font-size: 0.9rem;
          color: #cccccc;
        }

        .blog-author {
          display: flex;
          align-items: center;
          gap: 15px;
          margin: 50px 0 30px;
          padding: 20px;
          background-color: #111;
          border-radius: 8px;
        }

        .blog-author-image img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
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
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #222;
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
          background-color: #1a1a1a;
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
        }

        .blog-actions {
          display: flex;
          gap: 12px;
        }

        .blog-action-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: #222;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .blog-action-button:hover {
          background-color: #333;
        }

        /* Similar Blogs Section */
        .similar-blogs-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .similar-blogs-title {
          text-align: center;
          font-size: 2rem;
          color: #fff;
          margin-bottom: 40px;
        }

        .similar-blogs-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }

        .similar-blog-card {
          background-color: #111;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .similar-blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .similar-blog-image-container {
          width: 100%;
          height: 160px;
          overflow: hidden;
        }

        .similar-blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
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
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .similar-blog-tags {
          display: flex;
          gap: 8px;
        }

        .similar-blog-tag {
          font-size: 0.8rem;
          padding: 4px 8px;
          border-radius: 4px;
          background-color: #222;
          color: #aaa;
        }

        @media (max-width: 768px) {
          .blog-post {
            padding: 30px 15px;
          }

          .blog-title {
            font-size: 2.2rem;
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
          }

          .similar-blogs-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
