import React, { createContext, useReducer } from "react";
import "./components/FontAwsomeIcon";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
// import About from "./components/About/About";
import Home1 from "./components/Home1/Landingpage1";
import Home2 from "./components/Home2/Landingpage2";
import Home3 from "./components/Home3/Landingpage3";
import Home4 from "./components/Home4/Landingpage4";
import Home5 from "./components/Home5/Landingpage5";
import Home6 from "./components/Home6/Landingpage6";
import Mainbar from "./components/Mainbar/Mainbar";
import News from "./components/News/News";
import Watchlist from "./components/Watchlist/Watchlist";
import CoinData from "./components/Coins/CoinData";
import CoinFront from "./components/Coins/CoinFront";
import CoinDataList from "./components/About/CoinDataList";
import Footer from "./components/Footer/Footer";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

import { initialState, reducer } from "./reducer/UseReducer";
import InnerCoinPage from "./components/InnerCoinPage/InnerCoinPage";
import Error404 from "./components/Error/error404";

// 1 Context API
export const ContextUser = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <ContextUser.Provider value={{ state, dispatch }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home1 />
            <Home2 />
            <Home3 />
            <Home4 />
            <Home6 />
            <Home5 />
          </Route>

          <Route path="/coins">
            <Mainbar />
            <CoinDataList />
          </Route>
          <Route path="/signin">
            <Mainbar />
            <Signin />
          </Route>
          <Route path="/signup">
            <Mainbar />
            <Signup />
          </Route>

          <Route path="/news">
            <Mainbar />
            <News />
          </Route>
          {/* <Route path="/coins">
          <Mainbar />
          <CoinData />
        </Route> */}
          <Route path="/coin-front">
            <Mainbar />
            <CoinFront />
          </Route>
          <Route path="/watchlist">
            <Mainbar />
            <Watchlist />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/innercoin">
            <Mainbar />
            <InnerCoinPage />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
        <Footer />
      </ContextUser.Provider>
    </div>
  );
};

export default App;
