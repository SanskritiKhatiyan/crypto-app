import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "./CoinCard/coincard";
import "./CoinData.css";
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
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=40&page=1&sparkline=false"
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

  const windowAlert = () => {
    window.alert("Your coin is added to watchlist :)");
    history.push("/watchlist");
  };

  const clickHandler = (key) => {
    coinName = key;
    // history.push("/innercoin");
    console.log(key);
    setCookie("coin_name", key, { path: "/" });
    windowAlert();
  };

  return (
    <div className="card-container">
      {/* SearchBar  */}
      <Fade up>
        <div className="search-bar__search">
          <FontAwesomeIcon className="search__icon" icon="search" />
          <input
            className="search-bar__input"
            placeholder="Search"
            type="text"
            onChange={(event) => {
              setSearchFilter(event.target.value);
            }}
          />
        </div>
      </Fade>
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
              </Fade>
            );
          })}
      </div>
    </div>
  );
}

export { coinName };
