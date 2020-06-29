import React from "react"
import PropTypes from "prop-types"

const Error = (props) => {
    const { img } = props
    const { message } = props
    const { backHome } = props


  return (
  <section> 
      <p>{message}</p>
      <img src={img} alt={`${message} Image`}/>
  </section>
  )
}

Error.defaultProps = {
  img: null,
  message: "Error Page",
  backHome: false,
}

Error.propTypes = {
  img: PropTypes.node,
  message: PropTypes.node,
  backHome: PropTypes.bool,
}

export default Error
