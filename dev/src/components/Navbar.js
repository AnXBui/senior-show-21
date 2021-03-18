import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = () => {
  return <nav className='nav'>
    <div className="navBar">
      <img src={logo} alt="logo"/>
      <button type='button' className='navButton'>
        <FaAlignRight/>
      </button>
    </div>
    <PageLinks className='navLinks'></PageLinks>
  </nav>
}

export default Navbar
