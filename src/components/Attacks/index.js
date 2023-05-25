import React from "react"
import PropTypes from "prop-types"

import pokeTypes from "../../assets/mocks/pokeTypes"

const Attacks = (props) => {
  const { type } = props
  const { name } = props
  const { damage } = props

  const pokemonType = type ? type.toLowerCase() : null

  const cardColor = pokeTypes[`${pokemonType}`]
    ? pokeTypes[`${pokemonType}`]
    : "#003a70"
  const attackDamage = `${damage}%`

  return (
    <>
      {name && damage && type ? (
        <div className="attack-item">
          <p className="attack-item__name">{name}</p>
          <p className="attack-item__damage">{damage}</p>
          <div className="attack-item__fill-attack">
            <span
              style={{
                width: `${attackDamage}`,
                backgroundColor: `${cardColor}`,
              }}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

Attacks.defaultProps = {
  type: "grass",
  name: "",
  damage: "",
}

Attacks.propTypes = {
  type: PropTypes.node,
  name: PropTypes.node,
  damage: PropTypes.node,
}

export default Attacks
