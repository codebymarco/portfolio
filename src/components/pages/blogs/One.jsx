import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";

const One = () => {
  const navigate = useNavigate();

  // Similar blog data
  const similarBlogs = [
    {
      id: 1,
      title: "Kubernetes Secret Management Best Practices",
      tags: ["kubernetes", "security", "devops"],
      image: "https://via.placeholder.com/800x450",
    },
    {
      id: 2,
      title: "CI/CD Pipeline Design for Container Deployments",
      tags: ["devops", "ci-cd", "containers"],
      image: "https://via.placeholder.com/800x450",
    },
    {
      id: 3,
      title: "Multi-Stage Docker Builds for Optimized Images",
      tags: ["docker", "optimization", "devops"],
      image: "https://via.placeholder.com/800x450",
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
            Mastering Container Registry Migration: From GCR to Artifact
            Registry
          </h1>
          <p className="blog-description">
            A comprehensive guide to seamlessly transferring Docker images
            between container registries with practical examples for Google
            Cloud Platform
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">March 4, 2025</span>
            <span className="blog-category">DevOps</span>
            <span className="blog-reading-time">8 min read</span>
          </div>
        </header>

        <div className="blog-featured-image-container">
          <img
            src="https://3.bp.blogspot.com/-8PzSTH6N1Cs/V2f3rO3hsRI/AAAAAAAAid8/2QxOlHz9MnohU-baWnepmxG4ENz78IHpwCLcB/s1600/Capture.PNG"
            alt="Container registry migration concept with Docker containers"
            className="blog-featured-image"
          />
        </div>

        <div className="blog-content">
          <p>
            As cloud platforms evolve, container registries continue to advance
            with enhanced features, improved security, and better integration
            options. Whether you're migrating between cloud providers or
            upgrading to a newer registry service within the same platform,
            mastering the process of transferring container images is an
            essential skill for DevOps professionals. In this guide, we'll walk
            through the complete process of migrating Docker images between
            registries, with a specific focus on moving from Google Container
            Registry (GCR) to Google Artifact Registry.
          </p>

          <h2>Why Migrate Container Registries?</h2>

          <p>
            Before diving into the technical steps, let's understand why you
            might need to migrate your container images:
          </p>

          <ul>
            <li>
              Upgrading to newer registry services with advanced features (e.g.,
              GCR to Artifact Registry)
            </li>
            <li>Moving between different cloud providers or regions</li>
            <li>
              Consolidating container images across multiple projects or teams
            </li>
            <li>Implementing stricter security and access control policies</li>
            <li>Preparing for deprecation of older registry services</li>
          </ul>

          <blockquote>
            Google Container Registry is being phased out in favor of Artifact
            Registry, which offers improved performance, regional availability,
            and integration with Google Cloud's security features.
          </blockquote>

          <h2>Prerequisites</h2>

          <p>Before we begin, ensure you have the following ready:</p>

          <ul>
            <li>Docker installed on your local machine</li>
            <li>Google Cloud SDK (gcloud) installed and configured</li>
            <li>
              Appropriate permissions on both source and destination registries
            </li>
            <li>Sufficient storage quota in the destination registry</li>
          </ul>

          <h2>Step 1: Enable Artifact Registry API</h2>

          <p>
            First, we need to ensure the Artifact Registry API is enabled in
            your Google Cloud project. You can do this via the Google Cloud
            Console or through the command line:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Enable the Artifact Registry API
gcloud services enable artifactregistry.googleapis.com`}</code>
            </pre>
          </div>

          <h2>Step 2: Create a Repository in Artifact Registry</h2>

          <p>
            If you haven't already created a repository in Artifact Registry,
            you'll need to set one up. For Docker images, choose the docker
            format:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Create a new Docker repository in Artifact Registry
gcloud artifacts repositories create my-docker-repo \\
  --repository-format=docker \\
  --location=us-central1 \\
  --description="Repository for migrated Docker images"`}</code>
            </pre>
          </div>

          <p>
            This command creates a new Docker repository named "my-docker-repo"
            in the us-central1 region. Adjust the repository name and location
            based on your requirements.
          </p>

          <h2>Step 3: Configure Docker Authentication</h2>

          <p>
            Next, we need to configure Docker to authenticate with both
            registries. For Google Container Registry and Artifact Registry, you
            can use the gcloud command:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Configure Docker for Container Registry
gcloud auth configure-docker

# Configure Docker for Artifact Registry
gcloud auth configure-docker us-central1-docker.pkg.dev`}</code>
            </pre>
          </div>

          <p>
            Replace "us-central1" with your chosen region if it's different.
          </p>

          <h2>Step 4: Pull the Image from Container Registry</h2>

          <p>
            Now, let's pull the image from the source registry (in this case,
            Container Registry):
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Pull the image from Container Registry
docker pull gcr.io/your-project-id/your-image:tag`}</code>
            </pre>
          </div>

          <p>
            This command pulls the specified image from Google Container
            Registry to your local Docker environment. Make sure to replace
            "your-project-id", "your-image", and "tag" with your actual values.
          </p>

          <h2>Step 5: Retag the Image for Artifact Registry</h2>

          <p>
            After pulling the image, we need to retag it to point to the
            destination registry:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Retag the image for Artifact Registry
docker tag gcr.io/your-project-id/your-image:tag us-central1-docker.pkg.dev/your-project-id/my-docker-repo/your-image:tag`}</code>
            </pre>
          </div>

          <p>
            This command creates a new tag for the image, pointing to your
            Artifact Registry repository. The image itself is not duplicated on
            your local system; Docker simply creates a new reference to the same
            image.
          </p>

          <h2>Step 6: Push the Image to Artifact Registry</h2>

          <p>
            Now that the image is properly tagged, we can push it to Artifact
            Registry:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Push the image to Artifact Registry
docker push us-central1-docker.pkg.dev/your-project-id/my-docker-repo/your-image:tag`}</code>
            </pre>
          </div>

          <p>
            This command uploads the image to your Artifact Registry repository.
            Depending on the size of your image and your internet connection,
            this process might take some time.
          </p>

          <h2>Step 7: Verify the Migration</h2>

          <p>
            Once the push is complete, you can verify that your image has been
            successfully migrated by listing the images in your Artifact
            Registry repository:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# List images in Artifact Registry repository
