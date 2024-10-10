import React from "react";
import { Helmet } from "react-helmet";

const Two = () => {
  return (
    <>
      <Helmet>
        <title>How to Use Framer Motion | React Animation Tutorial</title>
        <meta
          name="description"
          content="A guide on how to use Framer Motion for animations in React applications."
        />
        <meta name="author" content="Marco Ramcharan, Miguel Ramcharan" />
        <meta
          name="keywords"
          content="framer motion, React animation, react animations, codebymarco, miguelmarco ramcharan, marco ramcharan, miguel ramcharan, ramcharan"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="How to Use Framer Motion | React Animation Tutorial"
        />
        <meta
          property="og:description"
          content="Learn how to add animations in React using Framer Motion."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/framer-motion-tutorial"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/thumbnail.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How to Use Framer Motion | React Animation Tutorial"
        />
        <meta
          name="twitter:description"
          content="A comprehensive guide on adding animations to your React projects using Framer Motion."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/thumbnail.jpg"
        />
      </Helmet>
      <div className="blog-container">
        <span>October 10, 2024</span>
        <p>by codebymarco</p>
        <h1 className="blog-title">
          How to Add Animations with Framer Motion in Your React Projects
        </h1>
        <img
          src="https://th.bing.com/th/id/OIP.gQMUJI0s6gDOG0Ys7rTx-gHaEK?rs=1&pid=ImgDetMain"
          alt="Framer Motion Overview"
          className="blog-image"
        />

        <div className="blog-section">
          <h2>Table of Contents</h2>
          <ul>
            <li>
              <a to="#what-is-framer-motion">What is Framer Motion?</a>
            </li>
            <li>
              <a to="#why-use-framer-motion">Why Use Framer Motion?</a>
            </li>
            <li>
              <a to="#setting-up">Setting Up Framer Motion</a>
            </li>
            <li>
              <a to="#basic-animation">Creating Basic Animations</a>
            </li>
            <li>
              <a to="#animation-controls">Using Animation Controls</a>
            </li>
            <li>
              <a to="#variants">Using Variants for Reusable Animations</a>
            </li>
            <li>
              <a to="#gestures">Animating with Gestures</a>
            </li>
            <li>
              <a to="#layout-animations">Layout Animations</a>
            </li>
          </ul>
        </div>

        <div className="blog-section" id="what-is-framer-motion">
          <h2>What is Framer Motion?</h2>
          <p>
            Framer Motion is a powerful animation library for React. It makes it
            easy to create animations and transitions, offering a simple API
            while maintaining flexibility. Framer Motion works well for both
            basic and complex animations, supporting keyframes, spring physics,
            and more.
          </p>
        </div>

        <div className="blog-section" id="why-use-framer-motion">
          <h2>Why Use Framer Motion?</h2>
          <ul>
            <li>Declarative and easy to use.</li>
            <li>Provides smooth, high-performance animations.</li>
            <li>Built-in support for gestures and layout transitions.</li>
            <li>Great flexibility for advanced animation scenarios.</li>
          </ul>
        </div>

        <div className="blog-section" id="setting-up">
          <h2>Setting Up Framer Motion</h2>
          <p>First, install Framer Motion in your project:</p>
          <pre>
            <code>npm install framer-motion</code>
          </pre>
          <p>
            Then, import the components you need from Framer Motion, such as
            `motion`:
          </p>
          <pre>
            <code>{`import { motion } from 'framer-motion';`}</code>
          </pre>
        </div>

        <div className="blog-section" id="basic-animation">
          <h2>Creating Basic Animations</h2>
          <p>
            You can animate elements by wrapping them in `motion` components and
            specifying animation properties like `initial`, `animate`, and
            `transition`. Here’s an example:
          </p>
          <pre>
            <code>{`<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  Hello, World!
</motion.div>`}</code>
          </pre>
          <img
            src="https://th.bing.com/th/id/OIP.gQMUJI0s6gDOG0Ys7rTx-gHaEK?rs=1&pid=ImgDetMain"
            alt="Basic Animation Example"
            className="blog-image"
          />
        </div>

        <div className="blog-section" id="animation-controls">
          <h2>Using Animation Controls</h2>
          <p>
            Framer Motion allows you to control animations programmatically
            using the `useAnimation` hook. This gives you fine-grained control
            over when and how animations start:
          </p>
          <pre>
            <code>{`import { useAnimation } from 'framer-motion';

function MyComponent() {
  const controls = useAnimation();

  return (
    <motion.div
      animate={controls}
      onClick={() => controls.start({ x: 100 })}
    >
      Click me to move!
    </motion.div>
  );
}`}</code>
          </pre>
        </div>

        <div className="blog-section" id="variants">
          <h2>Using Variants for Reusable Animations</h2>
          <p>
            Variants allow you to define multiple animation states in one
            place. This makes it easy to reuse animations across components.
            Here's an example of how to create and use variants:
          </p>
          <pre>
            <code>{`const boxVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

<motion.div
  variants={boxVariants}
  initial="hidden"
  animate="visible"
/>`}</code>
          </pre>
        </div>

        <div className="blog-section" id="gestures">
          <h2>Animating with Gestures</h2>
          <p>
            Framer Motion provides built-in support for animating gestures like
            drag, hover, and tap. This makes it easy to create interactive
            components. Here’s how to animate an element when it’s dragged:
          </p>
          <pre>
            <code>{`<motion.div
  drag
  whileDrag={{ scale: 1.2 }}
>
  Drag me!
</motion.div>`}</code>
          </pre>
        </div>

        <div className="blog-section" id="layout-animations">
          <h2>Layout Animations</h2>
          <p>
            Framer Motion also provides layout animations, which automatically
            animate between layout changes. This can be used for smooth
            transitions when elements are added or removed from the DOM.
          </p>
          <pre>
            <code>{`<motion.div layout>
  This element will animate its position when the layout changes.
</motion.div>`}</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default Two;
