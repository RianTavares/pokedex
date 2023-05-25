import React from "react"
import { withRouter } from "react-router"
import PropTypes from "prop-types"

import "./assets/scss/Main.scss"
import Footer from "./components/Footer"

const Body = (props) => {
  const { children } = props

  return (
    <>
      <a
        className="ribbon"
        href="https://github.com/RianTavares/pokedex"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fork me on GitHub
      </a>
      <main className="page-content">
        <section className="page-content__card">{children}</section>
      </main>
      <Footer />
    </>
  )
}

Body.defaultProps = {
  children: "",
}

Body.propTypes = {
  children: PropTypes.node,
}

export default withRouter(Body)
