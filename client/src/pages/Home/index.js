import React from 'react'
import { FaSearchengin } from 'react-icons/fa';
import Pokemon from '../../components/Pokemon';

import { POKEMONS } from '../../helper/gqlQueries'
import { useQuery } from '@apollo/react-hooks';

const Home = () => {

  const { loading, error, data } = useQuery(POKEMONS, {
  });

  return (
    <>
      {loading ? (
        <div className="loading"><div className="loading__pokeball"></div></div>
      ) : (
          ''
        )}

      {error ? <p>template de error</p> : ''}

      {data ? (
        <section className="page-home">
          <form className="page-home__form" action="">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><FaSearchengin size="17" /></button>
          </form>
          <section>


            <div className="poke-list">
              {data.pokemons.map((response) => (
                <Pokemon
                  key={response.id}
                  name={response.name}
                  img={response.image}
                  id={response.id}
                  type={response.types[0]}
                />
              ))}
            </div>

          </section>
        </section>
      ) : (
          ''
        )}
    </>
  )
}

export default Home; 