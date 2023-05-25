import React from "react";
import bg from "../../assets/imgs/error.jpeg"
import { FaExclamationTriangle } from "react-icons/fa"
const Error = () => {
    return (
        <div className="error-page">
            <img className="error-page__img" src={bg} />
            <FaExclamationTriangle color="red" size="100"/>
            <p className="error-page__text">ERROR</p>
            <a className="error-page__link" href="/">
                <button>Back</button> 
            </a>
        </div>
    )

}

export default Error;

