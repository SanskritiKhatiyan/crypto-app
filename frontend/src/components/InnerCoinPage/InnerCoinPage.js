import React, { useState, useEffect } from "react";
import "./InnerCoinPage.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import CoinInfo from "./CoinInfo";
import { Cookies } from "react-cookie";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { CircularProgress } from "@material-ui/core";

export default function InnerCoinPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cookie = new Cookies();

  const noPointer = {
    cursor: "default",
    boxShadow: "none",
    backgroundColor: "#eaf4fc",
  };

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

  return (
    <div className="innercoin_container">
      <div className="outer-box">
        <div className="first-inner">
          <Fade>
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
              <div className="mrkt-st">Market Stats</div>
              <div className="price">
                <div>Price</div>
                <div className="cp">
                  ₹{numberWithCommas(data[0].current_price)}
                </div>
              </div>
            </div>

            <div className="pp">
              <div className="mrkt-cap">
                <div>
                  Market Cap
                  <Tooltip
                    title="Market cap is calculated by multiplying the asset's circulating supply with its current price.
What this means:
A high market cap implies that the asset is highly valued by the market. Currently, the highest market cap asset is Bitcoin."
                  >
                    <IconButton style={noPointer}>
                      <FontAwesomeIcon id="info-button" icon="info-circle" />
                    </IconButton>
                  </Tooltip>
                </div>
                {data[0].market_cap < 10000000000 ? (
                  <div>
                    <div className="marketCapClass">
                      ₹{(data[0].market_cap / 1000000000).toFixed(0)}M
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="marketCapClass">
                      ₹{(data[0].market_cap / 1000000000).toFixed(0)}B
                    </div>
                  </div>
                )}
              </div>

              {data[0].price_change_percentage_24h_in_currency < 0 ? (
                <div className="day">
                  Price change (24h)
                  <Tooltip title="The percent change in trading volume for this asset compared to 24 hours ago.">
                    <IconButton style={noPointer}>
                      <FontAwesomeIcon id="info-button" icon="info-circle" />
                    </IconButton>
                  </Tooltip>
                  <div id="red">
                    {data[0].price_change_percentage_24h_in_currency.toFixed(2)}
                    %
                  </div>
                </div>
              ) : (
                <div className="day">
                  Price change (24h)
                  <Tooltip title="The percent change in trading volume for this asset compared to 24 hours ago.">
                    <IconButton style={noPointer}>
                      <FontAwesomeIcon id="info-button" icon="info-circle" />
                    </IconButton>
                  </Tooltip>
                  <div id="green">
                    {" "}
                    +
                    {data[0].price_change_percentage_24h_in_currency.toFixed(2)}
                    %
                  </div>
                </div>
              )}
            </div>

            <div className="long-change">
              {data.price_change_percentage_30d_in_currency < 0 ? (
                <div className="d">
                  Price change (30d)
                  <Tooltip title="The percent change in trading volume for this asset compared to 7 days ago.">
                    <IconButton style={noPointer}>
                      <FontAwesomeIcon id="info-button" icon="info-circle" />
                    </IconButton>
                  </Tooltip>
                  <div className="sp" id="green">
                    +
                    {data[0].price_change_percentage_30d_in_currency.toFixed(2)}
                    %
                  </div>
                </div>
              ) : (
                <div className="d">
                  Price change (30d)
                  <Tooltip title="The percent change in trading volume for this asset compared to 30 days ago.">
                    <IconButton style={noPointer}>
                      <FontAwesomeIcon id="info-button" icon="info-circle" />
                    </IconButton>
                  </Tooltip>
                  <div className="sp" id="red">
                    {data[0].price_change_percentage_30d_in_currency.toFixed(2)}
                    %
                  </div>
                </div>
              )}

              {data[0].price_change_percentage_200d_in_currency < 0 ? (
                <div className="m">
                  Price change (6m)
                  <Tooltip title="The percent change in trading volume for this asset compared to 6 months ago.">
                    <IconButton style={noPointer}>
                      <FontAwesomeIcon id="info-button" icon="info-circle" />
                    </IconButton>
                  </Tooltip>
                  <div className="sp" id="red">
                    {data[0].price_change_percentage_200d_in_currency.toFixed(
                      2
                    )}
                    %
                  </div>
                </div>
              ) : (
                <div className="m">
                  Price change (6m)
                  <Tooltip title="The percent change in trading volume for this asset compared to 6 months ago.">
                    <IconButton style={noPointer}>
                      <FontAwesomeIcon id="info-button" icon="info-circle" />
                    </IconButton>
                  </Tooltip>
                  <div className="sp" id="green">
                    {" "}
                    +
                    {data[0].price_change_percentage_200d_in_currency.toFixed(
                      2
                    )}
                    %
                  </div>
                </div>
              )}

              {data[0].price_change_percentage_1y_in_currency < 0 ? (
                <div className="y">
                  Price change (1y)
                  <Tooltip title="The percent change in trading volume for this asset compared to 1 year ago.">
                    <IconButton style={noPointer}>
                      <FontAwesomeIcon id="info-button" icon="info-circle" />
                    </IconButton>
                  </Tooltip>
                  <div className="sp" id="red">
                    {data[0].price_change_percentage_1y_in_currency.toFixed(2)}%
                  </div>
                </div>
              ) : (
                <div className="y">
                  Price change (1y)
                  <Tooltip title="The percent change in trading volume for this asset compared to 1 year ago.">
                    <IconButton style={noPointer}>
                      <FontAwesomeIcon id="info-button" icon="info-circle" />
                    </IconButton>
                  </Tooltip>
                  <div className="sp" id="green">
                    {" "}
                    +{data[0].price_change_percentage_1y_in_currency.toFixed(2)}
                    %
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
    </div>
  );
}
export function numberWithCommas(x) {
  return x.toString().split(".")[0].length > 3
    ? x
        .toString()
        .substring(0, x.toString().split(".")[0].length - 3)
        .replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
        "," +
        x.toString().substring(x.toString().split(".")[0].length - 3)
    : x.toString();
}
