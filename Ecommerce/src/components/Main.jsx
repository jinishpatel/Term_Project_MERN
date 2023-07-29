import "./css/main.css";
import htmlpng from "../assets/html.png";
import csspng from "../assets/css.png";
import javascriptpng from "../assets/javascript.png";
import Reactpng from "../assets/react.png";
import TypeScriptPng from "../assets/typescript.png";

const Main = () => {
  return (
    <div className="main">
      <div className="tagline">
        <h1>Skills</h1>
      </div>
      <div className="skills-container">
        <div className="Left">
          <h1>FrontEnd Technologies</h1>
          <div className="technology-container">
            <div className="tech-name">
              <span>
                <img src={htmlpng} alt="csspng" />
                <h4>HTML</h4>
                <progress id="file" value="90" max="100"></progress>
              </span>
              <span>
                <img src={csspng} alt="csspng" />

                <h4>CSS</h4>
                <progress id="file" value="95" max="100"></progress>
              </span>{" "}
              <span>
                <img src={javascriptpng} alt="javascriptpng" />

                <h4>JavaScript</h4>
                <progress id="file" value="85" max="100"></progress>
              </span>{" "}
              <span>
                <img src={Reactpng} alt="Reactpng" />
                <h4>React</h4>
                <progress id="file" value="80" max="100"></progress>
              </span>{" "}
              <span>
                <img src={TypeScriptPng} alt="typescriptpng" />
                <h4>TypeScript</h4>
                <progress id="file" value="80" max="100"></progress>
              </span>
            </div>
          </div>
        </div>
        <div className="Right">
          <h1>BackEnd Technologies</h1>
          <div className="technology-container">
            <div className="tech-name">
              <span>
                <img src={htmlpng} alt="csspng" />
                <h4>Python</h4>
                <progress id="file" value="90" max="100"></progress>
              </span>
              <span>
                <img src={csspng} alt="csspng" />

                <h4>Java</h4>
                <progress id="file" value="90" max="100"></progress>
              </span>{" "}
              <span>
                <img src={javascriptpng} alt="javascriptpng" />

                <h4>NodeJs</h4>
                <progress id="file" value="90" max="100"></progress>
              </span>{" "}
              <span>
                <img src={Reactpng} alt="Reactpng" />
                <h4>ExpressJs</h4>
                <progress id="file" value="90" max="100"></progress>
              </span>{" "}
              <span>
                <img src={TypeScriptPng} alt="typescriptpng" />
                <h4>C#</h4>
                <progress id="file" value="90" max="100"></progress>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
