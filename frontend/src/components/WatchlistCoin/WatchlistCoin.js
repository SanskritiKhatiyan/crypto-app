import React from "react";
import "./WatchlistCoin.css";
const WatchlistCoin = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      {/* <h1>{props.symbol}</h1> */}
    </div>
  );
};

export default WatchlistCoin;
