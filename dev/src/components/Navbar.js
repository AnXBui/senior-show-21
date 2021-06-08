import React, { useRef, useState, useEffect } from "react";
import { graphql, useStaticQuery} from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { withPrefix } from "gatsby"



import Logo from "./svg/Logo";
import Burger from "./svg/Burger";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


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

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


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
  const siteWPrefix = `${site.siteMetadata.siteUrl}/GD/SeniorShow21`;
  const shareUrl = `${siteWPrefix}/${slug}`;

  const nav = useRef(null);
  const trigger = useRef(null);
  let scroll = useRef(null);

  const [scrolled, setScrolled] = useState(false); 
  const [opened, setOpened] = useState(false);

  const arrowClick = (target) => {
    gsap.to(window, {scrollTo:`#${target}`, duration: 0.5, ease:'ease-in-out'})
  }

  const scrollTop = () => {
    if (navType === "home"){
      gsap.to(window, {scrollTo: 0, duration: 0.5, ease:'ease-in-out'})
    }
  }

  useEffect(() => {
    if (navType === "home"){
      scroll = ScrollTrigger.create({
        trigger: trigger.current,
        start: "top 80%",
        end: "top -5%",
        onLeave: () => {setScrolled(true)},
        onEnterBack: () => {setScrolled(false)},
      });
    }

    return () => {
      if (scroll.current != null){
        console.log(scroll);
        scroll.current.kill();
        scroll = null;
      }
    }
      
  },[])

  
  // const pageUrl =

  const navMenu = () => {
    if (navType === "home") {
      return (
        <>


          <a className="navMenuItem" onClick={() => {arrowClick('intro')}} href={"/#intro"}>intro</a>


          <a className="navMenuItem" onClick={() => {arrowClick('students')}} href={"/#students"}>students</a>

          <a className="navMenuItem" onClick={() => {arrowClick('social')}} href={"/#social"}>social media</a>

          <a className="navMenuItem" target='_blank' href={`https://drexel.edu/westphal/academics/undergraduate/graphic-design`}>more info</a>
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
              source={withPrefix(site.siteMetadata.siteUrl)}
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
    <nav ref={nav} className={`nav ${(!scrolled && navType === 'home') ? 'splash' : 'scroll'} ${(opened && navType === 'home') ? 'mobileOpen' : 'mobileClose'}`}>
      <div className={`navBar`}>
        <AniLink
          cover
          to="/"
          bg="#EC6B5B"
          onClick={() => {scrollTop();}}
          className="navLogo"
          direction="right"
          duration={1}
        >
          <Logo />
        </AniLink>

        {/* <p>{opened ? 'opened' : 'close'}</p> */}

        <button
          className={`navButton ${navType === "profile" ? "displayNone" : " "}`}
          onClick= {() => setOpened(!opened)}
          aria-label={`toggle menu`}
        >
          <Burger className={(opened && navType === 'home') ? 'close' : ''}/>
        </button>

        <div className={`navMenu ${(navType === 'home') ? 'homeMenu' : ''} ${(opened && navType === 'home') ? 'mobileOpen' : ''}`}>
          {navMenu()}
        </div>

        
      </div>
    </nav>
      {navType === 'home' ? <div aria-label={`start`} ref={trigger} className={`triggerHome ${(!scrolled && navType === 'home') ? 'init' : ''}`}>
        <button onClick={() => {arrowClick('intro')}} >
          <h3>↓</h3>
        </button>
      </div> : ''}
      {navType === 'home' ? <button aria-label={`toggle menu`} onClick= {() => setOpened(!opened)} className={`overlay ${(opened && navType === 'home') ? 'expand' : 'none'}`}></button> : ''}

    </>
  );
};

export default Navbar;
