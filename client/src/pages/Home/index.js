import React from 'react'
import { FaSearchengin } from "react-icons/fa";

const Home = () => {
    return (
        <section class="page-home">
            <form class="page-home__form" action="">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><FaSearchengin size="17"/></button>
            </form>
            <section>Itens</section>
        </section>
    )
}

export default Home; 