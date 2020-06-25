import React from 'react';
import pokeTypes from '../../assets/mocks/pokeTypes';

const Attacks = (props) => {

    const tipo = (props.type).toLowerCase();
    const cardColor = pokeTypes[`${tipo}`] ? pokeTypes[`${tipo}`] : '#003a70';
    const damage = `${props.damage}%`

    return (
        <div className="attack-item">
            <p className="attack-item__name">{props.name}</p>
            <p className="attack-item__damage">{props.damage}</p>
            <div className="attack-item__fill-attack">
                <span style={{width: `${damage}`, backgroundColor: `${cardColor}`}}></span>
            </div>
        </div>
    )
}

export default Attacks;