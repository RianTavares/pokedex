import React from 'react'
import { useParams } from 'react-router-dom';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import pokeTypes from '../../assets/mocks/pokeTypes';
import Types from '../../components/Types';

function PokemonById() {
    let { id } = useParams();
    
    const { loading, error, data } = useQuery(gql`
    {
        pokemon(id: "${id}") {
            number
            name
            weight {
              minimum
              maximum
            }
            height {
              minimum
              maximum
            }
            classification
            types
            resistant
            attacks {
              fast {
                name
                type
                damage
              }
              special {
                name
                type
                damage
              }
            }
            weaknesses
            fleeRate
            maxCP
            evolutions {
              id
            }
            evolutionRequirements {
              amount
              name
            }
            maxHP
            image
          }
        }`);
    
    if (loading) return <div className="loading"><div className="loading__pokeball"></div></div>;
    if (error) return <p>Error :(</p>;

    const poke = data.pokemon;
    const tipo = (poke.types[0]).toLowerCase();
    const cardColor = pokeTypes[`${tipo}`] ? pokeTypes[`${tipo}`] : '#003a70';

        
    return (
        <section className="poke-details">
            <header 
                className="poke-details__header"
                style={{backgroundColor: `${cardColor}`}}>
                <hgroup>
                    <h1>{poke.name}</h1>
                </hgroup>
                <div className="poke-details__header__type"> 
                    {poke.types.map((type) => {     
                        return(
                            <Types key={type} type={type}/>
                        )
                    })}
                </div>
            </header>
            <div className="poke-details__card">
                <div className="poke-details__card__infos">
                    <div className="poke-details__card__infos__img" >
                        <img src={poke.image} alt={`Imagem do ${poke.name}`}/>
                    </div>
                    <div className="poke-details__card__infos__attack-fast"> 
                        <h2>Fast</h2>
                        {poke.attacks.fast.map((attack) => {     
                            return(
                                <div key={attack.name}>
                                    <p>{attack.name}</p>
                                    <p>{attack.type}</p>
                                    <p>{attack.damage}</p>
                                </div>
                            )
                        })}    
                    </div>
                    <div className="poke-details__card__infos__attack-special"> 
                        <h2>Special</h2>
                        {poke.attacks.special.map((attack) => {     
                            return(
                                <div key={attack.name}>
                                    <p>{attack.name}</p>
                                    <p>{attack.type}</p>
                                    <p>{attack.damage}</p>
                                </div>
                            )
                        })}    
                    </div>
                </div>
                <div>Classificação: {poke.classification}</div>

            </div>

        </section>
    )
  }

const Pokemon = () => {
    return (
        <>
            <PokemonById />
        </>
    )
}

export default Pokemon; 