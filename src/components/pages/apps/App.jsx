import { Link } from "react-router-dom";
import "../../../styles/app.css";
const App = () => {
  return (
    <div className="app">
      <div className="app-nav">
        <Link to="/">apps/appname</Link>
      </div>
      <div className="app-top">
        <h1>appname</h1>
      </div>
      <div className="app-container">
        <div className="app-photo"></div>
        <div className="app-detials">
          <div className="app-details-box description">
            <h2>description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              ducimus ab consectetur quis. Dolor, nulla molestias culpa porro
              ipsa quidem labore! Repellat vero tempore laboriosam quo molestiae
              natus fugit facere!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              ducimus ab consectetur quis. Dolor, nulla molestias culpa
              porroere!
            </p>
          </div>
          <div className="divider"></div>

          <div className="app-details-box">
            <h2>technolgies used</h2>
            <div className="app-detials-box-technologies">
              <div className="box">html</div>
              <div className="box">css</div>
              <div className="box">typescript</div>
              <div className="box">node</div>
              <div className="box">nosql</div>
              <div className="box">mongodb</div>
              <div className="box">rabbitmq</div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="app-details-box">
            <h2>hosting</h2>
            <div className="app-detials-box-technologies">
              <div className="box">vercel</div>
              <div className="box">render</div>
              <div className="box">mongoatls</div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="app-details-box">
            <h2>links</h2>
            <div className="app-detials-box-technologies">
              <div className="box">live app</div>
              <div className="box">git repo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
