import ReactDOM from "react-dom"
import React from "react"

import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./services/apollo/apollo-connect"
import App from "./App"

const rootElement = document.getElementById("root")
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
)
