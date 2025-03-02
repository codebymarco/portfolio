import React from "react";

const Blog = () => {
  return (
    <div className="blog-container">
      <article className="blog-post">
        <header className="blog-header">
          <h1 className="blog-title">How to Dockerize a React.js Application</h1>
          <p className="blog-description">
            A step-by-step guide to containerizing your React applications for consistent deployment across any environment
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">March 2, 2025</span>
            <span className="blog-category">DevOps</span>
          </div>
        </header>

        <div className="blog-featured-image-container">
          <img
            src="https://images4.alphacoders.com/262/thumb-1920-262196.jpg"
            alt="Docker and React logos"
            className="blog-featured-image"
          />
        </div>

        <div className="blog-content">
          <p>
            Containerizing React applications with Docker offers numerous benefits including consistent development environments, 
            simplified deployment processes, and isolation from system dependencies. In this guide, we'll walk through the complete process 
            of setting up Docker for a React application built with Create React App.
          </p>

          <h2>Prerequisites</h2>
          
          <p>
            Before we begin, make sure you have the following installed on your system:
          </p>
          
          <ul>
            <li>Node.js and npm (for local development)</li>
            <li>Docker (Docker Desktop for Windows/Mac or Docker Engine for Linux)</li>
            <li>A React application (we'll use Create React App in this tutorial)</li>
          </ul>
          
          <h2>Step 1: Create a Dockerfile</h2>
          
          <p>
            First, we need to create a Dockerfile in the root of your React project. This file contains instructions for Docker on how to build your application container.
          </p>
          
          <div className="code-block">
            <pre><code>{`# Use official Node.js image as base
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
`}</code></pre>
          </div>
          
          <p>
            This Dockerfile uses a multi-stage build approach, which is a best practice for creating optimized Docker images:
          </p>
          
          <ol>
            <li>The first stage uses a Node.js image to build the React application</li>
            <li>The second stage uses a lightweight Nginx image to serve the static files</li>
            <li>Only the built files are copied to the final image, keeping it small and efficient</li>
          </ol>
          
          <h2>Step 2: Create .dockerignore File</h2>
          
          <p>
            Next, create a .dockerignore file to prevent unnecessary files from being copied into your Docker image:
          </p>
          
          <div className="code-block">
            <pre><code>{`node_modules
npm-debug.log
build
.git
.github
.gitignore
README.md
docker-compose.yml
Dockerfile
.dockerignore`}</code></pre>
          </div>
          
          <blockquote>
            Using a .dockerignore file helps keep your Docker images smaller and builds faster by excluding files that aren't needed in the container.
          </blockquote>
          
          <h2>Step 3: Build Your Docker Image</h2>
          
          <p>
            Now that we have our Dockerfile and .dockerignore set up, we can build the Docker image. Open a terminal in your project directory and run:
          </p>
          
          <div className="code-block">
            <pre><code>{`docker build -t react-app .`}</code></pre>
          </div>
          
          <p>
            This command builds a Docker image tagged as 'react-app' based on the instructions in your Dockerfile. The '.' at the end tells Docker to look for the Dockerfile in the current directory.
          </p>
          
          <h2>Step 4: Run Your Containerized React App</h2>
          
          <p>
            Once the build process is complete, you can run your containerized React application with:
          </p>
          
          <div className="code-block">
            <pre><code>{`docker run -p 3000:80 --name react-container react-app`}</code></pre>
          </div>
          
          <p>
            This command runs your Docker image as a container named 'react-container' and maps port 3000 on your host machine to port 80 in the container. You can now access your React application by navigating to http://localhost:3000 in your browser.
          </p>
          
          <h2>Step 5: Development Environment with Docker Compose</h2>
          
          <p>
            For a development environment with hot-reloading, create a docker-compose.yml file:
          </p>
          
          <div className="code-block">
            <pre><code>{`version: '3'
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
      - CHOKIDAR_USEPOLLING=true`}</code></pre>
          </div>
          
          <p>
            And create a development-specific Dockerfile named Dockerfile.dev:
          </p>
          
          <div className="code-block">
            <pre><code>{`FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`}</code></pre>
          </div>
          
          <p>
            Start your development environment with:
          </p>
          
          <div className="code-block">
            <pre><code>{`docker-compose up`}</code></pre>
          </div>
          
          <h2>Advanced Configuration: Environment Variables</h2>
          
          <p>
            To use environment variables in your React application, you can create a .env file and pass it to your container:
          </p>
          
          <div className="code-block">
            <pre><code>{`docker run -p 3000:80 --env-file .env react-app`}</code></pre>
          </div>
          
          <p>
            Remember that for Create React App, only variables prefixed with REACT_APP_ will be accessible in your application.
          </p>
          
          <h2>Conclusion</h2>
          
          <p>
            Dockerizing your React application provides consistency across development, testing, and production environments. 
            It eliminates "it works on my machine" problems and simplifies deployment to any infrastructure that supports Docker.
          </p>
          
          <p>
            With the multi-stage build approach, you can keep your production images small while still having all the tools you need for development.
            This containerization strategy works well with CI/CD pipelines and modern cloud deployment services.
          </p>
        </div>

        <footer className="blog-footer">
          <div className="blog-tags">
            <span>React</span>
            <span>Docker</span>
            <span>DevOps</span>
            <span>Frontend</span>
          </div>
          <div className="blog-share">
            <button>Share</button>
          </div>
        </footer>
      </article>

      <style jsx>{`
        .blog-container {
          background-color: #000;
          color: #e0e0e0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          padding: 0;
          min-height: 100vh;
        }

        .blog-post {
          max-width: 800px;
          margin: 0 auto;
          padding: 60px 20px;
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
        }

        .blog-category {
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

        .blog-content ul, .blog-content ol {
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
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          color: #cccccc;
        }

        .blog-footer {
          margin-top: 50px;
          padding-top: 20px;
          border-top: 1px solid #222;
          display: flex;
          justify-content: space-between;
          align-items: center;
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

        .blog-share button {
          background-color: #ffffff;
          color: #000;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .blog-share button:hover {
          background-color: #dddddd;
          transform: translateY(-2px);
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
            gap: 20px;
          }

          .blog-tags {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;