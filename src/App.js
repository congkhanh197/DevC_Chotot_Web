import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home.page";
import PricePage from "./pages/Price/Price.page";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/price">
            <PricePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
