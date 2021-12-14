import React from "react";
import "./landingpage5.css";
import newsimg from "../../assets/news.svg";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import { NavLink } from "react-router-dom";

const Landingpage5 = () => {
  return (
    <div>
      <div className="landing-page-5">
        <Fade left>
          <div className="landing-pg5-img">
            <img src={newsimg} alt="alt" />
          </div>
        </Fade>
        <div className="landing-pg5-head">
          <LightSpeed right>
            <p>Get to know what’s up with the market</p>
          </LightSpeed>
        </div>

        <div className="landing-pg5-subhead">
          <LightSpeed right>
            <p>
              Be the first to know about the fluctuation in the most volatile
              market.
            </p>
          </LightSpeed>
        </div>
        <div className="landing-pg5-para">
          <LightSpeed right>
            <p>
              We don’t have to tell you the obvious - faster acknowledgements
              lead to smarter results. CryptoApp collects crypto news from over
              40 sources and brings personalised news in your feed.
            </p>
          </LightSpeed>
        </div>
        <NavLink to="/news">
          <div className="landing-pg5-btn">
            <LightSpeed right>
              News
              <img src="https://img.icons8.com/officel/16/000000/news.png" />
            </LightSpeed>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Landingpage5;
