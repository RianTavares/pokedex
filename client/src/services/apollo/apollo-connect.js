import ApolloClient, { InMemoryCache } from "apollo-boost";

const url = "https://graphql-pokemon.now.sh/";

export const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
})

export const client = new ApolloClient({
  cache: cache,
  uri: url
});
