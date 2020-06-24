import React from 'react'
import { FaSearchengin } from "react-icons/fa";
import mock from "../../assets/mocks/data";
import Pokemon from "../../components/Pokemon";

const Home = () => {
    return (
        <section className="page-home">
            <form className="page-home__form" action="">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><FaSearchengin size="17"/></button>
            </form>
            <section>

                {console.log(mock)}

            <div className="poke-list">
                {mock.data.pokemons.map((response) => {     
                    return(
                        <Pokemon 
                            key={response.id} 
                            name={response.name}
                            img={response.image}
                        />
                    )
                })}
            </div>

            </section>
        </section>
    )
}

export default Home; 