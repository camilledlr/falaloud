import React, { useState } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import Select from "./views/Select";
import QA from "./views/QA";
import GuessWhat from "./views/GuessWhat";
import PlayQA from "./views/PlayQA";
import PlayGW from "./views/PlayGW";

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={HomePage} />
    <Route exact path="/select" component={Select} />
    <Route exact path="/q&a" component={QA} />
    <Route exact path="/guesswhat" component={GuessWhat} />
    <Route exact path="/q&a/play" component={PlayQA} />
    <Route exact path="/guesswhat/play" component={PlayGW} />
    </div>
  );
}

export default App;
