import React from "react"
import PropTypes from "prop-types"

import { useQuery } from "@apollo/react-hooks"
import { POKEMON_BY_ID } from "../../services/apollo/gqlQueries"

import Pokemon from "../Pokemon"

const Evolutions = (props) => {
  const { id } = props

  const { error, data } = useQuery(POKEMON_BY_ID, {
    variables: { id: id || id !== null },
  })

  return (
    <>
      {error ? <p>template de error</p> : ""}

      {data ? (
        <Pokemon
          key={id}
          name={data.pokemon.name}
          img={data.pokemon.image}
          id={id}
          type={data.pokemon.types[0]}
          number={data.pokemon.number}
        />
      ) : (
        ""
      )}
    </>
  )
}

Evolutions.defaultProps = {
  id: "",
}

Evolutions.propTypes = {
  id: PropTypes.node,
}

export default Evolutions
