import React from "react"
// import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { graphql, Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
      <AniLink cover to="/" bg="#663399" className='navLogo' direction="right"
  duration={1}>
          <Logo />
      </AniLink> 
        
      <button className='navButton'>
            <Burger/>
      </button>

      <div className="navMenu">
        <AnchorLink className='navMenuItem' to="/#intro" title="intro"/>
        <AnchorLink className='navMenuItem' to="/#students" title="students" />
        <AnchorLink className='navMenuItem' to="/#socialmedia" title="social media" />
        <AnchorLink className='navMenuItem' to="/#info" title="more info" />
      </div>
    </div>

    
  </nav>
}

export default Navbar
