import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinCard from "./CoinCard/CoinCard";
import "./CoinData.css";
import Fade from "react-reveal/Fade";

export default function CoinData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");

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
    <div className="card-container">
      {/* SearchBar  */}
      <div className="search-bar__search">
        <input
          className="search-bar__input"
          placeholder="Search..."
          type="text"
          onChange={(event) => {
            setSearchFilter(event.target.value);
          }}
        />
      </div>
      <div className="card-align">
        {/* Filtering Data Based On Search */}
        {data
          .filter((val) => {
            if (searchFilter == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchFilter.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((coin) => {
            return (
              <Fade bottom>
                <CoinCard
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  currentPrice={coin.current_price}
                  marketCap={coin.market_cap}
                />
              </Fade>
            );
          })}
      </div>
    </div>
  );
}
