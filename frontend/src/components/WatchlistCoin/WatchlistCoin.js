import React from "react";
import "./WatchlistCoin.css";

const WatchlistCoin = (props) => {
  return (
    <div id="card">
      <div className="top">
        <p id="heading">{props.name}</p>
        <div className="image-crop">
          <img id="img_id" src={props.image} alt="" />
        </div>
      </div>
      <div className="middle">
        <p>
          Market Cap
          <p className="mkt_cap">
            <a>₹</a>
            <a className="hidden">.</a>
            {(props.marketCap / 1000000000).toFixed(0)} Cr
          </p>
        </p>
        <p>
          Price
          <p className="price">
            {" "}
            <a>₹</a>
            <a className="hidden">.</a> {props.currentPrice}
          </p>
        </p>
        {props.Percentage < 0 ? (
          <p>
            24h Change
            <p className="red">{props.Percentage.toFixed(2)}%</p>
          </p>
        ) : (
          <p>
            24h Change
            <p className="green">{props.Percentage.toFixed(2)}%</p>
          </p>
        )}
      </div>

      {/* <Button></Button> */}
    </div>
  );
};

export default WatchlistCoin;
