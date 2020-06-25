import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import pokeTypes from '../../assets/mocks/pokeTypes';

const Pokemon = (props) => {

    const pokemonId = props.id;
    const tipo = (props.type).toLowerCase();
    const cardColor = pokeTypes[`${tipo}`] ? pokeTypes[`${tipo}`] : '#003a70';

    return(
        <div className="poke-list__item" style={{borderColor: `${cardColor}`}}>
            <div className="poke-list__item__img-container">
                <img className="poke-list__item__img-container__img" src={props.img} alt={`imagem do ${props.name}`}/>
            </div>
            <Link className="poke-list__item__button" to={pokemonId}>
                <div className="poke-list__item__button__info" style={{backgroundColor: `${cardColor}`}}>
                    <p className="poke-list__item__button__info__name">{props.name}</p>
                    <div><FaEye /></div>
                </div>
            </Link>
        </div>
    )
}

export default Pokemon;