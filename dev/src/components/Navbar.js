import React, { useRef, useState, useEffect } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";


import Logo from "./svg/Logo";
import Burger from "./svg/Burger";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

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

gsap.registerPlugin(ScrollTrigger);


const Navbar = ({ navType = "home", pageName = "home" }) => {
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
  );

  var slugify = require("slugify");

  const slug = slugify(pageName);
  const shareUrl = `${site.siteMetadata.siteUrl}/${slug}`;

  const nav = useRef(null);
  const trigger = useRef(null);
  let scroll = useRef(null);

  const [scrolled, setScrolled] = useState(false); 
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    console.log(opened);
    if (navType = "home"){
      scroll = ScrollTrigger.create({
        trigger: trigger.current,
        start: "top 80%",
        end: "top -5%",
        onLeave: () => {setScrolled(true)},
        onEnterBack: () => {setScrolled(false)},
      });
    }

    return () => {
      if (scroll){
        scroll.kill();
        scroll = null;
      }
    }
      
  },[])

  
  // const pageUrl =

  const navMenu = () => {
    if (navType == "home") {
      return (
        <>


          <a className="navMenuItem" href="/#intro">intro</a>


          <a className="navMenuItem" href="/#students">students</a>

          <a className="navMenuItem" href="/#social">social media</a>

          <a className="navMenuItem" href="/#moreinfo">more info</a>
        </>
      );
    } else {
      return (
        <div className="navShare">
          <p>Share this!</p>
          <div className={`navShareList`}>
            <FacebookShareButton
              url={shareUrl}
              quote={`Design ${pageName}'s way! – The Graphic Design Senior Show 2021`}
              hashtag="#graphicdesign21"
              className="socialShareIcon"
            >
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
              source={site.siteMetadata.siteUrl}
              className="socialShareIcon"
            >
              <SiLinkedin />
            </LinkedinShareButton>

            <TwitterShareButton
              url={shareUrl}
              title={`See these amazing works by ${pageName}`}
              hashtags={[
                "designourway",
                "seniorshow",
                "graphicdesign21",
                "westphal",
                "drexel",
              ]}
              className="socialShareIcon"
            >
              <FaTwitterSquare />
            </TwitterShareButton>
          </div>
        </div>
      );
    }
  };

  return (
    <>
    <nav ref={nav} className={`nav ${(!scrolled && navType=='home') ? 'splash' : 'scroll'} ${(opened && navType=='home') ? 'mobileOpen' : 'mobileClose'}`}>
      <div className={`navBar`}>
        <AniLink
          cover
          to="/"
          bg="#EC6B5B"
          className="navLogo"
          direction="right"
          duration={1}
        >
          <Logo />
        </AniLink>

        {/* <p>{opened ? 'opened' : 'close'}</p> */}

        <button
          className={`navButton ${navType == "profile" ? "displayNone" : " "}`}
          onClick= {() => setOpened(!opened)}
          aria-label={`toggle menu`}
        >
          <Burger className={(opened && navType=='home') ? 'close' : ''}/>
        </button>

        <div className={`navMenu ${(navType=='home') ? 'homeMenu' : ''} ${(opened && navType=='home') ? 'mobileOpen' : ''}`}>
          {navMenu()}
        </div>

        
      </div>
    </nav>
      {navType=='home' ? <div ref={trigger} className={`triggerHome ${(!scrolled && navType=='home') ? 'init' : ''}`}><h3>↓</h3></div> : ''}
      {navType=='home' ? <button aria-label={`toggle menu`} onClick= {() => setOpened(!opened)} className={`overlay ${(opened && navType=='home') ? 'expand' : 'none'}`}></button> : ''}

    </>
  );
};

export default Navbar;
