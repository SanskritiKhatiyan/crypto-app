import React from "react";
import "./WatchlistErrorPage.css";
import bitcoinImage from "../../assets/watchlist-error.png";
import Fade from "react-reveal/Fade";

const WatchlistErrorPage = () => {
  return (
    <div className="watchlistError-page-wrapper">
      <Fade bottom>
        <div className="watchlistError__container">
          <div className="watchlistError__heading">
            <p className="watchlistError_heading_text">
              Your Watchlist Is Empty.
            </p>
            <p className="watchlistError_heading_text">
              Add Your Favourite Cryptocurrency.
            </p>
            <div className="watchlistError__imageContainer">
              <img src={bitcoinImage} alt="bitcoinImage" />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default WatchlistErrorPage;
