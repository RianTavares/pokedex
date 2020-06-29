import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

import { useQuery } from "@apollo/react-hooks"
import { FaArrowLeft } from "react-icons/fa"
import { POKEMON_BY_ID } from "../../helper/gqlQueries"
import { gql } from "apollo-boost"
import { cache } from "../../services/apollo/apollo-connect"

import pokeTypes from "../../assets/mocks/pokeTypes"
import Types from "../../components/Types"
import Attacks from "../../components/Attacks"
import Feature from "../../components/FeaturesTypes"
import Evolution from "../../components/Evolutions"

const Pokemon = () => {
  window.scrollTo(0, 0)

  const history = useHistory()
  const [cardColor, setCardColor] = useState("#003a70")

  const { id } = useParams()
  const { loading, error, data } = useQuery(POKEMON_BY_ID, {
    variables: { id: id || id !== null },
  })

  const type = data?.pokemon?.types[0]
    ? data.pokemon.types[0].toLowerCase()
    : null

  const backHome = () => {
    history.push("/")
  }

  useEffect(() => {
    setCardColor(pokeTypes[`${type}`] ? pokeTypes[`${type}`] : "#003a70")
    if(data) {
    const newPoke = {
      id: "UG9rZW1vbjowMDE=",
      __typename: "Pokemon",
      "number": "001",
      "name": "Bulbasaur viadao",
      "weight": {
        "minimum": "6.04kg",
        "maximum": "7.76kg"
      },
      "height": {
        "minimum": "0.61m",
        "maximum": "0.79m"
      },
      "classification": "Seed Pokémon",
      "types": [
        "Grass",
        "Poison"
      ],
      "resistant": [
        "Water",
        "Electric",
        "Grass",
        "Fighting",
        "Fairy"
      ],
      "attacks": {
        "fast": [
          {
            "name": "Tackle",
            "type": "Normal",
            "damage": 12
          },
          {
            "name": "Vine Whip",
            "type": "Grass",
            "damage": 7
          }
        ],
        "special": [
          {
            "name": "Power Whip",
            "type": "Grass",
            "damage": 70
          },
          {
            "name": "Seed Bomb",
            "type": "Grass",
            "damage": 40
          },
          {
            "name": "Sludge Bomb",
            "type": "Poison",
            "damage": 55
          }
        ]
      },
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "fleeRate": 0.1,
      "maxCP": 951,
      "evolutions": [
        {
          "id": "UG9rZW1vbjowMDI="
        },
        {
          "id": "UG9rZW1vbjowMDM="
        }
      ],
      "evolutionRequirements": {
        "amount": 25,
        "name": "Bulbasaur candies"
      },
      "maxHP": 1071,
      "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
    }

    cache.writeFragment({
      id: 'UG9rZW1vbjowMDE=',
      fragment: gql`
      fragment name on Pokemon{
        __typename
          name
        }
  
      `,
      data: {
        name: "zé",
        __typename: "Pokemon"
      },
    });
    const bla = cache.readQuery({
      query: POKEMON_BY_ID,
      variables: {
        id: "UG9rZW1vbjowMDE=",
      },
    });

 
    console.log('cache>>>>', cache)
    console.log('blaaaa>>>', bla);
   }
  }, [type, data])

  return (
    <>
      {loading ? (
        <div className="loading">
          <div className="loading__pokeball" />
        </div>
      ) : (
        " "
      )}

      {error ? <p>template de error</p> : ""}

      {data ? (
        <>
          <button
            type="button"
            className="page-content__card__back-home"
            onClick={backHome}
          >
            <FaArrowLeft size={25} color="#c52018" /> <p> Voltar a Home</p>
          </button>
          <section className="poke-details">
            <header
              className="poke-details__header"
              style={{ backgroundColor: `${cardColor}` }}
            >
              <hgroup>
                <h1>
                  #{data.pokemon.number} {data.pokemon.name}
                </h1>
              </hgroup>
              <div className="poke-details__header__type">
                {data.pokemon.types.map((pokemonType) => {
                  return <Types key={pokemonType} type={pokemonType} />
                })}
              </div>
            </header>
            <div className="poke-details__card">
              <div className="poke-details__card__infos">
                <div className="poke-details__card__infos__img-container">
                  <div
                    className="poke-details__card__infos__img-container__img"
                    style={{ backgroundImage: `url(${data.pokemon.image})` }}
                  />
                </div>
                <div className="poke-details__card__infos__personal">
                  <div className="poke-details__card__infos__personal__data">
                    <div className="poke-details__card__infos__personal__data__height">
                      <h2>Altura</h2>
                      <p>Mínima: {data.pokemon.height.minimum}</p>
                      <p>Máxima: {data.pokemon.height.maximum}</p>
                    </div>
                    <div className="poke-details__card__infos__personal__data__weight">
                      <h2>Peso</h2>
                      <p>Mínimo: {data.pokemon.weight.minimum}</p>
                      <p>Máximo: {data.pokemon.weight.maximum}</p>
                    </div>
                  </div>
                  <div className="poke-details__card__infos__personal__features">
                    <div className="poke-details__card__infos__personal__features__resistant">
                      <h2>Resistente:</h2>
                      <div className="feature-list">
                        {data.pokemon.resistant.map((resistantType) => {
                          return (
                            <Feature key={resistantType} type={resistantType} />
                          )
                        })}
                      </div>
                    </div>
                    <div className="poke-details__card__infos__personal__features__weaknesses">
                      <h2>Fraquezas:</h2>
                      <div className="feature-list">
                        {data.pokemon.weaknesses.map((weaknessType) => {
                          return (
                            <Feature key={weaknessType} type={weaknessType} />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  <div>Classificação: {data.pokemon.classification}</div>
                </div>
              </div>
              <section
                className="poke-details__card__sub-header"
                style={{ backgroundColor: `${cardColor}` }}
              >
                <hgroup>
                  <h2>Ataques e danos</h2>
                </hgroup>
              </section>
              <section className="poke-details__card__attacks">
                <div className="poke-details__card__attacks__fast">
                  <h2>Fast</h2>
                  {data.pokemon.attacks.fast.map((attack) => {
                    return (
                      <Attacks
                        key={attack.name}
                        type={attack.type}
                        damage={attack.damage}
                        name={attack.name}
                      />
                    )
                  })}
                </div>
                <div className="poke-details__card__attacks__special">
                  <h2>Special</h2>
                  {data.pokemon.attacks.special.map((attack) => {
                    return (
                      <Attacks
                        key={attack.name}
                        type={attack.type}
                        damage={attack.damage}
                        name={attack.name}
                      />
                    )
                  })}
                </div>
              </section>
              {data.pokemon.evolutions ? (
                <>
                  <section
                    className="poke-details__card__sub-header"
                    style={{ backgroundColor: `${cardColor}` }}
                  >
                    <hgroup>
                      <h2>Evoluções</h2>
                    </hgroup>
                  </section>
                  <section className="poke-details__card__evolution">
                    {data.pokemon?.evolutions?.map((poke) => {
                      return <Evolution key={poke.id} id={poke.id} />
                    })}
                  </section>
                </>
              ) : (
                " "
              )}
            </div>
          </section>
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default Pokemon
