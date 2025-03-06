import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";

const Four = () => {
  const navigate = useNavigate();

  // Similar blog data
  const similarBlogs = [
    {
      id: 1,
      title: "Serverless Architecture: Benefits and Implementation",
      tags: ["serverless", "architecture", "cloud"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      title: "CI/CD for Modern Cloud Applications",
      tags: ["devops", "ci-cd", "cloud"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      title: "Optimizing Cloud Costs for Startups",
      tags: ["cloud", "optimization", "costs"],
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
            The Ultimate Guide to Full-Stack Cloud Development
          </h1>
          <p className="blog-description">
            Master the complete stack from frontend to backend while leveraging
            modern cloud services for scalable, resilient applications
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">March 6, 2025</span>
            <span className="blog-category">Cloud Computing</span>
            <span className="blog-reading-time">12 min read</span>
          </div>
        </header>

        <div className="blog-featured-image-container">
          <img
            src="https://img.freepik.com/premium-photo/cloud-computing-technology_1083198-314.jpg"
            alt="Cloud development concept with code and cloud services"
            className="blog-featured-image"
          />
        </div>

        <div className="blog-content">
          <p>
            Full-stack cloud development combines traditional web development
            skills with cloud-native approaches to create scalable, resilient
            applications. This comprehensive guide will take you through the
            essential components, from frontend frameworks to serverless
            backends and everything in between.
          </p>

          <h2>Understanding the Full-Stack Cloud Landscape</h2>

          <p>
            Today's full-stack developers need to master more than just frontend
            and backend technologies. The modern stack extends into the cloud,
            incorporating infrastructure as code, containerization, serverless
            computing, and managed services.
          </p>

          <p>A typical full-stack cloud application consists of:</p>

          <ul>
            <li>A dynamic, responsive frontend built with modern frameworks</li>
            <li>API layer for communication between frontend and backend</li>
            <li>Serverless functions or containerized microservices</li>
            <li>Database and storage solutions</li>
            <li>Authentication and authorization services</li>
            <li>Infrastructure as code (IaC) for deployment</li>
            <li>CI/CD pipelines for automated testing and deployment</li>
          </ul>

          <h2>Frontend Development for Cloud Applications</h2>

          <p>
            When building cloud-centric applications, your frontend needs to be
            optimized for performance and seamless integration with backend
            services.
          </p>

          <h3>Modern JavaScript Frameworks</h3>

          <p>
            React, Angular, and Vue remain the top choices for building dynamic
            frontends. For cloud applications specifically:
          </p>

          <div className="code-block">
            <pre>
              <code>{`// Example of React component with API integration
import React, { useState, useEffect } from 'react';

function UserDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from cloud API gateway
    fetch('https://api-gateway.cloud-provider.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="dashboard">
      {data.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}`}</code>
            </pre>
          </div>

          <p>Consider these best practices for cloud-optimized frontends:</p>

          <ol>
            <li>Implement proper error handling for API calls</li>
            <li>
              Use environment variables for different deployment environments
            </li>
            <li>Optimize bundles for faster loading with code splitting</li>
            <li>Implement client-side caching strategies</li>
            <li>Consider static site generation for improved performance</li>
          </ol>

          <blockquote>
            Static site generation with frameworks like Next.js or Gatsby can
            dramatically improve performance while reducing cloud computing
            costs by serving pre-rendered content from CDNs.
          </blockquote>

          <h2>Backend Development in the Cloud Era</h2>

          <p>
            The backend landscape has evolved dramatically with cloud computing.
            Monolithic applications are increasingly being replaced by
            microservices and serverless architectures.
          </p>

          <h3>Serverless Computing</h3>

          <p>
            Serverless functions allow developers to focus on writing code
            without managing infrastructure. Here's an example AWS Lambda
            function in Node.js:
          </p>

          <div className="code-block">
            <pre>
              <code>{`// AWS Lambda function example
exports.handler = async (event) => {
  try {
    // Parse the incoming request
    const body = JSON.parse(event.body);
    
    // Connect to database service
    const { connectToDb } = require('./db-connector');
    const db = await connectToDb();
    
    // Process data
    const result = await db.collection('users').insertOne({
      name: body.name,
      email: body.email,
      createdAt: new Date()
    });
    
    // Return success response
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: 'User created successfully',
        userId: result.insertedId
      })
    };
  } catch (error) {
    // Return error response
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error creating user',
        error: error.message
      })
    };
  }
};`}</code>
            </pre>
          </div>

          <h3>Containerization with Docker and Kubernetes</h3>

          <p>
            For more complex applications, containerization provides a perfect
            balance between control and manageability. Here's a simple Docker
            configuration for a Node.js API:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Dockerfile for Node.js API
FROM node:16-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Expose port
EXPOSE 8080

# Start the application
CMD ["npm", "start"]`}</code>
            </pre>
          </div>

          <h2>Database Options for Cloud Applications</h2>

          <p>
            Choosing the right database for your cloud application is crucial
            for performance, scalability, and cost-effectiveness.
          </p>

          <h3>Cloud-Native Database Services</h3>

          <p>
            Major cloud providers offer fully managed database services that
            handle scaling, backups, and high availability:
          </p>

          <ul>
            <li>
              <strong>AWS</strong>: DynamoDB (NoSQL), Aurora (MySQL/PostgreSQL
              compatible)
            </li>
            <li>
              <strong>Azure</strong>: Cosmos DB (multi-model), Azure SQL
              Database
            </li>
            <li>
              <strong>Google Cloud</strong>: Firestore (NoSQL), Cloud Spanner
              (relational)
            </li>
          </ul>

          <p>
            For many applications, a NoSQL database like DynamoDB or Firestore
            provides the flexibility and scalability needed for cloud
            applications:
          </p>

          <div className="code-block">
            <pre>
              <code>{`// Example DynamoDB interaction with AWS SDK
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

async function createItem(data) {
  const params = {
    TableName: 'ProductsTable',
    Item: {
      productId: data.id,
      name: data.name,
      price: data.price,
      category: data.category,
      createdAt: new Date().toISOString()
    }
  };
  
  return dynamoDB.put(params).promise();
}`}</code>
            </pre>
          </div>

          <h2>Authentication and Security in the Cloud</h2>

          <p>
            Security is paramount for cloud applications. Modern cloud
            development leverages managed identity services rather than
            implementing authentication from scratch.
          </p>

          <p>
            Services like AWS Cognito, Auth0, or Firebase Authentication provide
            secure user management with features like:
          </p>

          <ul>
            <li>Multi-factor authentication</li>
            <li>Social login integration</li>
            <li>Fine-grained permission controls</li>
            <li>JWT token management</li>
            <li>User pool management</li>
          </ul>

          <div className="code-block">
            <pre>
              <code>{`// Example using AWS Amplify for authentication
import { Auth } from 'aws-amplify';

// Configure Auth
Auth.configure({
  region: 'us-east-1',
  userPoolId: 'us-east-1_AbCdEfGhI',
  userPoolWebClientId: '1a2b3c4d5e6f7g8h9i0j'
});

// Sign up function
async function signUp(username, password, email) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: { email }
    });
    console.log('Sign up successful:', user);
    return user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
}`}</code>
            </pre>
          </div>

          <h2>Infrastructure as Code (IaC)</h2>

          <p>
            Managing cloud infrastructure manually becomes unwieldy as
            applications grow. Infrastructure as Code allows developers to
            define and provision resources programmatically.
          </p>

          <p>
            Tools like Terraform, AWS CloudFormation, or the Cloud Development
            Kit (CDK) enable declarative infrastructure definitions:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Example Terraform configuration for AWS resources
provider "aws" {
  region = "us-west-2"
}

# Define a Lambda function
resource "aws_lambda_function" "api_function" {
  function_name = "api-handler"
  runtime       = "nodejs14.x"
  handler       = "index.handler"
  
  filename      = "function.zip"
  source_code_hash = filebase64sha256("function.zip")
  
  role = aws_iam_role.lambda_role.arn
  
  environment {
    variables = {
      NODE_ENV = "production"
      DB_CONNECTION = var.database_url
    }
  }
}

# API Gateway to expose the Lambda
resource "aws_apigatewayv2_api" "api_gateway" {
  name          = "serverless-api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_integration" "lambda_integration" {
  api_id           = aws_apigatewayv2_api.api_gateway.id
  integration_type = "AWS_PROXY"
  
  integration_uri    = aws_lambda_function.api_function.invoke_arn
  integration_method = "POST"
}`}</code>
            </pre>
          </div>

          <h2>CI/CD for Cloud Applications</h2>

          <p>
            Continuous Integration and Continuous Deployment pipelines are
            essential for maintaining quality and enabling rapid iterations in
            cloud development.
          </p>

          <p>A typical CI/CD pipeline for a cloud application includes:</p>

          <ol>
            <li>Code changes pushed to a repository</li>
            <li>Automated testing (unit, integration, end-to-end)</li>
            <li>Build and packaging of application artifacts</li>
            <li>Infrastructure deployment or updates via IaC</li>
            <li>Application deployment to different environments</li>
            <li>Post-deployment verification</li>
          </ol>

          <div className="code-block">
            <pre>
              <code>{`# Example GitHub Actions workflow for a cloud application
name: Deploy Cloud Application

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
        
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Terraform
        uses: hashicorp/setup-terraform@v2
        
      - name: Terraform Init
        run: terraform init
        
      - name: Terraform Plan
        run: terraform plan -out=tfplan
        
      - name: Terraform Apply
        run: terraform apply -auto-approve tfplan
        
      - name: Deploy Frontend
        run: |
          npm ci
          npm run build
          aws s3 sync ./build s3://my-app-bucket/
          aws cloudfront create-invalidation --distribution-id --paths "/*"`}</code>
            </pre>
          </div>

          <h2>Monitoring and Observability</h2>

          <p>
            Cloud applications require robust monitoring. Distributed systems
            are inherently more complex to troubleshoot, making observability
            crucial.
          </p>

          <p>Key components of a cloud monitoring strategy include:</p>

          <ul>
            <li>Centralized logging (CloudWatch Logs, Google Cloud Logging)</li>
            <li>Application performance monitoring (New Relic, Datadog)</li>
            <li>Distributed tracing (AWS X-Ray, Google Cloud Trace)</li>
            <li>Custom metrics and dashboards</li>
            <li>Automated alerting</li>
          </ul>

          <h2>Cost Optimization Strategies</h2>

          <p>
            The pay-as-you-go model of cloud computing requires careful
            attention to cost optimization:
          </p>

          <ol>
            <li>Right-sizing resources to match actual requirements</li>
            <li>Implementing auto-scaling for variable workloads</li>
            <li>
              Using spot instances or preemptible VMs for non-critical workloads
            </li>
            <li>
              Optimizing storage with appropriate tiers and lifecycle policies
            </li>
            <li>Implementing caching strategies to reduce compute costs</li>
            <li>Monitoring and analyzing cost metrics regularly</li>
          </ol>

          <h2>Conclusion</h2>

          <p>
            Full-stack cloud development represents the convergence of
            traditional web development with cloud-native architecture. By
            mastering these skills, developers can create applications that are
            not only feature-rich but also inherently scalable, resilient, and
            cost-effective.
          </p>

          <p>
            The cloud-first approach transforms how we think about application
            architecture, pushing us toward event-driven designs, managed
            services, and infrastructure automation. While the learning curve
            may seem steep initially, the productivity gains and operational
            benefits make the journey worthwhile for developers and
            organizations alike.
          </p>
        </div>

        <div className="blog-author">
          <div className="blog-author-image">
            <img src="https://via.placeholder.com/60" alt="Author" />
          </div>
          <div className="blog-author-info">
            <h3>Sarah Chen</h3>
            <p>Cloud Solutions Architect based in Seattle, Washington</p>
          </div>
        </div>

        <footer className="blog-footer">
          <div className="blog-tags">
            <span>Cloud</span>
            <span>AWS</span>
            <span>Azure</span>
            <span>Serverless</span>
            <span>React</span>
            <span>Node.js</span>
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

        .blog-content h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 30px 0 15px;
          color: #f0f0f0;
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

export default Four;
