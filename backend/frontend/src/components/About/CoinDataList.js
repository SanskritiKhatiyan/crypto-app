import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinCardList from "./CoinCard/coincardList";
import "./CoinDataList.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";
import { CircularProgress } from "@material-ui/core";

export default function CoinData() {
  const [cookies, setCookie] = useCookies();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=40&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
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

  if (error) return "Error!";

  const clickHandler = (key) => {
    setCookie("coinID", key);
  };

  return (
    <div className="card-container">
      <div className="card-container__child">
        <div className="search-barlist__search">
          <FontAwesomeIcon className="search__icon" icon="search" />
          <input
            className="search-barlist__input"
            placeholder="Search"
            type="text"
            onChange={(event) => {
              setSearchFilter(event.target.value);
            }}
          />
        </div>

        <div className="card-align">
          {/* Filtering Data Based On Search */}
          <div className="card-align__headings">
            <div className="card__heading__coin">Coins</div>
            <div className="card__heading__price">Price</div>
            <div className="card__heading__price24h">Price/24h %</div>
            <div className="card__heading__marketCap">Market Cap</div>
            <div className="card__heading__1hourChange">1H %</div>
            <div className="card__heading__24hourHigh">24H High</div>
            <div className="card__heading__24hourLow">24H Low</div>
            <div className="card__heading__24hourChange">24H %</div>
            <div className="card__heading__7dayChange">7D %</div>
            <div className="card__heading__add">Fav</div>
          </div>
          {data
            .filter((val) => {
              if (searchFilter == "") {
                return val;
              } else if (
                val.name
                  .toLowerCase()
                  .includes(searchFilter.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((coin) => {
              return (
                <Fade bottom>
                  <a
                    className="coin-card__link"
                    onClick={() => clickHandler(coin.id)}
                  >
                    <CoinCardList
                      ID={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      currentPrice={coin.current_price}
                      marketCap={coin.market_cap}
                      Percentage={coin.price_change_percentage_24h}
                      High24={coin.high_24h}
                      Low24={coin.low_24h}
                      Price7d={coin.price_change_percentage_7d_in_currency}
                      Price1h={coin.price_change_percentage_1h_in_currency}
                    />
                  </a>
                </Fade>
              );
            })}
        </div>
      </div>
    </div>
  );
}
