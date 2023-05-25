import React from "react"
import PropTypes from "prop-types"
import pokeTypes from "../../assets/mocks/pokeTypes"

const Types = (props) => {
  const { type } = props

  const pokemonType = type ? type.toLowerCase() : null

  const cardColor = pokeTypes[`${pokemonType}`]
    ? pokeTypes[`${pokemonType}`]
    : "#003a70"

  return (
    <>
      {pokemonType ? (
        <div key={type} style={{ backgroundColor: `${cardColor}` }}>
          {type}
        </div>
      ) : (
        ""
      )}
    </>
  )
}

Types.defaultProps = {
  type: "grass",
}

Types.propTypes = {
  type: PropTypes.node,
}

export default Types
