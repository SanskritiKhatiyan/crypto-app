import React, { useState } from "react";
import "./CoinCardList.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

var history;

export function numberWithCommas(x) {
  return x.toString().split(".")[0].length > 3
    ? x
        .toString()
        .substring(0, x.toString().split(".")[0].length - 3)
        .replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
        "," +
        x.toString().substring(x.toString().split(".")[0].length - 3)
    : x.toString();
}

const CoinCardList = (props) => {
  const handleInncerCoinPageEvent = () => {
    history.push("/innercoin");
  };

  const AddCoinToWatchlist = async (e) => {
    const user = localStorage.getItem("UserName");
    console.log(props.ID);
    if (user) {
      const coinName = props.ID;
      await fetch("/storeCoinID", {
        method: "POST",
        body: JSON.stringify({
          coinName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      e.target.setAttribute(
        "src",
        "https://img.icons8.com/ios-filled/20/000000/double-tick.png"
      );
      e.target.setAttribute("alt", "tick");
      // window.alert("Your coin is added to watchlist 🙂🙂");
    } else {
      window.alert("You are not logged In, Please Log In to continue! 🙂🙂");
      history.push("/signin");
    }
  };

  history = useHistory();

  return (
    <div className="coin_container">
      <div className="coin_row" onClick={handleInncerCoinPageEvent}>
        <div className="coin">
          <img src={props.image} className="coin_img" />
          <p className="coin_h1">{props.name}</p>

          <div className="coin_data">
            <p className="coin_price">
              ₹{numberWithCommas(props.currentPrice)}
            </p>
            <p className="coin_marketcap">
              {props.marketCap < 10000000000 ? (
                <p>
                  <p>₹{(props.marketCap / 1000000000).toFixed(0)}M</p>
                </p>
              ) : (
                <p>
                  <p>₹{(props.marketCap / 1000000000).toFixed(0)}B</p>
                </p>
              )}
            </p>
            {props.Price1h < 0 ? (
              <p className="coin_percent red">{props.Price1h.toFixed(2)}%</p>
            ) : (
              <p className="coin_percent green">+{props.Price1h.toFixed(2)}%</p>
            )}
          </div>
          <p className="coin_high">₹{numberWithCommas(props.High24)}</p>
          <p className="coin_low">₹{numberWithCommas(props.Low24)}</p>
          {props.Percentage < 0 ? (
            <p className="coin_7d red">{props.Percentage.toFixed(2)}%</p>
          ) : (
            <p className="coin_7d green">+{props.Percentage.toFixed(2)}%</p>
          )}

          {props.Price7d < 0 ? (
            <p className="coin_30d red">{props.Price7d.toFixed(2)}%</p>
          ) : (
            <p className="coin_30d green">+{props.Price7d.toFixed(2)}%</p>
          )}
        </div>
      </div>

      {/* <Button> */}
      <div id="buttonsList" onClick={AddCoinToWatchlist}>
        <button>
          <img
            src="https://img.icons8.com/material-outlined/24/000000/plus--v2.png"
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
};

export default CoinCardList;
