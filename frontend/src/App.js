import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      {/* <Route path="/signin">
        <Signin />
      </Route> */}

      <Route path="/signup">
        <Signup />
      </Route>
    </div>
  );
}

export default App;
