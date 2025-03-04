import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";

const Three = () => {
  const navigate = useNavigate();

  // Similar blog data
  const similarBlogs = [
    {
      id: 1,
      title: "Optimizing Backend Performance with Bun",
      tags: ["bun", "performance", "backend"],
      image: "https://via.placeholder.com/800x450",
    },
    {
      id: 2,
      title: "Building Modern APIs with Node.js",
      tags: ["node.js", "api", "backend"],
      image: "https://via.placeholder.com/800x450",
    },
    {
      id: 3,
      title: "TypeScript in Backend Development",
      tags: ["typescript", "backend", "javascript"],
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
            Node.js vs Bun: The Evolving Landscape of JavaScript Runtimes
          </h1>
          <p className="blog-description">
            A comprehensive comparison of Node.js and Bun, exploring performance
            differences, compatibility, and when to choose one over the other
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">March 4, 2025</span>
            <span className="blog-category">Backend</span>
            <span className="blog-reading-time">8 min read</span>
          </div>
        </header>

        <div className="blog-featured-image-container">
          <img
            src="https://miro.medium.com/v2/resize:fit:480/1*YxBJCMcyz2cOP6AqshyhRg.jpeg"
            alt="Node.js and Bun logos side by side with performance metrics"
            className="blog-featured-image"
          />
        </div>

        <div className="blog-content">
          <p>
            The JavaScript ecosystem continues to evolve at a rapid pace, and
            one of the most significant developments in recent years has been
            the introduction of new JavaScript runtimes. Node.js has dominated
            the server-side JavaScript landscape for over a decade, but
            newcomers like Bun are challenging its position with promises of
            superior performance and developer experience. In this comprehensive
            guide, we'll compare Node.js and Bun, exploring their strengths,
            weaknesses, and ideal use cases to help you make an informed
            decision for your next project.
          </p>

          <h2>What is Node.js?</h2>

          <p>
            Node.js, introduced in 2009 by Ryan Dahl, is an open-source,
            cross-platform JavaScript runtime environment built on Chrome's V8
            JavaScript engine. It enables developers to use JavaScript for
            server-side scripting, allowing them to build scalable network
            applications with JavaScript on both the frontend and backend.
            Node.js uses an event-driven, non-blocking I/O model that makes it
            lightweight and efficient, particularly for data-intensive real-time
            applications that run across distributed devices.
          </p>

          <blockquote>
            "Node.js changed the game by allowing developers to use JavaScript
            everywhere, creating a unified language experience across the stack
            and dramatically simplifying the development process."
          </blockquote>

          <p>
            With its extensive ecosystem of packages available through npm (Node
            Package Manager), Node.js has become the foundation of modern web
            development, powering everything from simple command-line tools to
            complex enterprise applications.
          </p>

          <h2>What is Bun?</h2>

          <p>
            Bun, created by Jarred Sumner in 2021, is a newer JavaScript runtime
            designed as an all-in-one toolkit for JavaScript and TypeScript
            applications. Built on the JavaScriptCore engine (the same engine
            used by Safari), Bun aims to be a faster, more efficient alternative
            to Node.js. It includes a bundler, test runner, and package manager
            all in one, offering a complete solution for JavaScript development.
          </p>

          <p>
            Bun's primary goal is to improve developer experience and
            application performance by addressing some of Node.js's perceived
            shortcomings. It's written in Zig, a low-level programming language
            designed for performance and memory efficiency, which contributes to
            Bun's speed advantages.
          </p>

          <h2>Key Differences: Node.js vs Bun</h2>

          <p>
            Let's explore the major differences between these two JavaScript
            runtimes across several key dimensions:
          </p>

          <h3>1. Performance</h3>

          <p>
            One of Bun's primary selling points is its performance advantage
            over Node.js. Benchmarks consistently show that Bun outperforms
            Node.js in various tasks, particularly in startup time, HTTP request
            handling, and file system operations.
          </p>

          <div className="code-block">
            <pre>
              <code>{`// Simple HTTP server in Node.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}</code>
            </pre>
          </div>

          <div className="code-block">
            <pre>
              <code>{`// Equivalent HTTP server in Bun
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello World");
  },
});

console.log(\`Server running at http://localhost:\${server.port}/\`);`}</code>
            </pre>
          </div>

          <p>
            Bun's HTTP server implementation is not only more concise but also
            significantly faster, capable of handling more requests per second
            with lower latency. This performance advantage stems from several
            factors:
          </p>

          <ul>
            <li>
              <strong>JavaScriptCore engine</strong>: Generally faster for many
              operations compared to V8
            </li>
            <li>
              <strong>Written in Zig</strong>: A language designed for systems
              programming with performance comparable to C
            </li>
            <li>
              <strong>Optimized internals</strong>: Bun reimplements many
              Node.js APIs with performance as a priority
            </li>
            <li>
              <strong>Better defaults</strong>: Optimized configuration out of
              the box
            </li>
          </ul>

          <h3>2. Compatibility</h3>

          <p>
            Node.js has been the standard for server-side JavaScript for over a
            decade, resulting in a vast ecosystem of packages and widespread
            adoption. Bun is designed to be largely compatible with the Node.js
            API, but there are still differences and limitations.
          </p>

          <p>
            Bun aims to implement most of the Node.js API surface, including:
          </p>

          <ul>
            <li>
              Core modules like <code>fs</code>, <code>path</code>, and{" "}
              <code>http</code>
            </li>
            <li>Node.js global objects and utilities</li>
            <li>Support for CommonJS and ES Modules</li>
            <li>Most npm packages work out of the box</li>
          </ul>

          <p>
            However, Bun's compatibility is not perfect, and you may encounter
            issues with certain packages, particularly those that:
          </p>

          <ul>
            <li>Use native Node.js addons or C++ extensions</li>
            <li>Rely on specific V8 features or internals</li>
            <li>Depend on Node.js modules that Bun hasn't fully implemented</li>
          </ul>

          <p>
            This compatibility gap is narrowing with each release as Bun
            continues to implement more of the Node.js API, but it remains an
            important consideration when evaluating whether to switch.
          </p>

          <h3>3. Developer Experience</h3>

          <p>
            Bun positions itself as an all-in-one JavaScript toolkit,
            integrating features that typically require separate tools in the
            Node.js ecosystem:
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Node.js Approach</th>
                  <th>Bun Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Package Management</td>
                  <td>npm, yarn, or pnpm</td>
                  <td>Built-in package manager</td>
                </tr>
                <tr>
                  <td>Bundling</td>
                  <td>webpack, Rollup, esbuild, etc.</td>
                  <td>Built-in bundler</td>
                </tr>
                <tr>
                  <td>Testing</td>
                  <td>Jest, Mocha, etc.</td>
                  <td>Built-in test runner</td>
                </tr>
                <tr>
                  <td>TypeScript Support</td>
                  <td>Requires ts-node or compilation step</td>
                  <td>Native TypeScript support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            This integrated approach can significantly streamline the
            development workflow. For example, running a TypeScript file in Bun
            is as simple as:
          </p>

          <div className="code-block">
            <pre>
              <code>{`// Just run it directly - no compilation step needed
bun run app.ts`}</code>
            </pre>
          </div>

          <p>The same task in Node.js typically requires additional steps:</p>

          <div className="code-block">
            <pre>
              <code>{`// Node.js approach
npm install typescript ts-node --save-dev
npx ts-node app.ts

// Or compile first, then run
npx tsc app.ts
node app.js`}</code>
            </pre>
          </div>

          <h3>4. Package Management</h3>

          <p>
            Bun includes its own package manager that's largely compatible with
            npm but offers significantly faster installation times. The syntax
            is familiar to npm users:
          </p>

          <div className="code-block">
            <pre>
              <code>{`# Install dependencies
bun install

# Add a new package
bun add express

# Remove a package
bun remove lodash`}</code>
            </pre>
          </div>

          <p>
            Benchmarks show that Bun's package manager can be up to 30x faster
            than npm in certain scenarios, particularly when installing large
            dependencies. This speed advantage can significantly improve
            developer experience and CI/CD pipeline performance.
          </p>

          <h2>When to Choose Node.js</h2>

          <p>
            Despite Bun's impressive performance and features, Node.js remains
            the more mature and battle-tested option. Here are scenarios where
            Node.js might be the better choice:
          </p>

          <ul>
            <li>
              <strong>Production-critical applications</strong>: Node.js has
              been thoroughly tested in production environments for years, with
              a proven track record of stability
            </li>
            <li>
              <strong>Complex applications with specific dependencies</strong>:
              If your application relies on packages with native extensions or
              specific Node.js features
            </li>
            <li>
              <strong>Team familiarity</strong>: If your team is already
              experienced with Node.js and its ecosystem
            </li>
            <li>
              <strong>Specific deployment environments</strong>: Some hosting
              platforms may not yet support Bun
            </li>
            <li>
              <strong>Legacy applications</strong>: For maintaining or extending
              existing Node.js applications
            </li>
          </ul>

          <h2>When to Choose Bun</h2>

          <p>
            Bun excels in several scenarios and might be the superior choice
            when:
          </p>

          <ul>
            <li>
              <strong>Performance is critical</strong>: For applications where
              speed, especially startup time and HTTP request handling, is a top
              priority
            </li>
            <li>
              <strong>New projects</strong>: When starting a new project without
              legacy code constraints
            </li>
            <li>
              <strong>TypeScript-heavy development</strong>: Bun's native
              TypeScript support simplifies the workflow
            </li>
            <li>
              <strong>Simpler tooling setup</strong>: When you prefer an
              all-in-one solution rather than configuring multiple tools
            </li>
            <li>
              <strong>Microservices</strong>: Bun's fast startup time makes it
              excellent for serverless and microservice architectures
            </li>
          </ul>

          <h2>Migrating from Node.js to Bun</h2>

          <p>
            If you're considering migrating an existing Node.js application to
            Bun, here's a pragmatic approach:
          </p>

          <ol>
            <li>
              <strong>Compatibility testing</strong>: Start by running your
              application with Bun to identify compatibility issues
            </li>
            <li>
              <strong>Incremental adoption</strong>: Consider using Bun for
              specific parts of your application before a complete migration
            </li>
            <li>
              <strong>Update dependencies</strong>: Check if any of your
              dependencies have Bun-specific issues and look for alternatives if
              necessary
            </li>
            <li>
              <strong>Performance benchmarking</strong>: Measure the performance
              improvement to ensure the migration is worthwhile
            </li>
          </ol>

          <div className="code-block">
            <pre>
              <code>{`// Example of a simple compatibility test script
// Save as compatibility-test.js and run with both runtimes

// Test file system operations
const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello World');
const content = fs.readFileSync('test.txt', 'utf8');
console.log('File content:', content);
fs.unlinkSync('test.txt');

// Test HTTP client
const https = require('https');
const req = https.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('API response:', JSON.parse(data));
  });
});

req.on('error', (e) => {
  console.error('Request failed:', e);
});

// Run with:
// node compatibility-test.js
// bun compatibility-test.js`}</code>
            </pre>
          </div>

          <h2>Performance Benchmarks</h2>

          <p>
            To provide a concrete comparison, here are some performance
            benchmarks comparing Node.js (v20) and Bun (v1.0.25) across common
            operations:
          </p>

          <ul>
            <li>
              <strong>HTTP Server (requests/sec)</strong>: Bun outperforms
              Node.js by 1.5-2x
            </li>
            <li>
              <strong>Startup time</strong>: Bun starts approximately 4x faster
              than Node.js
            </li>
            <li>
              <strong>File system operations</strong>: Bun is about 1.3x faster
              for most I/O operations
            </li>
            <li>
              <strong>Package installation</strong>: Bun can be up to 30x faster
              than npm
            </li>
          </ul>

          <p>
            These benchmarks vary based on specific workloads and hardware, but
            the general trend shows Bun's performance advantage across most
            operations.
          </p>

          <h2>The Future of JavaScript Runtimes</h2>

          <p>
            The emergence of Bun and other alternatives like Deno signals a new
            era of innovation in JavaScript runtimes. This healthy competition
            benefits the entire ecosystem by:
          </p>

          <ul>
            <li>
              <strong>Driving performance improvements</strong>: Node.js has
              accelerated its performance optimization efforts in response to
              Bun
            </li>
            <li>
              <strong>Improving developer experience</strong>: All runtimes are
              focusing more on simplifying workflows and reducing friction
            </li>
            <li>
              <strong>Expanding use cases</strong>: New capabilities are
              enabling JavaScript to be used in more contexts than ever before
            </li>
          </ul>

          <p>
            Rather than viewing this as a winner-takes-all competition, it's
            more productive to see these runtimes as specialized tools with
            different strengths. The future likely includes multiple JavaScript
            runtimes coexisting in the ecosystem, with developers choosing the
            best tool for each specific use case.
          </p>

          <h2>Conclusion</h2>

          <p>
            The choice between Node.js and Bun doesn't have to be binary. As
            with many technology decisions, context matters. Node.js continues
            to excel as a mature, battle-tested runtime with unmatched ecosystem
            support, while Bun offers exciting performance improvements and
            developer experience enhancements that make it attractive for many
            use cases.
          </p>

          <p>
            For new projects where performance is critical, Bun presents a
            compelling option that will likely continue to improve. For existing
            production applications, Node.js remains a reliable choice, though
            incremental adoption of Bun for specific components might be worth
            exploring.
          </p>

          <p>
            What's most exciting is how this competitive landscape is driving
            innovation across the entire JavaScript ecosystem. No matter which
            runtime you choose today, you'll benefit from the rapid pace of
            improvements happening throughout the JavaScript world. As always in
            technology, the best approach is to stay informed, experiment with
            new tools, and make decisions based on your specific project
            requirements rather than hype or dogma.
          </p>
        </div>

        <div className="blog-author">
          <div className="blog-author-image">
            <img src="/api/placeholder/60/60" alt="Author" />
          </div>
          <div className="blog-author-info">
            <h3>Sam Patel</h3>
            <p>
              Backend Developer & JavaScript Ecosystem Specialist based in
              Berlin, Germany
            </p>
          </div>
        </div>

        <footer className="blog-footer">
          <div className="blog-tags">
            <span>Node.js</span>
            <span>Bun</span>
            <span>JavaScript</span>
            <span>Backend</span>
            <span>Performance</span>
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
          font-weight: 600;
          margin: 30px 0 16px;
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

        .comparison-table {
          overflow-x: auto;
          margin: 25px 0;
        }

        .comparison-table table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .comparison-table th {
          background-color: #222;
          padding: 12px 15px;
          font-weight: 600;
        }

        .comparison-table td {
          padding: 10px 15px;
          border-bottom: 1px solid #333;
        }

        .comparison-table tr:hover {
          background-color: #111;
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

export default Three;
