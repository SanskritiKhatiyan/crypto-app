import React from "react";

import Cookies from "universal-cookie";

const cookie = new Cookies();

export const HistoricalChart = (days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${cookie.get(
    "coinID"
  )}/market_chart?vs_currency=inr&days=${days}`;
