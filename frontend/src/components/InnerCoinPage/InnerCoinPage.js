import React, { useState, useEffect } from "react";
import "./InnerCoinPage.css";
// import { coinName } from "../Coins/CoinData";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function InnerCoinPage (){
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(
      "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false"
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

      <div className="name-logo">
      <img src={data.image.small} ></img>          
      <p className="name">{data.id.toUpperCase()}</p>
      </div>

      <div className="pp">
      <p className="price">Price {data.market_data.price_change_24h}</p>

      {data.market_data.price_change_percentage_24h < 0 ? (
          <p>
            24h Change
            <p id="red" className="day">{data.market_data.price_change_percentage_24h.toFixed(2)}%</p>
          </p>
        ) : (
          <p>
            24h Change
            <p id="green" className="day"> +{data.market_data.price_change_percentage_24h.toFixed(2)}%</p>
          </p>
        )}
      </div>

      <div className="long-change">
      {data.market_data.price_change_percentage_7d < 0 ? (
          <p>
            7d Change
            <p id="red" className="day">{data.market_data.price_change_percentage_7d.toFixed(2)}%</p>
          </p>
        ) : (
          <p>
            7d Change
            <p id="green" className="day"> +{data.market_data.price_change_percentage_7d.toFixed(2)}%</p>
          </p>
        )}

      {data.market_data.price_change_percentage_200d < 0 ? (
          <p>
            6m Change
            <p id="red" className="day">{data.market_data.price_change_percentage_200d.toFixed(2)}%</p>
          </p>
        ) : (
          <p>
            6m Change
            <p id="green" className="day"> +{data.market_data.price_change_percentage_200d.toFixed(2)}%</p>
          </p>
        )}
     
     {data.market_data.price_change_percentage_1y < 0 ? (
          <p>
            1yr Change
            <p id="red" className="day">{data.market_data.price_change_percentage_1y.toFixed(2)}%</p>
          </p>
        ) : (
          <p>
            1yr Change
            <p id="green" className="day"> +{data.market_data.price_change_percentage_1y.toFixed(2)}%</p>
          </p>
        )}

      </div>

      </Fade>
      </div>
      <div className="second-inner">
      </div>
    </div>
  );
}


