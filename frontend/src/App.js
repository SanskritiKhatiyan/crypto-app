import React from "react";
import "./components/FontAwsomeIcon";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import About from "./components/About/About";
import Home1 from "./components/Home1/Landingpage1";
import Home2 from "./components/Home2/Landingpage2";
import Home3 from "./components/Home3/Landingpage3";
import Home4 from "./components/Home4/Landingpage4";
import Mainbar from "./components/Mainbar/Mainbar";
import News from "./components/News/News";
// import { GlobalProvider } from "./components/Watchlist/GlobalState";
// import Add from "./components/Watchlist/Add";

import Watchlist from "./components/Watchlist/Watchlist";
import CoinData from "./components/Coins/CoinData";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      {/* <GlobalProvider> */}
      <Navbar />
      <Mainbar />

      <Route exact path="/">
        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/coins">
        <CoinData />
      </Route>
      <Route path="/watchlist">
        <Watchlist />
      </Route>
      {/* <Route exact path="/add">
        <Add />
      </Route> */}
      {/* </GlobalProvider> */}
    </div>
  );
}

export default App;
