import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    const {name = "Default"} = props
  return (
    <>
      <button>{name}</button>
    </>
  )
}


export default Button
