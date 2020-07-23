import React from "react";
import "./App.css";
import LandingPage from "./pages/Landing";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
