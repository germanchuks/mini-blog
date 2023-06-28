import React from 'react'
import Logo from '../img/logo3.png'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <span>
        Made with &#10084; and <i>React.js</i>
      </span>
    </footer>
  )
}

export default Footer