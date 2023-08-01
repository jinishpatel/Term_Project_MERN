import "./heroImg.css";

import shop from "../../assets/animation_lkq9injj.json";
import Lottie from "lottie-react";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <Lottie className="in-img" animationData={shop} />
      </div>
    </div>
  );
};

export default HeroImg;
