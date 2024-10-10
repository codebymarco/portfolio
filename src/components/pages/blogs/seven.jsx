import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Seven = () => {
  return (
    <>
      <Helmet>
        <title>How to Manage State in React | React Tutorial</title>
        <meta
          name="description"
          content="A guide on how to manage state in React applications."
        />
        <meta name="author" content="Marco Ramcharan, Miguel Ramcharan" />
        <meta
          name="keywords"
          content="state in React, React state management, useState, useReducer, codebymarco, miguelmarco ramcharan"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="How to Manage State in React | React Tutorial"
        />
        <meta
          property="og:description"
          content="Learn how to handle state in React applications using built-in hooks."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/react-state-tutorial"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/thumbnail.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How to Manage State in React | React Tutorial"
        />
        <meta
          name="twitter:description"
          content="A comprehensive guide on managing state in React."
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
        <h1 className="blog-title">Managing State in React Projects</h1>
        <img
          src="https://th.bing.com/th/id/OIP.gQMUJI0s6gDOG0Ys7rTx-gHaEK?rs=1&pid=ImgDetMain"
          alt="React State Management"
          className="blog-image"
        />

        <div className="blog-section">
          <h2>Table of Contents</h2>
          <ul>
            <li><a to="#what-is-state-in-react">What is State in React?</a></li>
            <li><a to="#why-use-state">Why Use State in React?</a></li>
            <li><a to="#using-usestate">Using `useState` Hook</a></li>
            <li><a to="#managing-complex-state">Managing Complex State with `useReducer`</a></li>
            <li><a to="#lifting-state">Lifting State Up</a></li>
            <li><a to="#managing-global-state">Managing Global State</a></li>
            <li><a to="#best-practices">Best Practices for State Management</a></li>
          </ul>
        </div>

        <div className="blog-section" id="what-is-state-in-react">
          <h2>What is State in React?</h2>
          <p>
            In React, <strong>state</strong> refers to data that can change over time, which affects the rendering of components. React allows you to manage this state within components using hooks such as <code>useState</code> or more advanced methods like <code>useReducer</code>.
          </p>
        </div>

        <div className="blog-section" id="why-use-state">
          <h2>Why Use State in React?</h2>
          <p>
            State allows React components to be interactive and dynamic. When a component's state changes, React automatically re-renders that component, updating the UI to reflect the new state.
          </p>
        </div>

        <div className="blog-section" id="using-usestate">
          <h2>Using `useState` Hook</h2>
          <p>
            The <code>useState</code> hook is the most common way to manage state in React functional components. It allows you to declare state variables and update them.
          </p>
          <pre>
            <code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}</code>
          </pre>
        </div>

        <div className="blog-section" id="managing-complex-state">
          <h2>Managing Complex State with `useReducer`</h2>
          <p>
            For more complex state logic, especially when state depends on previous values, <code>useReducer</code> is a powerful alternative. It helps manage state transitions in a predictable way.
          </p>
          <pre>
            <code>{`import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}`}</code>
          </pre>
        </div>

        <div className="blog-section" id="lifting-state">
          <h2>Lifting State Up</h2>
          <p>
            When multiple components need to share the same piece of state, you can "lift state up" to a common ancestor component and pass it down as props.
          </p>
          <pre>
            <code>{`function Parent() {
  const [sharedState, setSharedState] = useState('Hello');

  return (
    <div>
      <Child1 sharedState={sharedState} />
      <Child2 setSharedState={setSharedState} />
    </div>
  );
}

function Child1({ sharedState }) {
  return <p>{sharedState}</p>;
}

function Child2({ setSharedState }) {
  return <button onClick={() => setSharedState('World')}>Change State</button>;
}`}</code>
          </pre>
        </div>

        <div className="blog-section" id="managing-global-state">
          <h2>Managing Global State</h2>
          <p>
            When your app grows, managing global state becomes important. You can use tools like <code>Context API</code> or external libraries like <code>Redux</code> for global state management.
          </p>
          <pre>
            <code>{`import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [state, setState] = useState("Global State");

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

function ChildComponent() {
  const { state, setState } = useContext(AppContext);
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState('New Global State')}>Update State</button>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <ChildComponent />
    </AppProvider>
  );
}`}</code>
          </pre>
        </div>

        <div className="blog-section" id="best-practices">
          <h2>Best Practices for State Management</h2>
          <ul>
            <li>Minimize state. Only keep the data that you absolutely need.</li>
            <li>Lift state up when necessary, but not too high up in the component tree.</li>
            <li>Use Context API or state management libraries for large applications.</li>
            <li>Be mindful of performance by memoizing or batching state updates.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Seven;
