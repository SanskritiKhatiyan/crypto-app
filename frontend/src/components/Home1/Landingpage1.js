import React from "react";
import "./landingpage.css";
import HomeImage from "../../assets/landingone.svg";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

const Landingpage1 = () => {
  return (
    <div className="parent-outer-div">
      <div className="parent-inner-div-1">
        <div className="parent-inner-text">
          <div className="parent-inner-text-1">
            <Fade right>
              <div className="parent-inner-image">
                <img src={HomeImage} alt="alt" />
              </div>
            </Fade>
            <Fade left>
              <p>Manage and Track your Crypto.</p>
              <p>Safely and Simply.</p>
              <p>All in one Place.</p>
            </Fade>
          </div>
          <Fade left>
            <div className="parent-inner-text-2">
              <p>Setup your account in less than 3 minutes</p>
              <p>and manage your crypto assets securely</p>
            </div>
            <NavLink to="/coins">
              <div className="parent-inner-button-1">
                Get Started
                <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-3.png" />
              </div>
            </NavLink>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Landingpage1;
