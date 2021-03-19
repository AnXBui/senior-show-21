import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {

  return (
    <section className='homeHero'>
      {/* <StaticImage src="../assets/hero-img.png" alt="hero image" className="heroImg" /> */}
      <h1>Graphic Design 2021</h1>
      <h2>Senior Showcase</h2>
      <p>See our ways</p>
    </section>
  );
}

export default Hero
