import React from 'react';
import pokeTypes from '../../assets/mocks/pokeTypes';

const Attacks = (props) => {

    const type = props.type ? (props.type).toLowerCase() : null;
    const cardColor = pokeTypes[`${type}`] ? pokeTypes[`${type}`] : '#003a70';
    const name = props.name;
    const damage = `${props.damage}%`
    
    return (
      <>
        {name && damage && type ? (
          <div className="attack-item">
            <p className="attack-item__name">{props.name}</p>
            <p className="attack-item__damage">{props.damage}</p>
            <div className="attack-item__fill-attack">
                <span style={{width: `${damage}`, backgroundColor: `${cardColor}`}}></span>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    )
}

export default Attacks;