import react, { useEffect, useState } from "react";
import "./Watchlist.css";
import WatchlistCoin from "../WatchlistCoin/WatchlistCoin";
import WatchlistErrorPage from "../WatchlistErrorPage/WatchlistErrorPage";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

var coinsArrayData;

const Watchlist = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(async () => {
    try {
      const response = await fetch("/watch-list", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      coinsArrayData = data.coinsArray;

      if (coinsArrayData.length === 0) {
        setLoading(false);
      } else {
        const newCoinArray = new Array();
        for (let i = 0; i < coinsArrayData.length; i++) {
          newCoinArray.push(coinsArrayData[i].coinName);
        }
        const stringArrayData = newCoinArray.toString();
        stringArrayData.replace(/[\[\]']/g, "");
        axios(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${stringArrayData}&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C200d%2C1y`
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
      }

      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/signin");
    }
  }, [coinsArrayData]);

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

  if (error) return "Error...";

  return (
    <div className="card-align">
      {data.length === 0 ? (
        <div>
          <WatchlistErrorPage />
        </div>
      ) : (
        data.map((coins) => {
          return (
            <WatchlistCoin
              ID={coins.id}
              name={coins.name}
              image={coins.image}
              symbol={coins.symbol}
              currentPrice={coins.current_price}
              marketCap={coins.market_cap}
              Percentage={coins.price_change_percentage_24h}
            />
          );
        })
      )}
    </div>
  );
};

export default Watchlist;
