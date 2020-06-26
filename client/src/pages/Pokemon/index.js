import React from 'react'
import { useParams } from 'react-router-dom';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import pokeTypes from '../../assets/mocks/pokeTypes';
import Types from '../../components/Types';
import Attacks from '../../components/Attacks';
import Feature from '../../components/FeaturesTypes';


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
    console.log('data>>>', poke)
    const tipo = (poke.types[0]).toLowerCase();
    const cardColor = pokeTypes[`${tipo}`] ? pokeTypes[`${tipo}`] : '#003a70';

        
    return (
        <section className="poke-details">
            <header 
                className="poke-details__header"
                style={{backgroundColor: `${cardColor}`}}>
                <hgroup>
                    <h1>#{poke.number}  {poke.name}</h1>
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
                    <div className="poke-details__card__infos__img-container" >
                        <div 
                          className="poke-details__card__infos__img-container__img" 
                          style={{backgroundImage: `url(${poke.image})`}}>

                          </div>
                    </div>
                    <div className="poke-details__card__infos__personal">
                      <div className="poke-details__card__infos__personal__data">
                        <div className="poke-details__card__infos__personal__data__height">
                          <h2>Altura</h2>
                          <p>Mínima: {poke.height.minimum}</p>
                          <p>Máxima: {poke.height.maximum}</p>
                        </div>
                        <div className="poke-details__card__infos__personal__data__weight">
                          <h2>Peso</h2>
                          <p>Mínimo: {poke.weight.minimum}</p>
                          <p>Máximo: {poke.weight.maximum}</p>
                        </div>
                      </div>
                      <div className="poke-details__card__infos__personal__features">
                        <div className="poke-details__card__infos__personal__features__resistant">
                          <h2>Resistente:</h2>
                          <div className="feature-list">
                            {poke.resistant.map((type) => {     
                                return(
                                    <Feature key={type} type={type} />
                                )
                            })}
                          </div>
                        </div>
                        <div className="poke-details__card__infos__personal__features__weaknesses">
                          <h2>Fraquezas:</h2>
                          <div className="feature-list">
                            {poke.weaknesses.map((type) => {     
                                return(
                                  <Feature key={type} type={type} />
                                )
                            })}
                          </div>
                        </div>
                      </div>
                      <div>Classificação: {poke.classification}</div>
                    </div>
                </div>
                <section 
                  className="poke-details__card__attacks-header"
                  style={{backgroundColor: `${cardColor}`}}>
                    <hgroup>
                      <h2>Ataques e danos</h2>
                    </hgroup>     
                </section>
                <section className="poke-details__card__attacks">
                  <div className="poke-details__card__attacks__fast"> 
                      <h2>Fast</h2>
                      {poke.attacks.fast.map((attack) => {     
                          return(
                              <Attacks 
                                  key={attack.type} 
                                  type={attack.type}
                                  damage={attack.damage}
                                  name={attack.name}
                              />
                          )
                      })}    
                  </div>
                  <div className="poke-details__card__attacks__special"> 
                          <h2>Special</h2>
                          {poke.attacks.special.map((attack) => {     
                              return(
                                  <Attacks 
                                      key={attack.type} 
                                      type={attack.type}
                                      damage={attack.damage}
                                      name={attack.name}
                                  />
                              )
                          })}    
                  </div>
                </section>
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