import React from "react"
// import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { graphql, Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import scrollToElement from 'scroll-to-element';


import Logo from "./svg/Logo"
import Burger from "./svg/Burger"

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

// export function scroller(target, offset = 0, duration = 250){
//   console.log('scrolling to target?');
//   scrollToElement(target, {
//     duration,
//     offset,
//   });
// }


const Navbar = ({location}) => {
  return <nav className='nav'>
    <div className="navBar">
      <Link to="/">
          <Logo />
      </Link>
        
      <button>
            <Burger/>
      </button>
    </div>

    <div className="navMenu">
        <AnchorLink to="/#intro" title="Intro"/>
        <AnchorLink to="/#students" title="Students" />
        {/* <AnchorLink to="/#students" title="Students"/> */}
    </div>
  </nav>
}

export default Navbar
