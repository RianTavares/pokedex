import React from 'react'
import { FaSearchengin } from 'react-icons/fa';
import Pokemon from '../../components/Pokemon';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


function PokemonsItems() {
    const { loading, error, data } = useQuery(gql`
    {
        pokemons(first: 151){
            id
            number
            name
            image
            types
        }
    }
    `);
        
    if (loading) return <div className="loading"><div className="loading__pokeball"></div></div>;
    if (error) return <p>Error :(</p>;
        
    return data.pokemons.map((response) => (
        <Pokemon 
            key={response.id} 
            name={response.name}
            img={response.image}
            id={response.id}
            type={response.types[0]}
        />
    ))
  }

const Home = (props) => {

    return (
        <section className="page-home">
            <form className="page-home__form" action="">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><FaSearchengin size="17"/></button>
            </form>
            <section>


            <div className="poke-list">
                <PokemonsItems />
            </div>

            </section>
        </section>
    )
}

export default Home; 