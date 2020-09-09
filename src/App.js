import React from "react";
import "./main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./router";
import PrivateRoute from "./components/PrivateRoute";

class App extends React.Component {
  // componentDidMount() {
  //   window.gapi.load("auth2", () => {
  //     window.gapi.auth2.init({
  //       client_id:
  //         "558648876747-khl7895583ejl2uj6n91fnc8lj9ceeps.apps.googleusercontent.com",
  //     });
  //     console.log("Api Initialized");
  //   });

  //   window.gapi.load("signin2", () => {
  //     const params = {
  //       onSuccess: () => {
  //         console.log("signed in");
  //       },
  //     };
  //     window.gapi.signin2.render("loginButton", params);
  //   });
  // }

  render() {
    return (
      <Router basename="">
        <Switch>
          {routes.map((route, index) => {
            return !route.requiresAuth ? (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props) => <route.component {...props} />}
              />
            ) : (
              <PrivateRoute
                key={index}
                path="/account"
                component={(props) => <route.component {...props} />}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
