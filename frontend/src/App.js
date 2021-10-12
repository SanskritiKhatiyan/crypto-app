import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Mainbar from "./components/Mainbar/Mainbar";

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
    </div>
  );
}

export default App;
