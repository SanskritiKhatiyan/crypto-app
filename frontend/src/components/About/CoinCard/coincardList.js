import React, { useState } from "react";
import "./CoinCardList.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from "../../Notification";
var history;

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

const CoinCardList = (props) => {
  const [isPlusIconClick, setPlusIconClick] = useState(true);

  const handleInnerCoinPageEvent = () => {
    history.push("/innercoin");
  };
  const [notify, setnotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const AddCoinToWatchlist = async (e) => {
    const user = localStorage.getItem("UserName");
    console.log(props.ID);
    if (user) {
      const coinName = props.ID;
      await fetch("/storeCoinID", {
        method: "POST",
        body: JSON.stringify({
          coinName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      setnotify({
        isOpen: true,
        message: "Your coin is added to watchlist 🙂🙂",
        type: "success",
      });
      setPlusIconClick(false);
    } else {
      // window.alert("You are not logged In, Please Log In to continue! 🙂🙂");
      setnotify({
        isOpen: true,
        message: "You are not logged In, Please Log In to continue!",
        type: "error",
      });
      history.push("/signin");
    }
  };

  const RemoveCoinFromWatchlist = async () => {
    const coinName = props.ID;
    console.log(coinName, "Removed!");   
    // setnotify({
    //   isOpen: true,
    //   message: "Coin Removed",
    //   type: "error",
    // });

    await fetch("/removeCoin", {
      method: "PUT",
      body: JSON.stringify({
        coinName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      isPlusIconClick(true)
      setnotify({
        isOpen: true,
        message: "The coin is already present",
        type: "error",
      });
  };

  history = useHistory();

  return (
    <>
      <div className="coin_container">
        <div className="coin_row" onClick={handleInnerCoinPageEvent}>
          <div className="coin">
            <img src={props.image} className="coin_img" />
            <p className="coin_h1">{props.name}</p>

            <div className="coin_data">
              <p className="coin_price">
                ₹{numberWithCommas(props.currentPrice)}
              </p>
              <p className="coin_marketcap">
                {props.marketCap < 10000000000 ? (
                  <p>
                    <p>₹{(props.marketCap / 1000000000).toFixed(0)}M</p>
                  </p>
                ) : (
                  <p>
                    <p>₹{(props.marketCap / 1000000000).toFixed(0)}B</p>
                  </p>
                )}
              </p>
              {props.Price1h < 0 ? (
                <p className="coin_percent red">
                  {" "}
                  <img
                    src="https://img.icons8.com/material/24/fa314a/give-way--v1.png"
                    alt="hello"
                    className="red-arrow"
                  />
                  {-props.Price1h.toFixed(2)}%
                </p>
              ) : (
                <p className="coin_percent green">
                  <img
                    src="https://img.icons8.com/material/24/26e07f/sort-up--v2.png"
                    alt="hello"
                    className="green-arrow"
                  />
                  {props.Price1h.toFixed(2)}%
                </p>
              )}
            </div>
            <p className="coin_high">₹{numberWithCommas(props.High24)}</p>
            <p className="coin_low">₹{numberWithCommas(props.Low24)}</p>
            {props.Percentage < 0 ? (
              <p className="coin_7d red">
                {" "}
                <img
                  src="https://img.icons8.com/material/24/fa314a/give-way--v1.png"
                  alt="hello"
                  className="red-arrow"
                />
                {-props.Percentage.toFixed(2)}%
              </p>
            ) : (
              <p className="coin_7d green">
                <img
                  src="https://img.icons8.com/material/24/26e07f/sort-up--v2.png"
                  alt="hello"
                  className="green-arrow"
                />
                {props.Percentage.toFixed(2)}%
              </p>
            )}

            {props.Price7d < 0 ? (
              <p className="coin_30d red">
                {" "}
                <img
                  src="https://img.icons8.com/material/24/fa314a/give-way--v1.png"
                  alt="hello"
                  className="red-arrow"
                />
                {-props.Price7d.toFixed(2)}%
              </p>
            ) : (
              <p className="coin_30d green">
                {" "}
                <img
                  src="https://img.icons8.com/material/24/26e07f/sort-up--v2.png"
                  alt="hello"
                  className="green-arrow"
                />
                {props.Price7d.toFixed(2)}%
              </p>
            )}
          </div>
        </div>

        {/* <Button> */}
        <div id="buttonsList">
          <button>
            {isPlusIconClick ? (
              <FontAwesomeIcon
                className="plusIcon"
                icon="plus-circle"
                onTouchStart={AddCoinToWatchlist}
                onClick={AddCoinToWatchlist}
              />
            ) : (
              <FontAwesomeIcon
                className="minusIcon"
                icon="minus-circle"
                onClick={RemoveCoinFromWatchlist}
                onTouchStart={AddCoinToWatchlist}
              />
            )}
          </button>
        </div>
      </div>
      <Notification notify={notify} setnotify={setnotify} />
    </>
  );
};

export default CoinCardList;
