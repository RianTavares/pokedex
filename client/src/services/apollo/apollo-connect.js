import ApolloClient, { InMemoryCache } from "apollo-boost"
import { IntrospectionFragmentMatcher } from "apollo-cache-inmemory"
import introspectionQueryResultData from "./fragmentTypes.ts"

const url = "https://graphql-pokemon.now.sh/"

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

export const cache = new InMemoryCache({
  dataIdFromObject: (object) => object.id || null,
  fragmentMatcher,
})

export const client = new ApolloClient({
  cache,
  uri: url,
})
