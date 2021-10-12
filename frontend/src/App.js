import React from "react";
import "./components/FontAwsomeIcon";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Mainbar from "./components/Mainbar/Mainbar";
import News from "./components/News/News";
import Coins from "./components/Coins/Coins";
import Watchlist from "./components/Watchlist/Watchlist";

function App() {
  return (
    <div>
      <Navbar />
      <Mainbar />
      <Route exact path="/">
        <Home />
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
        <Coins />
      </Route>
      <Route path="/watchlist">
        <Watchlist />
      </Route>
    </div>
  );
}

export default App;
