import yapic from "../img/yapic.jpg";
import "../css/Home.css";
import resume from "../docs/Resume-YA.pdf";

import { FaFilePdf, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-content">
      <div className="img-container">
        <img src={yapic} alt="Yakub Ahmed" className="profile-picture" />
        <ul className="social-links">
          <li>
            <p className="linkscon">
              <a href={resume} target="_blank" rel="noreferrer">
                <FaFilePdf /> Resume
              </a>
            </p>
          </li>
          <li>
            <p className="linkscon">
              <a
                href="https://www.linkedin.com/in/yakub-ahmed-93573124a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div className="container-home-content">
        <h2>Hi there, I'm Yakub.</h2>
        <h3>
          I'm a Structural Engineer and a Masters student graduating in February
          2026 form the Czech Technical University in Prague.
        </h3>

        <p>
          I enjoy designing and implementing structural systems. When I'm not
          stydying or working, I also enjoy going to the gym, playing soccer,
          skiing and golfing.
        </p>
        <p style={{ marginBottom: "0px" }}>Fun facts about me:</p>
        <ul style={{ marginTop: "0px" }}>
          <li>My handicap is 50.8.</li>
          <li>
            I speak fluently in English, Czech and intermediate in German.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
