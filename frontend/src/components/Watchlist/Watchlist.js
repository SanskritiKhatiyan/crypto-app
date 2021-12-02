import React, {useContext} from "react";
import "./Watchlist.css";
import  {GlobalContext} from "./GlobalState";
// import CoinData from "../Coins/CoinData";
import Coins from "./Coins"
import Add from "./Add";

const Watchlist = () => {
  const {watchlist}=  useContext(GlobalContext);

  return (
    <div>
      <h1>Watchlist ban ri hai......</h1>
      <Add/>
      <h3> { watchlist.length}{watchlist.length===1? "Coin": "Coins"} </h3>
      {watchlist.length >0 ? (
        <div>
          {watchlist.map((coin) => (
            <Coins 
            coin={coin}
            type="watchlist"
            key={coin.id}/>
          ))}
    </div>
      ):(<h2 > No coins in the List!!!!Add some..</h2>
  )}
  </div>

  );
};

export default Watchlist;
