import React, { useState } from "react"
// import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { graphql, useStaticQuery, Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import AniLink from "gatsby-plugin-transition-link/AniLink";


// import scrollToElement from 'scroll-to-element';


import Logo from "./svg/Logo"
import Burger from "./svg/Burger"

// import { gsap } from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import { HiMailOpen } from "@react-icons/all-files/hi/HiMailOpen";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";



const Navbar = ({navType="home", pageName="home"}) => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )

  var slugify = require('slugify')

  const slug = slugify(pageName);
  const shareUrl = `${site.siteMetadata.siteUrl}/${slug}`

  const [social, setSocial] = useState(false);



  

  // const pageUrl = 

  const navMenu = () => {
    if (navType == "home"){
      return <div className="navMenu">
      <AnchorLink className='navMenuItem' to="/#intro" title="intro"/>
      <AnchorLink className='navMenuItem' to="/#students" title="students" />
      <AnchorLink className='navMenuItem' to="/#socialmedia" title="social media" />
      <AnchorLink className='navMenuItem' to="/#info" title="more info" />
    </div>
    }

    else {
      console.log("navType is " + navType)
      return <div className="navShare"> 
        <p>Share this!</p>
        <div className={`navShareList`}>

          <FacebookShareButton 
                url={shareUrl}
                quote={`Design ${pageName}'s way! – The Graphic Design Senior Show 2021`}
                hashtag="#graphicdesign21"
                className="socialShareIcon">
                <FaFacebookSquare />
          </FacebookShareButton>

          <EmailShareButton
                url={shareUrl}
                subject={`See these amazing works by ${pageName} – The Graphic Design Senior Show 2021`}
                body={`Hey, check out these sweet projects by ${pageName}! See more amazing designers and cool stuff at The Graphic Design Senior Show 2021, Westphal College, Drexel University.`}
                separator={" || Check it out: "}
                className="socialShareIcon"
                >
                <HiMailOpen />
          </EmailShareButton>

          <LinkedinShareButton
                url={shareUrl}
                title={`See these amazing works by ${pageName} – The Graphic Design Senior Show 2021`}
                summary={`Featuring work by ${pageName} – a Graphic Design senior at Westphal College, Drexel University.`}
                source = {site.siteMetadata.siteUrl}
                className="socialShareIcon"
          >
            <SiLinkedin />
          </LinkedinShareButton>

          <TwitterShareButton
                url={shareUrl}
                title={`See these amazing works by ${pageName}`}
                hashtags={["designourway","seniorshow","graphicdesign21","westphal","drexel"]}
                className="socialShareIcon"
          >
            <FaTwitterSquare/>
          </TwitterShareButton>
        </div>
      </div>
    }
  }

  return <nav className='nav'>
    <div className="navBar">
      <AniLink cover to="/" bg="#EC6B5B" className='navLogo' direction="right"
  duration={1}>
          <Logo />
      </AniLink> 
        
      <button className={`navButton ${(navType == 'profile') ? "displayNone" : " "}`}>
            <Burger/>
      </button>

      {navMenu()}
    </div>

    
  </nav>
}

export default Navbar
