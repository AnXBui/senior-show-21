import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion"
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
    <motion.div 
      initial={{opacity: 0, y: '-100%'}}
      animate={{opacity: 1, y: 0}}
      transition={{type:'tween', ease:'circOut', delay: 0.75, duration: 0.75}}
      className={styles.fade}>
    </motion.div>
    <section className={styles.section}>
      <motion.div 
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{type:'tween', ease:"backOut", duration: 0.75}}
        className={styles.main}>
        <HeroMain/>
      </motion.div>
      

      <motion.div 
        initial={{opacity: 0, y: '100%'}}
        animate={{opacity: 1, y: 0}}
        transition={{type:'tween', ease:'backOut', delay: 0.2, duration: 0.5}}
        className={styles.faces}>
        <Faces />
      </motion.div>

      <motion.div 
        initial={{opacity: 0, x: '-20vw'}}
        animate={{opacity: 1, x: 0}}
        transition={{type:'tween', ease:'backOut', delay: 0.15, duration: 0.5}}
        className={styles.rect}>
        <div>
          <Scribble className={'frame'}/>
        </div>

        <div>
          <Explode />
        </div>
      </motion.div>
      
      <motion.div 
        initial={{opacity: 0, y: '-20vh'}}
        animate={{opacity: 1, y: 0}}
        transition={{type:'tween', ease:'backOut', duration: 0.5}}
        className={styles.bar}><Bar/>
      </motion.div>
    
      <motion.div 
        initial={{opacity: 0, y: '20vh'}}
        animate={{opacity: 1, y: 0}}
        transition={{type:'tween', ease:'backOut', delay: 0.85, duration: 0.5}}
        className={styles.twist}>
        <Twist/>
      </motion.div>

      <motion.div 
        initial={{opacity: 0, x: '-100%'}}
        animate={{opacity: 1, x: 0}}
        transition={{type:'tween', ease:'circOut', delay: 0.25, duration: 0.5}}
        className={styles.rainbow}>

      </motion.div>

      <motion.div 
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{type:'tween', ease:'backOut', delay: 0.35, duration: 0.5}}
        className={styles.xbox}><Xbox/>
      </motion.div>

      

      <motion.div 
        initial={{opacity: 0, y: '50%'}}
        animate={{opacity: 1, y: 0}}
        transition={{type:'tween', ease:'backOut', delay: 0.1, duration: 0.5}}
        className={styles.texture} style={{backgroundImage: `url(${texture})`}}>

      </motion.div>

      <motion.div 
        initial={{opacity: 0, y: '100%'}}
        animate={{opacity: 1, y: 0}}
        transition={{type:'tween', ease:'backOut', delay: 0.75, duration: 0.5}}
        className={styles.textBox}>
        <h3><span><TextLoop springConfig={{ stiffness: 100, damping: 10 }} interval={1250} children={["Design", "See", "Think", "Create"]} /></span> Our Way.</h3>
      </motion.div>

      <motion.div 
        initial={{opacity: 0, x: '50%'}}
        animate={{opacity: 1, x: 0}}
        transition={{type:'tween', ease:'backOut', delay: 0.65, duration: 0.5}}
        className={styles.toggle}>
        <Toggle/>
      </motion.div>

      <motion.div 
        initial={{opacity: 0, y: '50%'}}
        animate={{opacity: 1, y: 0}}
        transition={{type:'tween', ease:'backOut', delay: 0.15, duration: 0.5}}
        className={styles.swiggle}>
        <div><Swiggle /></div>
      </motion.div>

      <motion.div 
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{type:'tween', ease:'backOut', delay: 1, duration: 0.5}}
        className={styles.glow}>
      </motion.div>

      <motion.div 
        initial={{opacity: 0, y: '50%'}}
        animate={{opacity: 1, y: 0}}
        transition={{type:'tween', ease:'backOut',  delay: 0.65, duration: 0.5}}
        className={styles.print}>
        <StaticImage loading='eager' src='./../assets/printTexture2.png' alt=''/>
      </motion.div>

      <motion.div 
        initial={{opacity: 0, x: '100%'}}
        animate={{opacity: 1, x: 0}}
        transition={{type:'tween', ease:'backOut', delay: 0.15, duration: 0.5}}
        className={styles.tear}>
        <div style={{backgroundImage: `url(${tear})`}}>
        </div>
      </motion.div>

      
      <motion.div
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{type:'tween', ease:'backOut', delay: 0.75, duration: 0.5}}
        className={styles.stratch}
      >
        <Stratch />
      </motion.div>
      

      <motion.div 
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{type:'tween', ease:'backOut', delay: 1, duration: 0.5}}
        className={styles.box}>
      </motion.div>

    </section>
    </>
  );
};

export default Hero;
