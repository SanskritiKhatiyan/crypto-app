import React from "react";
import "./LandingPage_3.css";
import CreateUser from "../../assets/create-user.png";
import CryptoImage from "../../assets/crypto.png";
import WatchlistImage from "../../assets/watchlist.png";
import Step1 from "../../assets/step1.png";
import Step2 from "../../assets/step2.png";
import Step3 from "../../assets/step3.png";
import DotedLine from "../../assets/doted-line.png";
import { IconButton } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

const LandingPage_3 = () => {
  return (
    <div className="landing-page-wrapper">
      <Fade bottom>
        <div className="landing__container">
          <img className="doted-line1" src={DotedLine} alt="doted line" />
          <div className="landing__heading">
            <p className="landing_heading_text">
              Get started with in a few minutes
            </p>
            <p className="landing__text">
              Crypto app supports a variety of the most popular digital
              currencies.
            </p>
          </div>
          <div className="start-menu__container">
            <img className="doted-line2" src={DotedLine} alt="doted line" />
            <NavLink to="/signup">
              <div className="start-menu__icon">
                {/* <IconButton> */}
                <img src={CreateUser} alt="icon" />
                {/* </IconButton> */}
                <p className="start-menu__text">Create an account</p>
                <img className="step" src={Step1} alt="step image1" />
              </div>
            </NavLink>

            <NavLink to="/watchlist">
              <div className="start-menu__icon">
                {/* <IconButton> */}
                <img src={WatchlistImage} alt="icon" />
                {/* </IconButton> */}
                <p className="start-menu__text">Add to watchlist</p>
                <img className="step" src={Step2} alt="step image2" />
              </div>
            </NavLink>

            <NavLink to="/coins">
              <div className="start-menu__icon">
                {/* <IconButton> */}
                <img src={CryptoImage} alt="icon" />
                {/* </IconButton> */}
                <p className="start-menu__text">Enjoy crypto app</p>
                <img className="step" src={Step3} alt="step image3" />
              </div>
            </NavLink>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default LandingPage_3;
