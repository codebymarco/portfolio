import React from "react";
import { Helmet } from "react-helmet";

const Five = () => {
  return (
    <>
      <Helmet>
        <title>Getting Started with NodeJS and ExpressJS</title>
        <meta
          name="description"
          content="An introduction to NodeJS and ExpressJS, explaining their use cases and how to set up a basic web server."
        />
        <meta name="author" content="Your Name" />
        <meta
          name="keywords"
          content="NodeJS, ExpressJS, web development, back-end framework, JavaScript"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Getting Started with NodeJS and ExpressJS"
        />
        <meta
          property="og:description"
          content="Learn how to build a web server using NodeJS and ExpressJS in this beginner-friendly guide."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/nodejs-expressjs-tutorial"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/node-express-thumbnail.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Getting Started with NodeJS and ExpressJS"
        />
        <meta
          name="twitter:description"
          content="A step-by-step guide to building a web server with NodeJS and ExpressJS."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/node-express-thumbnail.jpg"
        />
      </Helmet>
      <div className="blog-container">
        <span>October 10, 2024</span>
        <p>by Your Name</p>
        <h1 className="blog-title">
          Getting Started with NodeJS and ExpressJS
        </h1>
        <img
          src="https://yourwebsite.com/node-express-thumbnail.jpg"
          alt="Node and Express"
          className="blog-image"
        />

        <div className="blog-section">
          <h2>Introduction to NodeJS</h2>
          <p>
            NodeJS is a powerful JavaScript runtime built on Chrome's V8 engine,
            designed for building scalable network applications. It allows
            developers to use JavaScript to build back-end services.
          </p>
        </div>

        <div className="blog-section">
          <h2>What is ExpressJS?</h2>
          <p>
            ExpressJS is a lightweight web application framework built on top of
            NodeJS. It simplifies the process of building web servers and APIs,
            offering a flexible routing system and middleware for handling
            requests and responses.
          </p>
        </div>

        <div className="blog-section">
          <h2>Setting Up a Simple Server</h2>
          <p>
            Here's a simple example of how to set up a web server with NodeJS
            and ExpressJS:
          </p>
          <pre>
            <code>{`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`}</code>
          </pre>
        </div>

        <div className="blog-section">
          <h2>Conclusion</h2>
          <p>
            NodeJS and ExpressJS make it easy to build scalable and fast web
            applications. With just a few lines of code, you can create a
            powerful web server that serves dynamic content.
          </p>
        </div>
      </div>
    </>
  );
};

export default Five;
