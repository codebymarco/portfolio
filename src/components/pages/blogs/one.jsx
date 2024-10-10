import React from "react";
import { Helmet } from "react-helmet";
import "../../../styles/blogs.css"
import { Link } from "react-router-dom";

const One = () => {
  return (
    <>
      <Helmet>
        <title>How to Use react-router-dom | React Tutorial</title>
        <meta
          name="description"
          content="A guide on how to use react-router-dom in React applications."
        />
        <meta name="author" content="Marco Ramcharan, Miguel Ramcharan" />
        <meta
          name="keywords"
          content="react-router-dom, React tutorial, codebymarco, miguelmarco ramcharan, marco ramcharan, miguel ramcharan, ramcharan"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="How to Use react-router-dom | React Tutorial"
        />
        <meta
          property="og:description"
          content="Learn how to navigate between pages in React using react-router-dom."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/react-router-dom-tutorial"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/thumbnail.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How to Use react-router-dom | React Tutorial"
        />
        <meta
          name="twitter:description"
          content="A comprehensive guide on using react-router-dom for navigation in React."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/thumbnail.jpg"
        />
      </Helmet>
      <div className="blog-container">
      <span>October 10, 2024</span>
        <Link to='/blog'>blogs</Link>
        <p><a href="http://localhost:5173">by codebymarco</a></p>
        <h1 className="blog-title">
          How to Use `react-router-dom` in Your React Projects
        </h1>
        <img
          src="https://th.bing.com/th/id/OIP.gQMUJI0s6gDOG0Ys7rTx-gHaEK?rs=1&pid=ImgDetMain"
          alt="React Router Overview"
          className="blog-image"
        />

        <div className="blog-section">
          <h2>Table of Contents</h2>
          <ul>
            <li>
              <a to="#what-is-react-router-dom">What is `react-router-dom`?</a>
            </li>
            <li>
              <a to="#why-use-react-router-dom">Why Use `react-router-dom`?</a>
            </li>
            <li>
              <a to="#setting-up">Setting Up `react-router-dom`</a>
            </li>
            <li>
              <a to="#creating-routes">Creating Routes</a>
            </li>
            <li>
              <a to="#using-link">Using `Link` for Navigation</a>
            </li>
            <li>
              <a to="#nested-routes">Handling Nested Routes</a>
            </li>
            <li>
              <a to="#programmatic-navigation">Programmatic Navigation</a>
            </li>
            <li>
              <a to="#seo-optimization">
                Optimizing SEO with `react-router-dom`
              </a>
            </li>
          </ul>
        </div>

        <div className="blog-section" id="what-is-react-router-dom">
          <h2>What is `react-router-dom`?</h2>
          <p>
            <code>react-router-dom</code> is the standard routing library for
            React. It allows you to manage navigation and rendering of different
            components based on the URL without reloading the page. This makes
            your app fast and fluid, giving it that SPA feel.
          </p>
          {/*           <img
            src="https://th.bing.com/th/id/OIP.gQMUJI0s6gDOG0Ys7rTx-gHaEK?rs=1&pid=ImgDetMain"
            alt="React Router Overview"
            className="blog-image"
          /> */}
        </div>

        <div className="blog-section" id="why-use-react-router-dom">
          <h2>Why Use `react-router-dom`?</h2>
          <ul>
            <li>Dynamic Routing for changing views based on URLs.</li>
            <li>SEO-friendly when combined with SSR frameworks.</li>
            <li>Simple API for easy navigation.</li>
          </ul>
        </div>

        <div className="blog-section" id="setting-up">
          <h2>Setting Up `react-router-dom`</h2>
          <p>Install `react-router-dom` in your project:</p>
          <pre>
            <code>npm install react-router-dom</code>
          </pre>
          <p>Wrap your application inside the `BrowserRouter` component:</p>
          <pre>
            <code>{`import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Your Routes and Components */}
    </Router>
  );
}
export default App;`}</code>
          </pre>
        </div>

        <div className="blog-section" id="creating-routes">
          <h2>Creating Routes</h2>
          <p>Here’s how to create basic routes for your app:</p>
          <pre>
            <div className="top">file.jsx</div>
            <code>{`import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}`}</code>
          </pre>
          <img
            src="https://th.bing.com/th/id/OIP.gQMUJI0s6gDOG0Ys7rTx-gHaEK?rs=1&pid=ImgDetMain"
            alt="Routing Example"
            className="blog-image"
          />
        </div>

        <div className="blog-section" id="using-link">
          <h2>Using `Link` for Navigation</h2>
          <p>Replace anchor tags with `Link` for client-side navigation:</p>
          <pre>
            <code>{`import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}`}</code>
          </pre>
        </div>

        <div className="blog-section" id="nested-routes">
          <h2>Handling Nested Routes</h2>
          <pre>
            <code>{`function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="stats" element={<Stats />} />
    </Routes>
  );
}`}</code>
          </pre>
        </div>

        <div className="blog-section" id="programmatic-navigation">
          <h2>Programmatic Navigation</h2>
          <p>Use the `useNavigate` hook for programmatic navigation:</p>
          <pre>
            <code>{`import { useNavigate } from 'react-router-dom';

function FormComponent() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/success');
  };

  return <button onClick={handleSubmit}>Submit</button>;
}`}</code>
          </pre>
        </div>

        <div className="blog-section" id="seo-optimization">
          <h2>Optimizing SEO with `react-router-dom`</h2>
          <p>Use `react-helmet` to dynamically manage meta tags:</p>
          <pre>
            <code>{`import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="Learn more about our services" />
      </Helmet>
      <h1>About Us</h1>
      <p>Welcome to our about page!</p>
    </>
  );
}`}</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default One;
