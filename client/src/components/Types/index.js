import React from 'react';

import pokeTypes from '../../assets/mocks/pokeTypes';


const Types = (props) => {

    const tipo = (props.type).toLowerCase();
    const cardColor = pokeTypes[`${tipo}`] ? pokeTypes[`${tipo}`] : '#003a70';

    return(
        <div key={props.type} style={{backgroundColor: `${cardColor}`}}>
            {props.type}
        </div>
    )
} 

export default Types;

