import react, { useEffect, useState } from "react";
import "./Watchlist.css";
import WatchlistCoin from "../WatchlistCoin/WatchlistCoin";
import { useHistory } from "react-router-dom";

const Watchlist = () => {
  const history = useHistory();

  const authenticateMiddleware = async () => {
    try {
      const response = await fetch("/watch-list", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/signin");
    }
  };

  useEffect(() => {
    authenticateMiddleware();
  }, []);

  return <div>Watchlist page is under process 😓😓😓</div>;
};

export default Watchlist;
