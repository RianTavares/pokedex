import React from 'react';

import pokeTypes from '../../assets/mocks/pokeTypes';


const Types = (props) => {

    const type = props.type ? (props.type).toLowerCase() : null;
    const cardColor = pokeTypes[`${type}`] ? pokeTypes[`${type}`] : '#003a70';

    return(
      <>
        {type ? (
          <div key={props.type} style={{backgroundColor: `${cardColor}`}}>
            {props.type}
          </div>
        ) : (
          ""
        )}
      </>
    )
} 

export default Types;

