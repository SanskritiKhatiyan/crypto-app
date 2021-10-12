import React from "react";
import { useHistory } from "react-router-dom";
import "./Mainbar.css";

const Mainbar = () => {
  const history = useHistory();
  const handleNews = () => {
    history.push("/news");
  };

  const handleCoins = () => {
    history.push("/coins");
  };

  const handleWatchlist = () => {
    history.push("/watchlist");
  };

  return (
    <div className="main-bar">
      <div className="main-bar__container">
        <span onClick={handleNews} className="main-bar__container__link">
          News
        </span>
        <span onClick={handleCoins} className="main-bar__container__link">
          Coins
        </span>
        <span onClick={handleWatchlist} className="main-bar__container__link">
          Watch List
        </span>
      </div>
    </div>
  );
};

export default Mainbar;
