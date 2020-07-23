import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./router";

class App extends React.Component {
  render() {
    return (
      <Router basename="">
        <div>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={(props) => <route.component {...props} />}
                />
              );
            })}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
