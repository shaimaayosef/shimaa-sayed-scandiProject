import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache({
    dataIdFromObject: (o) => (o._id ? `${o.__typename}:${o._id}` : null),
  }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <App client={client} />
        </Router>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
