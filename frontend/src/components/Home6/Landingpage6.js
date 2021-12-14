import React from "react";
import "./Landingpage6.css";
import WatchListMan from "../../assets/WatchListMan.png";
import WatchListButtonIcon from "../../assets//watchlist-button-icon.png";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import { NavLink } from "react-router-dom";

const LandingPage_6 = () => {
  return (
    <div className="landing-page5__wrapper">
      <div className="landing-page5__container">
        <Fade right>
          <img src={WatchListMan} alt="add to watchlist" />
        </Fade>
        <Fade left>
          <div className="landing-page5__text">
            <h2>
              <span className="text-hilight">Watchlist</span> to easily Track &
              Manage
            </h2>
            <p>
              By using your crypto{" "}
              <span className="text-hilight">watchlist </span> within the app
              you can easily track your holdings and wallet values in one simple
              view. Directly access your bitcoin wallet to view your recent
              order history, easily send & receive directly from the app, and
              view your recent send and receive transactions.
            </p>
            <NavLink to="/watchlist">
              <div className="watchlist__button">
                <LightSpeed left>
                  Watchlist
                  <img
                    className="watchlist-button__icon"
                    src={WatchListButtonIcon}
                    alt="watchlist-button-icon"
                  />
                </LightSpeed>
              </div>
            </NavLink>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default LandingPage_6;
