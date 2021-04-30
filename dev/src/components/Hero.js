import React, {useEffect} from "react";
import { StaticImage } from "gatsby-plugin-image";
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
import TextLoop from "react-text-loop";


const Hero = () => {
  return (
    <>
    <div className={styles.fade}></div>
    <section className={styles.section}>
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
      
      

      <div className={styles.bar}><Bar/></div>
    
      <div className={styles.twist}><Twist/></div>

      <div className={styles.rainbow}></div>

      <div className={styles.xbox}><Xbox/></div>

      

      <div className={styles.texture} style={{backgroundImage: `url(${texture})`}}></div>

      <div className={styles.textBox}><h3><span><TextLoop springConfig={{ stiffness: 100, damping: 10 }} interval={1250} children={["Design", "See", "Think", "Create"]} /></span> Our Way.</h3></div>

      <div className={styles.toggle}><Toggle/></div>

      <div className={styles.swiggle}><div><Swiggle /></div></div>

      <div className={styles.glow}></div>

      <div className={styles.print}><StaticImage loading='eager' src='./../assets/printTexture2.png' alt=''/></div>

      <div className={styles.tear}><div style={{backgroundImage: `url(${tear})`}}></div></div>

      <Stratch className={styles.stratch}/>

      <div className={styles.box}></div>

      

      
    </section>
    </>
  );
};

export default Hero;
