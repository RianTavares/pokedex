import ReactDOM from "react-dom"
import React from "react"

import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import App from "./App"

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/",
})

const rootElement = document.getElementById("root")
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
)
