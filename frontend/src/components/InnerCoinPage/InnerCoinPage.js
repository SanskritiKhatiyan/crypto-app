import React, { useState, useEffect } from "react";
import "./InnerCoinPage.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import CoinInfo from "./CoinInfo";
import { Cookies } from "react-cookie";

export default function InnerCoinPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cookie = new Cookies();

  useEffect(() => {
    axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${cookie.get(
        "coinID"
      )}&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C200d%2C1y`
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

  if (loading) return "Loading";
  if (error) return "Error!";

  return (
    <div className="outer-box">
      <div className="first-inner">
        <Fade bottom>
          <div className="up-down-space"></div>

          <hr className="line-up-down"></hr>
          <div className="name-logo">
            <div className="logo">
              <img src={data[0].image} />
            </div>
            <div className="name"> {data[0].name}</div>
          </div>
          <hr className="line-up-down"></hr>
          <div className="mp">
            <div className="mrkt-st">
              {" "}
              Market Stats
              <FontAwesomeIcon id="info-button" icon="info-circle" />
            </div>
            <div className="price">
              <div>
                Price <FontAwesomeIcon id="info-button" icon="info-circle" />{" "}
              </div>
              <div className="cp">₹{data[0].current_price} </div>
            </div>
          </div>

          <div className="pp">
            <div className="mrkt-cap">
              <div>
                Market Cap
                <FontAwesomeIcon id="info-button" icon="info-circle" />{" "}
              </div>
              {data[0].market_cap < 10000000000 ? (
                <div>
                  <div>₹{(data[0].market_cap / 1000000000).toFixed(0)}M</div>
                </div>
              ) : (
                <div>
                  <div>₹{(data[0].market_cap / 1000000000).toFixed(0)}B</div>
                </div>
              )}
            </div>

            {data[0].price_change_percentage_24h_in_currency < 0 ? (
              <div className="day">
                Price change (24h){" "}
                <FontAwesomeIcon id="info-button" icon="info-circle" />
                <div id="red">
                  {data[0].price_change_percentage_24h_in_currency.toFixed(2)}%
                </div>
              </div>
            ) : (
              <div className="day">
                Price change (24h)
                <FontAwesomeIcon id="info-button" icon="info-circle" />
                <div id="green">
                  {" "}
                  +{data[0].price_change_percentage_24h_in_currency.toFixed(2)}%
                </div>
              </div>
            )}
          </div>

          <div className="long-change">
            {data.price_change_percentage_30d_in_currency < 0 ? (
              <div className="d">
                Price change (30d){" "}
                <FontAwesomeIcon id="info-button" icon="info-circle" />
                <div className="sp" id="green">
                  {" "}
                  +{data[0].price_change_percentage_30d_in_currency.toFixed(2)}%
                </div>
              </div>
            ) : (
              <div className="d">
                Price change (30d){" "}
                <FontAwesomeIcon id="info-button" icon="info-circle" />
                <div className="sp" id="red">
                  {data[0].price_change_percentage_30d_in_currency.toFixed(2)}%
                </div>
              </div>
            )}

            {data[0].price_change_percentage_200d_in_currency < 0 ? (
              <div className="m">
                Price change (6m){" "}
                <FontAwesomeIcon id="info-button" icon="info-circle" />
                <div className="sp" id="red">
                  {data[0].price_change_percentage_200d_in_currency.toFixed(2)}%
                </div>
              </div>
            ) : (
              <div className="m">
                Price change (6m){" "}
                <FontAwesomeIcon id="info-button" icon="info-circle" />
                <div className="sp" id="green">
                  {" "}
                  +{data[0].price_change_percentage_200d_in_currency.toFixed(2)}
                  %
                </div>
              </div>
            )}

            {data[0].price_change_percentage_1y_in_currency < 0 ? (
              <div className="y">
                Price change (1y){" "}
                <FontAwesomeIcon id="info-button" icon="info-circle" />
                <div className="sp" id="red">
                  {data[0].price_change_percentage_1y_in_currency.toFixed(2)}%
                </div>
              </div>
            ) : (
              <div className="y">
                Price change (1y){" "}
                <FontAwesomeIcon id="info-button" icon="info-circle" />
                <div className="sp" id="green">
                  {" "}
                  +{data[0].price_change_percentage_1y_in_currency.toFixed(2)}%
                </div>
              </div>
            )}
          </div>
          <hr className="line-up-down"></hr>
        </Fade>
        <div className="up-down-space"></div>
      </div>
      <div className="second-inner">
        <CoinInfo />
      </div>
    </div>
  );
}
