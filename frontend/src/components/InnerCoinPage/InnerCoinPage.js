import React, { useState, useEffect } from "react";
import "./InnerCoinPage.css";
import { coinName } from "../Coins/CoinData";
import axios from "axios";

const InnerCoinPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(
      `https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`
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
    <div>
      <h1>{data.id}</h1>
      <p>{data.market_data.price_change_24h}</p>
      <p>{data.market_data.price_change_percentage_24h}</p>
      <p>{data.market_data.market_cap_change_percentage_24h}</p>
    </div>
  );
};

export default InnerCoinPage;
