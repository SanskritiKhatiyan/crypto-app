import react, { useEffect } from "react";
import "./Watchlist.css";
import { useHistory, useLocation } from "react-router-dom";

const Watchlist = () => {
  const history = useHistory();
  const location = useLocation();

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
      console.log(data);

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

  return (
    <div>
      {/* <p>{location.tags.coinKey}</p>
      <p>{location.tags.coinName}</p>
      <img src={location.tags.coinImage} />
      <p>{location.tags.coinSymbol}</p>
      <p>{location.tags.coinCurrentPrice}</p>
      <p>{location.tags.coinMarketCap}</p>
      <p>{location.tags.coinPercentage}</p> */}
      <div id="card">
        <div className="top">
          <p id="heading">{location.tags.coinName}</p>
          <div className="image-crop">
            <img id="img_id" src={location.tags.coinImage} alt="" />
          </div>
        </div>
        <div className="middle">
          <p>
            Market Cap{" "}
            <p className="mkt_cap">
              <a>₹</a>
              <a className="hidden">.</a>
              {(location.tags.coinMarketCap / 1000000000).toFixed(0)} Cr
            </p>
          </p>
          <p>
            Price
            <p className="price">
              {" "}
              <a>₹</a>
              <a className="hidden">.</a> {location.tags.coinCurrentPrice}
            </p>
          </p>
          {location.tags.coinPercentage < 0 ? (
            <p>
              24h Change
              <p className="red">{location.tags.coinPercentage.toFixed(2)}%</p>
            </p>
          ) : (
            <p>
              24h Change
              <p className="green">
                {location.tags.coinPercentage.toFixed(2)}%
              </p>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
