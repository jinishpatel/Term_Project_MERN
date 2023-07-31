import "./css/heroImg.css";
import IntoImg from "../assets/back2.jpeg";
import { Link } from "react-router-dom";
import hire from "../assets/hire-me.json";
import Lottie from "lottie-react";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="in-img" src={IntoImg} alt="Intro Image"></img>
      </div>
      <div className="content">
        <p>
          Hello ! I am Jinish Patel, <b>Mern</b> Stack Developer
        </p>
        <h1>MongoDB Express React Node.js</h1>
        <div className="button-group">
          <Link to="/Project" className="btn primary">
            Project
          </Link>
          <Link to="/Project" className="btn">
            About
          </Link>
        </div>
      </div>
      <Lottie className="lottie-hire" animationData={hire} />
    </div>
  );
};

export default HeroImg;
