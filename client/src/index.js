import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh/',
  });

  client
        .query({
          query: gql` {
          pokemons(first: 151){
              id
              number
              name
              weight {
                minimum
                maximum
              }
              height {
                minimum
                maximum
              }
              classification
              types
              resistant
              attacks {
                fast {
                  name
                  type
                  damage
                }
                special {
                  name
                  type
                  damage
                }
              }
              weaknesses
              fleeRate
              maxCP
              evolutions {
                id
              }
              evolutionRequirements {
                amount
                name
              }
              maxHP
              image
            } 
          }
          `
        })
        .then(result => console.log(result));

const rootElement = document.getElementById("root");
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
rootElement);