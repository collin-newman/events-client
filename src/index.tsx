import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://eventsgraphql-env.eba-2zsmm9ri.us-east-1.elasticbeanstalk.com/graphql", // your API url goes here,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
