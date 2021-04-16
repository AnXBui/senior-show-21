import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
import HeroMain from "./svg/HeroMain"
import Bar from "./svg/Bar"
import Twist from "./svg/Twist"
import Xbox from "./svg/Xbox"
import Faces from "./svg/Faces"
import Scribble from "./svg/Scribble"
import Explode from "./svg/Explode"
import Toggle from "./svg/Toggle"
import Swiggle from "./svg/Swiggle"
import Stratch from "./svg/Stratch"
import texture from "./../assets/textTexture.png"
import tear from "./../assets/tear.svg"
import * as styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <>
    <div className={styles.fade}></div>
    <section className={styles.section}>
      {/* <StaticImage src="../assets/hero-img.png" alt="hero image" className="heroImg" /> */}
      {/* <h1>Graphic Design 2021</h1>
      <h2>Senior Showcase</h2>
      <p>See our ways</p> */}
      <div className={styles.main}>
        <HeroMain/>
      </div>
      

      <div className={styles.faces}>
        <Faces />
      </div>

      <div className={styles.rect}>
        <div>
          <Scribble className={'frame'}/>
        </div>
        

        <div>
          <Explode />
        </div>
        {/* <ExplosiveCrop /> */}
      </div>
      
      
      <Bar className={styles.bar}/>

      <div className={styles.twist}><Twist/></div>

      <div className={styles.rainbow}></div>

      <Xbox className={styles.xbox}/>

      <div className={styles.texture} style={{backgroundImage: `url(${texture})`}}></div>

      <div className={styles.textBox}><h3>"<span>Design</span> Our Way."</h3></div>

      <Toggle className={styles.toggle}/>

      <div className={styles.swiggle}><div><Swiggle /></div></div>

      <div className={styles.glow}></div>

      <div className={styles.print}><StaticImage src='./../assets/printTexture2.png' alt=''/></div>

      <div className={styles.tear}><div style={{backgroundImage: `url(${tear})`}}></div></div>

      <Stratch className={styles.stratch}/>

      
    </section>
    </>
  );
};

export default Hero;
