import React, { useEffect, useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import Pokemon from "../../components/Pokemon"

import { POKEMONS } from "../../helper/gqlQueries"

const Home = () => {
  const [filteredData, setFilteredData] = useState([])
  const [pokemons, setPokemons] = useState([])

  const { loading, error, data } = useQuery(POKEMONS, {})

  const findPokemon = (e) => {
    e.preventDefault()
    const inputString = e.target.value

    setFilteredData(
      pokemons.filter((item) => {
        return item.name.toLowerCase().includes(inputString)
      })
    )
  }

  useEffect(() => {
    if (data) {
      setPokemons(data.pokemons)
      setFilteredData(data.pokemons)
    }
  }, [data])

  return (
    <>
      {loading ? (
        <div className="loading">
          <div className="loading__pokeball" />
        </div>
      ) : (
        ""
      )}

      {error ? <p>template de error</p> : ""}

      {data ? (
        <section className="page-home">
          <form className="page-home__form" action="">
            <input
              type="text"
              placeholder="Procure pelo nome do seu Pokemon..."
              name="search"
              onChange={findPokemon}
            />
          </form>
          <section>
            <div className="poke-list">
              {filteredData ? (
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
              ) : (
                " "
              )}
            </div>
          </section>
        </section>
      ) : (
        ""
      )}
    </>
  )
}

export default Home
