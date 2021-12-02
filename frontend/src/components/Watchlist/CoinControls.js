import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

const CoinControls = ({ type, coin }) => {
    const {
        removeCoinFromWatchlist,
        addCoinToWatchlist,
      } = useContext(GlobalContext);
    return (
        <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addCoinToWatchlist(coin)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeCoinFromWatchlist(coin.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
    )
}

export default CoinControls
