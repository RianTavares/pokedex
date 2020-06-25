import React from 'react'
import { useParams } from 'react-router-dom';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

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
    console.log(poke)
        
    return (
        <section>
            <header>
                <hgroup>
                    <h1>{poke.name}</h1>
                </hgroup>
            </header>
            <div>
                <div> 
                    {poke.types.map((type) => {     
                        return(
                            <div key={type}>{type}</div>
                        )
                    })}
                </div>
                <div>
                    <img src={poke.image} alt={`Imagem do ${poke.name}`}/>
                    <div> 
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
                    <div> 
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