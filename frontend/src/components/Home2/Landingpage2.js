import React from "react";
import "./landingpage2.css";
import btcimage from "../../assets/portfolio-cyrpto.png";
import Fade from "react-reveal/Fade";

const landingpage2 = () => {
  return (
    <div className="parent-head">
      <Fade right>
        <div className="tracker-img">
          <img src={btcimage} alt="portfolioimg" />
        </div>
        <div className="parent-head-text">
          <p>Access all your crypto from one screen </p>
        </div>
        <div className="parent-lower-text-1">
          <p>
            Track, analyze and get market insights for Bitcoin and over 8000
            other coins.
          </p>
          <p>
            Use a cryptotracker that ensures instant visibility and the comfort
            of a smart interface. Manage your whole crypto portfolio. All in one
            place.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default landingpage2;
