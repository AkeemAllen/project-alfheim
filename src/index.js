import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "@apollo/link-context";
import { onError } from "apollo-link-error";
import { handleOpen, unMountSnackBar } from "./redux/actions/snackBarActions";
import Firebase, { FirebaseContext } from "./components/Firebase";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.REACT_APP_BASE_URI}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ response, graphQLErrors, networkError }) => {
  if (graphQLErrors)
    //eslint-disable-next-line
    graphQLErrors.map(({ message, locations, path }) => {
      store.dispatch(handleOpen(message, "error"));
      setTimeout(() => store.dispatch(unMountSnackBar()), 3000);
    });

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(errorLink.concat(link)),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <FirebaseContext.Provider value={new Firebase()}>
            <App />
          </FirebaseContext.Provider>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
