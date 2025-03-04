import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";

const Two = () => {
  const navigate = useNavigate();

  // Similar blog data
  const similarBlogs = [
    {
      id: 1,
      title: "Optimizing SEO in React Applications",
      tags: ["react", "seo", "frontend"],
      image: "https://via.placeholder.com/800x450",
    },
    {
      id: 2,
      title: "Server-Side Rendering with Next.js",
      tags: ["next.js", "ssr", "react"],
      image: "https://via.placeholder.com/800x450",
    },
    {
      id: 3,
      title: "Building Accessible React Components",
      tags: ["react", "accessibility", "frontend"],
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
            Elevating React SEO with React Helmet: A Complete Integration Guide
          </h1>
          <p className="blog-description">
            Learn how to dynamically manage document head metadata in React
            applications for improved SEO, social sharing, and user experience
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">March 4, 2025</span>
            <span className="blog-category">Frontend</span>
            <span className="blog-reading-time">7 min read</span>
          </div>
        </header>

        <div className="blog-featured-image-container">
          <img
            src="https://th.bing.com/th/id/OIP.t4Em-3T6FZqHzZxxUH22wgHaGa?rs=1&pid=ImgDetMain"
            alt="React Helmet integration diagram with SEO components"
            className="blog-featured-image"
          />
        </div>

        <div className="blog-content">
          <p>
            Single-page applications (SPAs) built with React offer dynamic user
            experiences but come with unique challenges for search engine
            optimization (SEO). One of the most significant pain points is that
            React renders content client-side, making it difficult for search
            engines to index your pages properly. This is where React Helmet
            comes in—a powerful library that enables you to control your
            document head from within your React components. In this guide,
            we'll explore how to integrate React Helmet into your projects to
            enhance SEO, improve social sharing, and create a better overall
            user experience.
          </p>

          <h2>What is React Helmet?</h2>

          <p>
            React Helmet is a reusable React component that allows you to manage
            all of your changes to the document head. It works by defining tags
            like <code>title</code>, <code>meta</code>, <code>link</code>, and
            others that you want to appear in the <code>&lt;head&gt;</code>{" "}
            section of your HTML document. These changes can be defined within
            any component in your React application, making it perfect for
            applications with changing content.
          </p>

          <blockquote>
            Think of React Helmet as your dedicated SEO manager for React
            applications, ensuring that search engines and social media
            platforms properly understand and display your content.
          </blockquote>

          <h2>Why Use React Helmet?</h2>

          <p>
            Before diving into implementation, let's understand why React Helmet
            is essential for modern React applications:
          </p>

          <ul>
            <li>
              <strong>Improved SEO</strong>: Properly configured meta tags help
              search engines understand your content
            </li>
            <li>
              <strong>Dynamic page titles</strong>: Update the browser tab title
              based on the current view
            </li>
            <li>
              <strong>Social media optimization</strong>: Control how your
              content appears when shared on platforms like Twitter, Facebook,
              and LinkedIn
            </li>
            <li>
              <strong>Canonical URLs</strong>: Prevent duplicate content issues
              by specifying the preferred version of a page
            </li>
            <li>
              <strong>Custom scripts and stylesheets</strong>: Load
              page-specific resources only when needed
            </li>
          </ul>

          <h2>Step 1: Installing React Helmet</h2>

          <p>
            Let's start by installing the package. There are two popular
            options: the original <code>react-helmet</code> and the newer{" "}
            <code>react-helmet-async</code>. The latter is recommended for
            modern React applications as it's built to work with React's
            concurrent mode and server-side rendering:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Using npm
npm install react-helmet-async

# Using yarn
yarn add react-helmet-async`}</code>
            </pre>
          </div>

          <h2>Step 2: Setting Up the Helmet Provider</h2>

          <p>
            When using <code>react-helmet-async</code>, you need to wrap your
            application with a provider component. This is typically done at the
            root level of your application:
          </p>

          <div className="code-block">
            <pre>
              <code>{`import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);`}</code>
            </pre>
          </div>

          <p>
            This setup creates a context for all Helmet instances in your
            application to work together.
          </p>

          <h2>Step 3: Basic Usage - Adding Page Titles and Meta Tags</h2>

          <p>
            Now, let's implement basic Helmet functionality in a component.
            Here's an example of a product page component that dynamically sets
            the page title, description, and other meta tags:
          </p>

          <div className="code-block">
            <pre>
              <code>{`import React from 'react';
import { Helmet } from 'react-helmet-async';

const ProductPage = ({ product }) => {
  return (
    <div className="product-page">
      <Helmet>
        <title>{product.name} | Your Store Name</title>
        <meta name="description" content={product.description.substring(0, 160)} />
        <meta name="keywords" content={product.tags.join(', ')} />
        <link rel="canonical" href={\`https://yourstore.com/products/\${product.slug}\`} />
      </Helmet>
      
      {/* Rest of your product page component */}
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* ... */}
    </div>
  );
};

export default ProductPage;`}</code>
            </pre>
          </div>

          <p>
            This example demonstrates how to set dynamic content in the document
            head based on the product being viewed. When a user navigates to a
            different product, the page title and meta information will update
            accordingly.
          </p>

          <h2>Step 4: Social Media Optimization with Open Graph</h2>

          <p>
            To improve how your content appears when shared on social media
            platforms, you can add Open Graph (OG) tags using React Helmet:
          </p>

          <div className="code-block">
            <pre>
              <code>{`<Helmet>
  <title>{article.title} | Your Blog Name</title>
  <meta name="description" content={article.excerpt} />
  
  {/* Open Graph tags for Facebook, LinkedIn, etc. */}
  <meta property="og:title" content={article.title} />
  <meta property="og:description" content={article.excerpt} />
  <meta property="og:image" content={article.featuredImage} />
  <meta property="og:url" content={\`https://yourblog.com/articles/\${article.slug}\`} />
  <meta property="og:type" content="article" />
  
  {/* Twitter Card tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="twitter:title" content={article.title} />
  <meta name="twitter:description" content={article.excerpt} />
  <meta name="twitter:image" content={article.featuredImage} />
</Helmet>`}</code>
            </pre>
          </div>

          <p>
            These tags ensure that when someone shares your content on platforms
            like Twitter, Facebook, or LinkedIn, the shared link will display
            rich information including the title, description, and an image.
          </p>

          <h2>Step 5: Creating a Reusable SEO Component</h2>

          <p>
            To avoid repeating the same SEO-related code across multiple
            components, it's a good practice to create a reusable SEO component:
          </p>

          <div className="code-block">
            <pre>
              <code>{`import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
  // Fallback values if props aren't provided
  const defaultTitle = 'Your Website Name';
  const defaultDescription = 'Default description of your website';
  const defaultImage = 'https://yourwebsite.com/default-og-image.jpg';
  const defaultUrl = 'https://yourwebsite.com';
  
  const siteTitle = title ? \`\${title} | \${defaultTitle}\` : defaultTitle;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url || defaultUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
};

export default SEO;`}</code>
            </pre>
          </div>

          <p>
            Now you can use this component throughout your application with a
            cleaner interface:
          </p>

          <div className="code-block">
            <pre>
              <code>{`import SEO from '../components/SEO';

const BlogPost = ({ post }) => (
  <div>
    <SEO
      title={post.title}
      description={post.excerpt}
      keywords={post.tags.join(', ')}
      image={post.featuredImage}
      url={\`https://yourblog.com/posts/\${post.slug}\`}
      type="article"
    />
    {/* Rest of your component */}
  </div>
);`}</code>
            </pre>
          </div>

          <h2>Step 6: Advanced Features - Script and Style Management</h2>

          <p>
            React Helmet isn't just for meta tags; you can also use it to manage
            scripts and stylesheets that should only be loaded on specific
            pages:
          </p>

          <div className="code-block">
            <pre>
              <code>{`<Helmet>
  <title>Analytics Dashboard | Your App</title>
  
  {/* Load a chart library only on the dashboard page */}
  <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js"></script>
  
  {/* Page-specific stylesheet */}
  <link rel="stylesheet" href="/css/dashboard.css" />
  
  {/* Inline script if needed */}
  <script type="text/javascript">
    {
    \`document.addEventListener('DOMContentLoaded', function() {
      console.log('Dashboard specific initialization');
    });\`
    }
  </script>
</Helmet>`}</code>
            </pre>
          </div>

          <p>
            This approach ensures that you only load resources when they're
            actually needed, improving your application's performance.
          </p>

          <h2>Step 7: Server-Side Rendering Considerations</h2>

          <p>
            If you're using server-side rendering (SSR) with frameworks like
            Next.js or implementing it manually with React, you'll need to
            extract and inject the Helmet data during the server render. Here's
            how to do it with <code>react-helmet-async</code>:
          </p>

          <div className="code-block">
            <pre>
              <code>{`// Server-side rendering example
import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider, FilledContext } from 'react-helmet-async';
import App from './App';

const renderApp = (req, res) => {
  const helmetContext = {};
  
  // Render the app to string
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  );
  
  // Extract the Helmet data
  const { helmet } = helmetContext;
  
  // Use the extracted data to build the full HTML response
  res.send(\`
    <!DOCTYPE html>
    <html \${helmet.htmlAttributes.toString()}>
      <head>
        \${helmet.title.toString()}
        \${helmet.meta.toString()}
        \${helmet.link.toString()}
        \${helmet.script.toString()}
      </head>
      <body \${helmet.bodyAttributes.toString()}>
        <div id="root">\${appHtml}</div>
      </body>
    </html>
  \`);
};`}</code>
            </pre>
          </div>

          <p>
            With Next.js, this process is largely automated, but you'll still
            need to use <code>react-helmet-async</code> correctly to ensure
            proper SEO.
          </p>

          <h2>Testing React Helmet Implementation</h2>

          <p>
            Once you've integrated React Helmet, it's important to test that
            it's working correctly. Here are some ways to verify your
            implementation:
          </p>

          <ul>
            <li>
              <strong>Use browser developer tools</strong>: Inspect the{" "}
              <code>&lt;head&gt;</code> element to ensure your tags are being
              correctly inserted
            </li>
            <li>
              <strong>Test social sharing previews</strong>: Use Facebook's
              Sharing Debugger or Twitter's Card Validator to see how your pages
              appear when shared
            </li>
            <li>
              <strong>Verify with Google's rich results test</strong>: Make sure
              search engines can properly understand your content
            </li>
            <li>
              <strong>Check page titles</strong>: Navigate between pages in your
              app and confirm that the browser tab title updates correctly
            </li>
          </ul>

          <h2>Common Pitfalls and Solutions</h2>

          <p>
            When implementing React Helmet, be aware of these common issues:
          </p>

          <ol>
            <li>
              <strong>Title doesn't update</strong>: Ensure you're using{" "}
              <code>react-helmet-async</code> with the provider properly set up
            </li>
            <li>
              <strong>Duplicate meta tags</strong>: Check for Helmet instances
              that might be competing with each other
            </li>
            <li>
              <strong>SSR hydration warnings</strong>: Make sure your server and
              client renders match by using the same data
            </li>
            <li>
              <strong>Images not showing in social shares</strong>: Verify that
              image URLs are absolute, not relative
            </li>
          </ol>

          <h2>Conclusion</h2>

          <p>
            React Helmet provides a powerful and straightforward way to manage
            your document head in React applications. By implementing it
            correctly, you can significantly improve your application's SEO,
            create better social sharing experiences, and dynamically adjust
            page metadata based on content. This not only helps search engines
            better understand and index your content but also enhances the user
            experience by providing context-appropriate information in browser
            tabs and bookmarks.
          </p>

          <p>
            Remember that SEO is an ongoing process, not a one-time setup.
            Regularly test and optimize your meta tags, monitor your search
            engine rankings, and adjust your strategy based on results. With
            React Helmet as part of your toolkit, you'll have the flexibility to
            implement these optimizations efficiently across your entire React
            application.
          </p>
        </div>

        <div className="blog-author">
          <div className="blog-author-image">
            <img src="https://via.placeholder.com/60" alt="Author" />
          </div>
          <div className="blog-author-info">
            <h3>Alex Chen</h3>
            <p>Frontend Engineer & SEO Specialist based in Toronto, Canada</p>
          </div>
        </div>

        <footer className="blog-footer">
          <div className="blog-tags">
            <span>React</span>
            <span>SEO</span>
            <span>Helmet</span>
            <span>Frontend</span>
            <span>Metadata</span>
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

export default Two;
