import react, { useEffect, useState } from "react";
import "./Watchlist.css";
import { useHistory } from "react-router-dom";

var Coin_Name;

const Watchlist = () => {
  const [name, setName] = useState(Coin_Name)
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
      console.log(data.validUser.coinName);
      setName(data.validUser.coinName)
      console.log(Coin_Name)


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
      <h1>This page is under process.</h1>
      <h2> Coin selected: {name} </h2>
    </div>
  )
};

export default Watchlist;
