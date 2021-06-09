import React from "react";
import { Link } from "gatsby";
import * as styles from "./404.module.scss"
import { motion } from "framer-motion"
import Explosive from "./../components/svg/Explosive"

const Error = () => {
  return <motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{type:'tween', duration: 0.25, ease:'circOut'}}
      className={styles.error}>
      <div 
        className={styles.explosive}>
          <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 0.1, scale: 1}}
            transition={{type:'tween', duration: 0.5, ease:'circOut'}}
          >
            <Explosive />
          </motion.div>
      </div>
      <motion.h2
        initial={{opacity: 0, y: '100%'}}
        animate={{opacity: 1, y: 0}}
        transition={{type:'tween', duration: 0.5, delay: 0.15, ease:'circOut'}}
        >
        Ups! You're not supposed to see this :(
      </motion.h2>  
      <motion.div
        initial={{opacity: 0, y: '100%'}}
        animate={{opacity: 1, y: 0}}
        transition={{type:'tween', duration: 0.5, delay: 0.25, ease:'circOut'}}
        >
        <Link className={`h3 krona ${styles.goBack}`}to='/'>Go back</Link>
      </motion.div>
      <motion.p
        initial={{opacity: 0, y: '100%'}}
        animate={{opacity: 1, y: 0}}
        transition={{type:'tween', duration: 0.5, delay: 0.5, ease:'circOut'}}
        >
        Lovingly made by An X Bui
      </motion.p>  
      
    </motion.section>;
};

export default Error;
