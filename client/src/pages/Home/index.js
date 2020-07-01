import React, { useEffect, useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import Pokemon from "../../components/Pokemon"

import { POKEMONS } from "../../services/apollo/gqlQueries"

const Home = () => {
  const [filteredData, setFilteredData] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [first, setFirst] = useState(20)
  const [dataLength, setDataLength] = useState(0)
  const [buttonText, setButtonText] = useState("Carregar mais")

  const { loading, error, data } = useQuery(POKEMONS, {
    variables: { first: first || first !== null },
  })

  const findPokemon = (e) => {
    e.preventDefault()
    const inputString = e.target.value.toLowerCase()

    setFilteredData(
      pokemons.filter((item) => {
        return item.name.toLowerCase().includes(inputString)
      })
    )
  }

  const handlerPagination = () => {
    setFirst(first + 20)
  }

  useEffect(() => {
    if (data && loading) {
      const buttonMore = document.getElementById("button-more")
      buttonMore.classList.add("loading-ring")
      buttonMore.disabled = true
    }

    if (data && !loading) {
      setDataLength(data.pokemons.length)

      const buttonMore = document.getElementById("button-more")
      buttonMore.classList.remove("loading-ring")
      buttonMore.disabled = false

      setPokemons(data.pokemons)
      setFilteredData(data.pokemons)

      if (dataLength === data.pokemons.length) {
        buttonMore.classList.add("no-poke")
        setButtonText("Ops! acabaram os pokemons :(")
        buttonMore.disabled = true
      }
    }
  }, [data, loading])

  return (
    <>
      {loading && (
        <div className="loading">
          <div className="loading__pokeball" />
        </div>
      )}

      {error ? <p>template de error</p> : ""}

      {data && (
        <>
          <section className="page-home">
            <form className="page-home__form">
              <input
                type="text"
                placeholder="Procure pelo nome do seu Pokemon..."
                name="search"
                onChange={findPokemon}
              />
            </form>
            <section>
              <div className="poke-list">
                {filteredData && (
                  <>
                    {filteredData.map((response) => (
                      <Pokemon
                        key={response.id}
                        name={response.name}
                        img={response.image}
                        id={response.id}
                        type={response.types[0]}
                        number={response.number}
                      />
                    ))}
                  </>
                )}
              </div>
            </section>
          </section>
          <button
            type="button"
            className="page-home__button"
            id="button-more"
            onClick={handlerPagination}
          >
            {buttonText}
            <div />
            <div />
            <div />
            <div />
          </button>
        </>
      )}
    </>
  )
}

export default Home