gcloud artifacts docker images list us-central1-docker.pkg.dev/your-project-id/my-docker-repo`}</code>
            </pre>
          </div>

          <p>This command should display your newly migrated image.</p>

          <h2>Automating Registry Migration for Multiple Images</h2>

          <p>
            If you need to migrate multiple images, you can automate the process
            using a simple script. Here's a Bash script example that migrates
            all images from a Container Registry repository to an Artifact
            Registry repository:
          </p>

          <div className="code-block">
            <pre>
              <code>{`#!/bin/bash

# Set variables
PROJECT_ID="your-project-id"
SOURCE_REPO="gcr.io/$PROJECT_ID"
DEST_REGION="us-central1"
DEST_REPO="my-docker-repo"
DEST_PATH="$DEST_REGION-docker.pkg.dev/$PROJECT_ID/$DEST_REPO"

# Configure Docker authentication
gcloud auth configure-docker
gcloud auth configure-docker $DEST_REGION-docker.pkg.dev

# Get list of all images in source repository
IMAGES=$(gcloud container images list --repository=$SOURCE_REPO --format="value(name)")

# Process each image
for IMAGE_PATH in $IMAGES; do
  # Extract image name without the repository prefix
  IMAGE_NAME=$(echo $IMAGE_PATH | sed "s|$SOURCE_REPO/||")
  
  # Get all tags for this image
  TAGS=$(gcloud container images list-tags $IMAGE_PATH --format="value(tags)")
  
  # Process each tag
  for TAG in $TAGS; do
    if [ "$TAG" != "null" ]; then
      echo "Migrating $IMAGE_PATH:$TAG to $DEST_PATH/$IMAGE_NAME:$TAG"
      
      # Pull the image
      docker pull $IMAGE_PATH:$TAG
      
      # Tag the image for the destination repository
      docker tag $IMAGE_PATH:$TAG $DEST_PATH/$IMAGE_NAME:$TAG
      
      # Push the image to the destination repository
      docker push $DEST_PATH/$IMAGE_NAME:$TAG
    fi
  done
done

echo "Migration complete!"`}</code>
            </pre>
          </div>

          <p>
            Save this script to a file (e.g., migrate-images.sh), make it
            executable (chmod +x migrate-images.sh), and run it to migrate all
            your images.
          </p>

          <h2>Using Cloud Shell for Registry Migration</h2>

          <p>
            If you prefer not to install tools locally, you can perform the
            entire migration process using Google Cloud Shell, which comes
            pre-installed with all the necessary tools:
          </p>

          <ol>
            <li>
              Open Google Cloud Console and click the Cloud Shell icon in the
              upper right corner
            </li>
            <li>
              Run the same commands as outlined above in the Cloud Shell
              terminal
            </li>
            <li>
              Cloud Shell has sufficient temporary storage for most image
              migrations
            </li>
          </ol>

          <p>
            This approach is particularly useful if you're managing multiple
            Google Cloud projects or if you're working on a shared system where
            installing tools might not be possible.
          </p>

          <h2>Best Practices for Registry Migration</h2>

          <p>
            To ensure a smooth migration process, consider these best practices:
          </p>

          <ul>
            <li>
              <strong>Plan your migration:</strong> Create an inventory of all
              images that need to be migrated
            </li>
            <li>
              <strong>Test before full migration:</strong> Migrate a few
              non-critical images first to validate the process
            </li>
            <li>
              <strong>Update deployment configurations:</strong> Update all
              references to the old registry in your Kubernetes manifests, CI/CD
              pipelines, and deployment scripts
            </li>
            <li>
              <strong>Implement proper versioning:</strong> Use semantic
              versioning for your image tags to maintain consistency
            </li>
            <li>
              <strong>Consider bandwidth and quota:</strong> For large
              migrations, be aware of network bandwidth and storage quota
              limitations
            </li>
            <li>
              <strong>Maintain image signing:</strong> If you use container
              signing, ensure signatures are properly handled during migration
            </li>
          </ul>

          <h2>Conclusion</h2>

          <p>
            Migrating container images between registries is a straightforward
            process once you understand the basic pull-tag-push workflow.
            Whether you're moving to Artifact Registry for its enhanced features
            or consolidating your container infrastructure, these steps provide
            a reliable method to transfer your Docker images while maintaining
            their integrity.
          </p>

          <p>
            With the growing adoption of container technologies, mastering
            registry migration becomes increasingly important for DevOps teams.
            By following this guide, you can ensure your container images are
            securely and efficiently transferred between registries, enabling
            your organization to leverage the latest features and best practices
            in container management.
          </p>
        </div>

        <div className="blog-author">
          <div className="blog-author-image">
            <img src="https://via.placeholder.com/60" alt="Author" />
          </div>
          <div className="blog-author-info">
            <h3>Sarah Jenkins</h3>
            <p>Senior DevOps Engineer based in Seattle, Washington</p>
          </div>
        </div>

        <footer className="blog-footer">
          <div className="blog-tags">
            <span>Docker</span>
            <span>GCP</span>
            <span>Artifact Registry</span>
            <span>DevOps</span>
            <span>Containers</span>
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

export default One;
