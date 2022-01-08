import react, { useEffect, useState } from "react";
import "./Watchlist.css";
import WatchlistCoin from "../WatchlistCoin/WatchlistCoin";
import { useHistory } from "react-router-dom";
import axios from "axios";

var data;
var coinLists = [];
var coinss = [];

const Watchlist = () => {
  const [coin, setCoin] = useState([]);

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

      data = await response.json();
      coinLists = data.user.coins.concat();
      coinLists.map((current) => {
        axios(`https://api.coingecko.com/api/v3/coins/${current.coinName}`)
          .then((response) => {
            setCoin(response.data);
            coinss.push(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
      console.log(coinLists);

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
  console.log(coinss);
  console.log(coin);

  // useEffect(() => {
  //   coinLists.map((current) => {
  //     axios(`https://api.coingecko.com/api/v3/coins/${current.coinName}`)
  //       .then((response) => {
  //         setCoin(response.coin);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   });
  // }, []);

  return (
    <div>
      {coinss.map((ele) => {
        return <WatchlistCoin name={ele.name} />;
      })}
      <h1>Hello</h1>
    </div>
  );
};

export default Watchlist;
