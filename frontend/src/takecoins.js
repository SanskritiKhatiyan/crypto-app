import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Takecoins.css";

const Takecoins = () => {
  const history = useHistory();

  /*<============================= For Takecoins Functionality =========================>*/

  const [wcoin, setUser] = useState({
    id: "",
    name: "",
    symbol: "",
    price: "",
    marketcap:"",
    percent:"",
  });

  let id, value;
  const handleEvents = (e) => {
    id = e.target.id;
    value = e.target.value;

    setUser({ ...wcoin, [id]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { id, name, symbol, price, marketcap, percent } = wcoin;

    const res = await fetch("/Takecoins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        symbol,
        price,
        marketcap,
        percent,
      }),
    });

    const resData = await res.json();
    console.log(resData);
    if (resData.statusCode === 422 || !resData) {
      window.alert("Coin not added😢😢" + resData.error);
      console.log("Coin not added 😢😢");
    } else if (resData.statusCode === 400) {
      window.alert("Error", resData.error);
      console.log("Error");
    } else {
      window.alert("Coin added 🔥🔥");
      console.log("Coin added 🔥🔥");
      history.push("/");
    }
  };

  return (

        <div >
          <form
            method="POST"
            id="register-form"
            action="#"
            className="form_css"
          >

            <input
              type="id"
              name="id"
              id="id"
              value={wcoin.id}
              onChange={handleEvents}
              required
              placeholder="ID"
            />

            <input
              type="name"
              name="name"
              id="name"
              value={wcoin.name}
              onChange={handleEvents}
              required
              placeholder="Name"
            />

            <input
              type="symbol"
              name="symbol"
              id="symbol"
              value={wcoin.symbol}
              onChange={handleEvents}
              placeholder="Symbol"
              required
            />

            <input
              type="price"
              name="price"
              id="price"
              placeholder="Price"
              value={wcoin.price}
              onChange={handleEvents}
              required
            />
            <input
              type="marketcap"
              name="marketcap"
              id="marketcap"
              placeholder="Marketcap"
              value={wcoin.marketcap}
              onChange={handleEvents}
              required
            />
            <input
              type="percent"
              name="percent"
              id="percent"
              placeholder="percent"
              value={wcoin.percent}
              onChange={handleEvents}
              required
            />

            <button type="submit" name="Takecoins" onClick={sendData} id="signin">
              Add coin
            </button>
          </form>
        </div>

  );
};

export default Takecoins;
