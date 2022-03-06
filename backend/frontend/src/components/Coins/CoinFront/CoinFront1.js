import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../CoinCard/coincard";

import "./CoinFront1.css"
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function CoinData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=4&page=1&sparkline=false"
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

  function clickHandler(id) {
    console.log(id);
  }

  return (
    
    <div className="card-container">

<p className="Mkt_Desc">Coins by Market Cap</p>

      {/* SearchBar  */}
      {/* <div className="search-bar__search">
        <FontAwesomeIcon className="search__icon" icon="search" />
        <input
          className="search-bar__input"
          placeholder="Search"
          type="text"
          onChange={(event) => {
            setSearchFilter(event.target.value);
          }}
        />
      </div> */}
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
              <a
                className="coin-card__link"
                onClick={() => clickHandler(coin.id)}
              >
                <App
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  currentPrice={coin.current_price}
                  marketCap={coin.market_cap}
                  Percentage={coin.price_change_percentage_24h}
                />
              </a>
              
            );
          })}
          {/* <NavLink to="/coins">
              <div className="show-more-buttons">
                Get Started
              </div>
            </NavLink> */}
      </div>
    </div>
    
  );
}
