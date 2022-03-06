import React from "react";
import "./Landingpage4.css";
import cryptoeveryone from "../../assets/everyone.png";
import Fade from "react-reveal/Fade";

const Landingpage4 = () => {
  return (
    <div>
      <div className="parent-outer-div4">
        <Fade left>
          <div className="parent-outer-div-img">
            <img src={cryptoeveryone} alt="alt" />
          </div>
        </Fade>
        <Fade up>
          <div className="parent-outer-div-head">
            <p>
              Built for <span className="text-hilight"> Everyone!</span>
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className="parent-outer-div-lower">
            <p>
              If you are new to cryptocurrency or just getting started, have no
              fear,<span className="text-hilight"> Cryptoapp </span> is designed
              to suit everyone from beiginners to advance crypto enthusiast
              alike. We are super excited to have you on board.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Landingpage4;
