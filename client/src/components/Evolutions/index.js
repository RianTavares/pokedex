import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { POKEMON_BY_ID } from '../../helper/gqlQueries';

import Pokemon from '../Pokemon';

const Evolutions = (props) => {
  const id = props.id;

  const { loading, error, data } = useQuery(POKEMON_BY_ID, {
    variables: { id: id || id !== null }
  });

  return (
    <>

      {error ? <p>template de error</p> : ''}

      {data ? (
        <Pokemon
          key={props.id}
          name={data.pokemon.name}
          img={data.pokemon.image}
          id={props.id}
          type={data.pokemon.types[0]}
          number={data.pokemon.number}
        />
      ) : (
          ''
        )}
    </>
  )
}

export default Evolutions;