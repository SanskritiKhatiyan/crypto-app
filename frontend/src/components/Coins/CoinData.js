import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "./CoinCard/coincard";
import "./CoinData.css"

export default function CoinData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=16&page=1&sparkline=false"
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div className="card-align">
    
      {data.map((coin) => {
        return (
          
          <App
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            currentPrice={coin.current_price}
            marketCap={coin.market_cap}
          />
          
        );
      })}
      
    </div>
  );
}
