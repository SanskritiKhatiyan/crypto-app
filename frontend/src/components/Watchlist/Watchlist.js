import React, {useContext} from "react";
import "./Watchlist.css";
import { GlobalContext } from "../../context/GlobalState";
import CoinData from "../Coins/CoinData";

const Watchlist = () => {
  const {watchlist}=  useContext(GlobalContext);

  return (
    <div>
      <h1>Watchlist ban ri hai......</h1>
      {/* <h3> { watchlist.length}{ watchlist.length===1? "Coin": "Coins"} </h3>
      {watchlist.length >0 ? (
        <div>
          {watchlist.map(coin) => (
            <CoinData>
                key={coin.id}
            </CoinData>
          )}
      )} */}
    </div>
    

  );
};

export default Watchlist;
