import React, { useState, useEffect } from "react";
import WatchlistCoin from "../WatchlistCoin/WatchlistCoin";
import "./Watchlist.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

var result;
const Watchlist = () => {
  const [coinData, setCoinData] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  const authenticateMiddleware = async () => {
    try {
      const response = await fetch("/watch-list", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const userResponse = await response.json();
      const newCoinArray = new Array();
      for (let i = 0; i < userResponse.coinsArray.length; i++) {
        newCoinArray.push(userResponse.coinsArray[i].coinName);
      }
      setCoinData(newCoinArray);
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/signin");
    }
  };

  const getAPIData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authenticateMiddleware();
  }, []);

  useEffect(() => {
    getAPIData();
  }, []);

  if (loading)
    return (
      <CircularProgress
        style={{
          color: "#003366",
          marginLeft: "42vw",
          marginTop: "11vw",
          marginBottom: "40vh",
        }}
        size={200}
        thickness={1.5}
      />
    );

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="watchlist_outer_container">
    <div className="card-align">
      {data
        .filter((coin) => coinData.includes(coin.id))
        .map((items) => (
          <WatchlistCoin
            ID={items.id}
            name={items.name}
            image={items.image}
            symbol={items.symbol}
            currentPrice={items.current_price}
            marketCap={items.market_cap}
            Percentage={items.price_change_percentage_24h}
          />
        ))}
    </div>
    </div>
  );
};

export default Watchlist;
