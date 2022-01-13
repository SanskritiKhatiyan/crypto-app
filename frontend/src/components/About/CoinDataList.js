import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "./CoinCard/coincardList";
// import Abc from "./CoinCardList/CoinCardList";
import "./CoinDataList.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

var coinName;

export default function CoinData() {
  const [cookies, setCookie] = useCookies();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");

  const history = useHistory();

  useEffect(() => {
    axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=40&page=1&sparkline=false&price_change_percentage=7d%2C30d%2C200d"
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

  const clickHandler = (key) => {
    coinName = key;
    // history.push("/innercoin");
    console.log(key);
    setCookie("coin_name", key, { path: "/" });
  };

  return (
    <div className="card-container">
      <div className="card-container__child">
        {/* <h1 className="card__container__heading">Markets</h1> */}
        {/* SearchBar  */}

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
                    <App
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      currentPrice={coin.current_price}
                      marketCap={coin.market_cap}
                      Percentage={coin.price_change_percentage_24h}
                      High24={coin.high_24h}
                      Low24={coin.low_24h}
                      Price7d={coin.price_change_percentage_7d_in_currency}
                      Price30d={coin.price_change_percentage_30d_in_currency}
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

export { coinName };
