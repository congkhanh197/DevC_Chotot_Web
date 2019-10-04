import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home.page";
import PricePage from "./pages/Price/Price.page";
import DetailPage from "./pages/Detail/Detail.page";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/price" component={PricePage} />
          <Route path={"/:listId"} component={DetailPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
