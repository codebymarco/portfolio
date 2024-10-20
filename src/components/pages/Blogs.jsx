import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/blogs.css";

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="blogs">
      <div className="blogs-top">
        <h1><Link to="/">codebymarco</Link> Blog Posts</h1>
        <span>Blog posts related about coding.</span>
      </div>
      <div className="blogs-container">
        <div className="blog-box" onClick={() => navigate("/blog/one")}>
          <img
            src="https://th.bing.com/th/id/OIP.CL3NWeSOYZdBlHoOJTI0YAHaDt?rs=1&pid=ImgDetMain"
            alt=""
          />
          <div className="absol">
            <span>July 22, 2024</span>
            <h1>How to use react-router-dom with react</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nesciunt?
            </p>
          </div>
        </div>
        <div className="blog-box" onClick={() => navigate("/blog/one")}>
          <img
            src="https://th.bing.com/th/id/OIP.lpwCbwWc4fibaM_c_Bf5DgAAAA?rs=1&pid=ImgDetMain"
            alt=""
          />
          <div className="absol">
            <span>July 22, 2024</span>
            <h1>How to use framer-motion with react</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nesciunt?
            </p>
          </div>
        </div>
        <div className="blog-box" onClick={() => navigate("/blog/three")}>
          <img
            src="https://th.bing.com/th/id/OIP.dJ2gr5HhBFC-kV17H1MOxQHaHa?rs=1&pid=ImgDetMain"
            alt=""
          />
          <div className="absol">
            <span>July 22, 2024</span>
            <h1>How to use react-icons with react</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nesciunt?
            </p>
          </div>
        </div>
        <div className="blog-box" onClick={() => navigate("/blog/four")}>
          <img
            src="https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain"
            alt=""
          />
          <div className="absol">
            <span>July 22, 2024</span>
            <h1>How to use reactjs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nesciunt?
            </p>
          </div>
        </div>
        <div className="blog-box" onClick={() => navigate("/blog/five")}>
          <img
            src="https://th.bing.com/th/id/OIP.NWq0zbKthWHzAt1LsqgNtAHaGL?rs=1&pid=ImgDetMain"
            alt=""
          />
          <div className="absol">
            <span>July 22, 2024</span>
            <h1>Reactjs vs Vuejs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nesciunt?
            </p>
          </div>
        </div>
        <div className="blog-box" onClick={() => navigate("/blog/six")}>
          <img
            src="https://th.bing.com/th/id/R.0886779176db12da5565ca4b9541e2b8?rik=2uKb88XQZQyXJw&pid=ImgRaw&r=0"
            alt=""
          />
          <div className="absol">
            <span>July 22, 2024</span>
            <h1>Nodejs and expressjs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nesciunt?
            </p>
          </div>
        </div>
        <div className="blog-box" onClick={() => navigate("/blog/seven")}>
          <img
            src="https://th.bing.com/th/id/R.0886779176db12da5565ca4b9541e2b8?rik=2uKb88XQZQyXJw&pid=ImgRaw&r=0"
            alt=""
          />
          <div className="absol">
            <span>July 22, 2024</span>
            <h1>Nodejs middlewear</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nesciunt?
            </p>
          </div>
        </div>
        <div className="blog-box" onClick={() => navigate("/blog/eight")}>
          <img
            src="https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain"
            alt=""
          />
          <div className="absol">
            <span>July 22, 2024</span>
            <h1>How to handle state in React</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nesciunt?
            </p>
          </div>
        </div>
        <div className="blog-box" onClick={() => navigate("/blog/nine")}>
          <img
            src="https://plainenglish.io/assets/post-content/using-zustand-and-typescript-to-make-a-to-do-list-in-react.webp"
            alt=""
          />
          <div className="absol">
            <span>July 22, 2024</span>
            <h1>React State Managment using Zustand</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nesciunt?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
