import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";
import img from "../../../assets/blog/bunny.png";

const BunnyCDNBlog = () => {
  const navigate = useNavigate();

  // Similar blog data
  const similarBlogs = [
    {
      id: 1,
      title: "How to Dockerize a React.js Application",
      tags: ["docker", "react", "devops"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      title: "AWS S3 Bucket Configuration Best Practices",
      tags: ["aws", "s3", "cloud"],
      image:
        "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      title: "Speed Up Your Website with Content Delivery Networks",
      tags: ["cdn", "performance", "web"],
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
            Setting Up BunnyCDN with S3 and Edge Rules
          </h1>
          <p className="blog-description">
            A comprehensive guide to configuring BunnyCDN Pull Zones with S3
            buckets and leveraging Edge Rules for enhanced performance and
            control
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">March 3, 2025</span>
            <span className="blog-category">DevOps</span>
            <span className="blog-reading-time">12 min read</span>
          </div>
        </header>

        <div className="blog-featured-image-container">
          <img
            src={img}
            alt="BunnyCDN dashboard on laptop screen"
            className="blog-featured-image"
          />
        </div>

        <div className="blog-content">
          <p>
            BunnyCDN has established itself as a cost-effective and
            high-performance content delivery network that can significantly
            improve your website's loading speeds. One of its most powerful
            features is the ability to pull content directly from storage
            solutions like Amazon S3. In this guide, we'll walk through the
            complete process of setting up a BunnyCDN Pull Zone connected to an
            S3 bucket and implementing Edge Rules for advanced content delivery
            control.
          </p>

          <h2>Prerequisites</h2>

          <p>Before we begin, make sure you have the following:</p>

          <ul>
            <li>
              A BunnyCDN account (you can sign up at{" "}
              <a href="https://bunnycdn.com">bunnycdn.com</a>)
            </li>
            <li>An AWS account with an S3 bucket containing your content</li>
            <li>
              Your S3 bucket configured for public access (or with appropriate
              permissions)
            </li>
            <li>
              Domain name (optional but recommended for production environments)
            </li>
          </ul>

          <h2>Step 1: Creating a Pull Zone in BunnyCDN</h2>

          <p>
            A Pull Zone is essentially an endpoint that pulls content from your
            origin server (in this case, an S3 bucket) and caches it across
            BunnyCDN's global network.
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Pull Zone Configuration Parameters
Origin URL: https://your-bucket-name.s3.amazonaws.com
Name: your-pull-zone-name
Type: Standard Pull Zone
`}</code>
            </pre>
          </div>

          <p>Here's how to set up your Pull Zone:</p>

          <ol>
            <li>
              Log in to your BunnyCDN account and navigate to the "Pull Zones"
              section
            </li>
            <li>Click on "Add Pull Zone"</li>
            <li>
              Enter a name for your Pull Zone (this will be used in the URL)
            </li>
            <li>
              Enter your S3 bucket URL as the Origin URL
              (https://your-bucket-name.s3.amazonaws.com)
            </li>
            <li>Select the pricing tier that fits your needs</li>
            <li>
              Configure additional options if needed (we'll cover some important
              ones below)
            </li>
            <li>Click "Add Pull Zone" to create it</li>
          </ol>

          <blockquote>
            Ensure your S3 bucket permissions allow BunnyCDN to access the
            files. For testing, you can make objects public, but for production,
            consider using a more restrictive policy that only allows BunnyCDN's
            IPs.
          </blockquote>

          <h2>Step 2: Advanced Pull Zone Configuration</h2>

          <p>
            Once your basic Pull Zone is created, let's optimize some settings:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Recommended Pull Zone Settings
Cache Error Responses: On (with appropriate TTL)
Origin Cache-Control: On
Query String Forwarding: Based on your application needs
Enable Logging: On
`}</code>
            </pre>
          </div>

          <p>
            Navigate to your newly created Pull Zone and consider configuring
            these important settings:
          </p>

          <ul>
            <li>
              <strong>Cache Settings</strong>: Define how long BunnyCDN should
              cache your content. You can respect the Cache-Control headers from
              your S3 bucket or override them.
            </li>
            <li>
              <strong>Error Handling</strong>: Configure if and how BunnyCDN
              should cache error responses.
            </li>
            <li>
              <strong>Query String</strong>: Decide whether query parameters
              should affect caching (important for dynamic content).
            </li>
            <li>
              <strong>CORS Headers</strong>: Set up Cross-Origin Resource
              Sharing if your content will be accessed from different domains.
            </li>
          </ul>

          <h2>Step 3: Connecting a Custom Domain</h2>

          <p>
            For production use, you'll want to use your own domain rather than
            BunnyCDN's provided hostname:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# DNS Configuration
Type: CNAME
Hostname: cdn.yourdomain.com
Points to: your-pull-zone-name.b-cdn.net
`}</code>
            </pre>
          </div>

          <p>To add a custom domain:</p>

          <ol>
            <li>In your Pull Zone settings, go to the "Hostnames" tab</li>
            <li>Click "Add Hostname"</li>
            <li>Enter your custom domain (e.g., cdn.yourdomain.com)</li>
            <li>Add the hostname to your Pull Zone</li>
            <li>
              Create a CNAME record in your DNS settings pointing to your
              BunnyCDN Pull Zone URL (your-pull-zone-name.b-cdn.net)
            </li>
            <li>
              Optionally, enable SSL by clicking the "Add SSL Certificate"
              button next to your hostname
            </li>
          </ol>

          <p>
            BunnyCDN provides free Let's Encrypt SSL certificates for all custom
            hostnames, which will automatically renew.
          </p>

          <h2>Step 4: Configuring Edge Rules for Advanced Control</h2>

          <p>
            Edge Rules are one of BunnyCDN's most powerful features, allowing
            you to manipulate requests and responses at the edge. Let's explore
            some common use cases:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Sample Edge Rule - Browser Caching Headers
Action: Set Response Header
Trigger: URL matches any
Header Name: Cache-Control
Header Value: public, max-age=86400
`}</code>
            </pre>
          </div>

          <p>To create Edge Rules:</p>

          <ol>
            <li>In your Pull Zone, navigate to the "Edge Rules" tab</li>
            <li>Click "Add Edge Rule"</li>
            <li>Configure the conditions when the rule should apply</li>
            <li>Set up the actions that should be taken</li>
            <li>Arrange rules in the desired priority order</li>
          </ol>

          <h3>Example Edge Rules for Common Scenarios</h3>

          <p>Let's look at some practical Edge Rules examples:</p>

          <h4>1. Browser Caching for Static Assets</h4>

          <div className="code-block">
            <pre>
              <code>{`Trigger: URL matches RegEx \\.(jpg|jpeg|png|gif|css|js)$
Action: Set Response Header
Header Name: Cache-Control
Header Value: public, max-age=604800, stale-while-revalidate=86400
`}</code>
            </pre>
          </div>

          <p>
            This rule adds aggressive caching headers for static assets, telling
            browsers to cache these files for one week and allowing an
            additional day of stale content while revalidating.
          </p>

          <h4>2. GeoIP Blocking</h4>

          <div className="code-block">
            <pre>
              <code>{`Trigger: Country matches any: CN, RU
Action: Return Fixed Response
Status Code: 403
Response Body: <html><body><h1>Access Denied</h1><p>Access is not permitted from your region.</p></body></html>
`}</code>
            </pre>
          </div>

          <p>
            This rule blocks access from specific countries, which can be useful
            for compliance with regional restrictions or protection against
            attacks from certain regions.
          </p>

          <h4>3. URL Rewrites for Clean URLs</h4>

          <div className="code-block">
            <pre>
              <code>{`Trigger: URL matches RegEx ^/blog/([\\w-]+)$
Action: Rewrite Request
Target URL: /blog.php?slug=$1
`}</code>
            </pre>
          </div>

          <p>
            This rule allows you to have clean, SEO-friendly URLs like
            /blog/my-article that get internally rewritten to
            /blog.php?slug=my-article without requiring server-side
            configuration.
          </p>

          <h4>4. Content Compression</h4>

          <div className="code-block">
            <pre>
              <code>{`Trigger: URL matches any
Action: Enable Gzip Compression
`}</code>
            </pre>
          </div>

          <p>
            This rule ensures all content is compressed before being sent to the
            user, reducing bandwidth usage and improving load times.
          </p>

          <h2>Step 5: Optimizing S3 for BunnyCDN</h2>

          <p>To ensure optimal performance between S3 and BunnyCDN:</p>

          <div className="code-block">
            <pre>
              <code>{`# S3 Bucket CORS Configuration
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
    <MaxAgeSeconds>3000</MaxAgeSeconds>
  </CORSRule>
</CORSConfiguration>
`}</code>
            </pre>
          </div>

          <ol>
            <li>
              Set appropriate Cache-Control headers on your S3 objects to
              instruct BunnyCDN how long to cache
            </li>
            <li>Configure CORS settings if needed</li>
            <li>
              Consider using AWS CloudFront in front of S3 if you need origin
              redundancy
            </li>
            <li>
              Use S3 bucket policies to restrict access to only BunnyCDN's IP
              ranges
            </li>
          </ol>

          <h2>Step 6: Monitoring and Optimization</h2>

          <p>
            BunnyCDN provides detailed analytics to help you optimize your
            setup:
          </p>

          <ul>
            <li>Monitor your cache hit ratio and try to keep it above 90%</li>
            <li>Track bandwidth usage and adjust your plan if needed</li>
            <li>
              Review logs regularly to identify potential issues or optimization
              opportunities
            </li>
            <li>Set up cost alerts to avoid unexpected bills</li>
          </ul>

          <h2>Advanced: Using BunnyCDN Storage Instead of S3</h2>

          <p>
            While this guide focuses on using S3 as your origin, BunnyCDN also
            offers its own storage solution that integrates seamlessly with Pull
            Zones and can be more cost-effective:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# BunnyCDN Storage vs S3 Integration
BunnyCDN Storage:
- Tighter integration with Pull Zones
- Often lower cost than S3 + transfer
- Simpler setup with fewer moving parts

S3 Advantages:
- Existing workflows may already use S3
- More storage features and redundancy options
- Integration with other AWS services
`}</code>
            </pre>
          </div>

          <p>
            Consider your specific needs when choosing between S3 and BunnyCDN's
            storage solution.
          </p>

          <h2>Conclusion</h2>

          <p>
            By connecting BunnyCDN to your S3 bucket and implementing Edge
            Rules, you've created a powerful, globally distributed content
            delivery system that will significantly improve your website's
            performance and reduce load on your origin servers.
          </p>

          <p>
            The combination of S3's reliable storage and BunnyCDN's affordable,
            high-performance network gives you the best of both worlds: reliable
            content storage with lightning-fast global delivery. The Edge Rules
            provide granular control over how your content is served, allowing
            you to optimize for specific use cases without modifying your origin
            server configuration.
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
            <span>BunnyCDN</span>
            <span>AWS S3</span>
            <span>DevOps</span>
            <span>Performance</span>
            <span>Edge Computing</span>
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
          margin-bottom: 8px;
        }

        .blog-content a {
          color: #61dafb;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .blog-content a:hover {
          color: #8ae8ff;
          text-decoration: underline;
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

export default BunnyCDNBlog;
