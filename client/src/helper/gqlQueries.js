import { gql } from "apollo-boost"

export const POKEMONS = gql`
query($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
      types
    }
  }
`

export const POKEMON_BY_ID = gql`
  query($id: String) {
    pokemon(id: $id) {
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
