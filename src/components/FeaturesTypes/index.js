import React from "react"
import PropTypes from "prop-types"

import {
  GiWaterDrop,
  GiSmallFire,
  GiLindenLeaf,
  GiPowerLightning,
  GiFist,
  GiPoisonBottle,
  GiFeather,
  GiSpottedBug,
  GiGhost,
  GiSpikedDragonHead,
  GiBeveledStar,
  GiSteelwingEmblem,
  GiFairyWings,
} from "react-icons/gi"

import { FaRegSnowflake, FaRegEye, FaMountain, FaCircle } from "react-icons/fa"

import { MdLandscape } from "react-icons/md"

function getIcon(type) {
  switch (type) {
    case "normal":
      return <GiBeveledStar color="#a8a777" />

    case "fire":
      return <GiSmallFire size="25" color="#ef7e2f" />

    case "water":
      return <GiWaterDrop size="25" color="#678fef" />

    case "grass":
      return <GiLindenLeaf size="25" color="#77c64f" />

    case "electric":
      return <GiPowerLightning size="25" color="#ffea00" />

    case "fighting":
      return <GiFist size="25" color="#bf3028" />

    case "ice":
      return <FaRegSnowflake size="25" color="#97d7d7" />

    case "poison":
      return <GiPoisonBottle size="25" color="#9e429c" />

    case "ground":
      return <MdLandscape size="25" color="#dfbf68" />

    case "flying":
      return <GiFeather size="25" color="#a78fef" />

    case "psychic":
      return <FaRegEye size="25" color="#f75787" />

    case "bug":
      return <GiSpottedBug size="25" color="#a7b721" />

    case "rock":
      return <FaMountain size="25" color="#b79e38" />

    case "ghost":
      return <GiGhost size="25" color="#705798" />

    case "dark":
      return <FaCircle size="25" color="#6e5848" />

    case "dragon":
      return <GiSpikedDragonHead size="25" color="#6f37f7" />

    case "steel":
      return <GiSteelwingEmblem size="25" color="#cecece" />

    case "fairy":
      return <GiFairyWings size="25" color="#e39cea" />

    default:
      return ""
  }
}

const FeaturesTypes = (props) => {
  const { type } = props

  return (
    <div className="features">
      {getIcon(type.toLowerCase())}
      <p>{type}</p>
    </div>
  )
}

FeaturesTypes.defaultProps = {
  type: "grass",
}

FeaturesTypes.propTypes = {
  type: PropTypes.node,
}

export default FeaturesTypes
