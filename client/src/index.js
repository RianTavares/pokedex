import ReactDOM from "react-dom"
import React from "react"

import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./services/apollo/apollo-connect"
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import ApolloClient from "apollo-boost"
import App from "./App"


// const client = new ApolloClient({
//   uri: "https://graphql-pokemon.now.sh/",
//   cache: new InMemoryCache()
// })

const rootElement = document.getElementById("root")
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
)
