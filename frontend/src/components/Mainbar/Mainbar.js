import React from "react";
import { useHistory } from "react-router-dom";
import "./Mainbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mainbar = () => {
  const history = useHistory();
  const handleNews = () => {
    history.push("/news");
  };

  const handleCoins = () => {
    history.push("/coin-front");
  };

  const handleWatchlist = () => {
    history.push("/watchlist");
  };

  return (
    <div className="main-bar">
      <div className="main-bar__container">
        <span onClick={handleNews} className="main-bar__container__link">
          <FontAwesomeIcon icon="newspaper" />
          <a className="hidden">.</a>
          News
        </span>
        <span onClick={handleCoins} className="main-bar__container__link">
          <FontAwesomeIcon icon="coins" />
          <a className="hidden">.</a>
          Coins
        </span>
        <span onClick={handleWatchlist} className="main-bar__container__link">
          <FontAwesomeIcon icon="eye" />
          <a className="hidden">.</a>
          Watch List
        </span>
      </div>
    </div>
  );
};

export default Mainbar;
