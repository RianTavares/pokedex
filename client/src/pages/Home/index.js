import React from 'react'
import { FaSearchengin } from "react-icons/fa";
import mock from "../../assets/mocks/data";

const Home = () => {
    return (
        <section class="page-home">
            <form class="page-home__form" action="">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><FaSearchengin size="17"/></button>
            </form>
            <section>

                {console.log(mock)}

            <div className="poke-list">
                {mock.data.pokemons.map((response) => {     
                    return(
                        <div>{response.name}</div>
                    )
                })}
            </div>

            </section>
        </section>
    )
}

export default Home; 