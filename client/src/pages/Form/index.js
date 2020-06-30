import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

import { gql } from "apollo-boost"
import { FaArrowLeft } from "react-icons/fa"
import { POKEMON_BY_ID } from "../../helper/gqlQueries"
import { cache } from "../../services/apollo/apollo-connect"

const Form = () => {
  const { id } = useParams()
  const [name, setName] = useState("")
  const [maxHeight, setMaxHeight] = useState("")
  const [minHeight, setMinHeight] = useState("")

  const history = useHistory()

  const data = cache.readQuery({
    query: POKEMON_BY_ID,
    variables: {
      id,
    },
  })

  const handlerBack = () => {
    history.push(`/${id}`)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()

    cache.writeFragment({
      id,
      fragment: gql`
        fragment name on Pokemon {
          __typename
          name
          height {
            __typename
            maximum
            minimum
          }
        }
      `,
      data: {
        name,
        __typename: "Pokemon",
        height: {
          __typename: "PokemonDimension",
          maximum: maxHeight,
          minimum: minHeight,
        },
      },
    })
  }

  useEffect(() => {
    if (data) {
      setName(data.pokemon.name)
      setMaxHeight(data.pokemon.height.maximum)
      setMinHeight(data.pokemon.height.minimum)
    }
  }, [data])

  return (
    <>
      <button
        type="button"
        className="page-content__card__back-home"
        onClick={handlerBack}
      >
        <FaArrowLeft size={25} color="#c52018" /> <p> Voltar</p>
      </button>
      <h1>Edite seu Pokemon Client Side</h1>
      {data && (
        <form className="form-cs" onSubmit={handlerSubmit}>
          <h3>Nome</h3>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h3>Altura Máxima</h3>
          <input
            id="maxHeight"
            name="maxHeight"
            type="text"
            value={maxHeight}
            onChange={(e) => setMaxHeight(e.target.value)}
          />

          <h3>Altura Mínima</h3>
          <input
            id="minHeight"
            name="minHeight"
            type="text"
            value={minHeight}
            onChange={(e) => setMinHeight(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      )}
    </>
  )
}

export default Form
