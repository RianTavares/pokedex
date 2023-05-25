import React from "react"

import WhoisPokemon from "../../assets/imgs/pikachu-404.png"
import Error from "../../components/Error"

const Page404 = () => {
  return <Error img={WhoisPokemon} message="404 - Page Not Found" backHome />
}

export default Page404
