import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {

    const [cardColor, setCardColor] = useState('');

    const randomThemeColor = () => {
        const colors = ["#73a431", "#de9400", "#623108", "#e65a41", "#4e4d4b", "#c52018", "#003a70"];
        let selectedColor = colors[Math.floor(Math.random()*colors.length)];
        return selectedColor;
    }

    useEffect(() => {
        setCardColor(randomThemeColor());
      }, []);
    

    return(
        <div className="poke-list__item" style={{borderColor: `${cardColor}`}}>
            <div className="poke-list__item__img-container">
                <img className="poke-list__item__img-container__img" src={props.img} alt={`imagem do ${props.name}`}/>
            </div>
            <div className="poke-list__item__info" style={{backgroundColor: `${cardColor}`}}>
                <p className="poke-list__item__info__name">{props.name}</p>
            </div>
        </div>
    )
}

export default Pokemon;