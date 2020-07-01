import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

import { useQuery } from "@apollo/react-hooks"
import { FaArrowLeft, FaEdit } from "react-icons/fa"
import { POKEMON_BY_ID } from "../../services/apollo/gqlQueries"

import pokeTypes from "../../assets/mocks/pokeTypes"
import Types from "../../components/Types"
import Attacks from "../../components/Attacks"
import Feature from "../../components/FeaturesTypes"
import Evolution from "../../components/Evolutions"
import Error from "../../components/Error"
import Pikachu404 from "../../assets/imgs/pikachu-404.png"

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

  const handlerBackHome = () => {
    history.push("/")
  }

  const handlerEdit = () => {
    history.push(`/form/${id}`)
  }

  useEffect(() => {
    setCardColor(pokeTypes[`${type}`] ? pokeTypes[`${type}`] : "#003a70")

    if(data) {
      if(!data.pokemon) {
        history.push("/page/not-found")
      }
    }
  }, [type, data])

  return (
    <>
      {loading && (
        <div className="loading">
          <div className="loading__pokeball" />
        </div>
      )}

      {error && (
        <Error
          img={Pikachu404}
          message="500 - Internal Server Error"
          backHome
        />
      )}

      {data?.pokemon && (
        <>
          <button
            type="button"
            className="page-content__card__back-home"
            onClick={handlerBackHome}
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
              <div className="poke-details__header__type desk">
                {data.pokemon.types.map((pokemonType) => {
                  return <Types key={pokemonType} type={pokemonType} />
                })}
              </div>
              <button
                className="poke-details__header__button"
                type="button"
                onClick={handlerEdit}
              >
                <FaEdit size="25" />
              </button>
            </header>
            <div className="poke-details__card">
              <div className="poke-details__card__infos">
                <div className="poke-details__card__infos__img-container">
                  <div
                    className="poke-details__card__infos__img-container__img"
                    style={{ backgroundImage: `url(${data.pokemon.image})` }}
                  />
                </div>
                <div className="poke-details__header__type mobi">
                  {data.pokemon.types.map((pokemonType) => {
                    return <Types key={pokemonType} type={pokemonType} />
                  })}
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
              {data?.pokemon?.evolutions && (
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
              )}
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default Pokemon
