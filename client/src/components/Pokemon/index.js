import React from "react"
import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa"
import PropTypes from "prop-types"
import pokeTypes from "../../assets/mocks/pokeTypes"

const Pokemon = (props) => {
  const { id } = props
  const { type } = props
  const { name } = props
  const { number } = props
  const { img } = props

  const cardColor = pokeTypes[`${type.toLowerCase()}`]
    ? pokeTypes[`${type.toLowerCase()}`]
    : "#003a70"

  return (
    <div className="poke-list__item" style={{ borderColor: `${cardColor}` }}>
      <div className="poke-list__item__img-container">
        <img
          className="poke-list__item__img-container__img"
          src={img}
          alt={`imagem do ${name}`}
        />
      </div>
      <Link className="poke-list__item__button" to={id}>
        <div
          className="poke-list__item__button__info"
          style={{ backgroundColor: `${cardColor}` }}
        >
          <p className="poke-list__item__button__info__name">
            #{number} {name}
          </p>
          <div>
            <FaEye />
          </div>
        </div>
      </Link>
    </div>
  )
}

Pokemon.defaultProps = {
  id: "/",
  type: "grass",
  name: "",
  number: "",
  img: "",
}

Pokemon.propTypes = {
  id: PropTypes.node,
  type: PropTypes.node,
  name: PropTypes.node,
  number: PropTypes.node,
  img: PropTypes.node,
}

export default Pokemon
