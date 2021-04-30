import React, {useEffect, useRef} from "react";
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./SocialMedia.module.scss"
import {useMediaQuery} from '@react-hook/media-query'
import {Glitch1, Glitch2} from "./svg/SocialGlitch"
import { gsap, ScrollTrigger} from "gsap/all";


gsap.registerPlugin(ScrollTrigger); 

// import Title from "./Title"
// import services from "../constants/services"
const SocialMedia = () => {
  const desktop = useMediaQuery('only screen and (min-width: 992px)')

  const container = useRef(null);
  const animate = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();

    gsap.set(title.current, {transformOrigin:'center bottom'});

    tl.from(container.current, 0.5,{alpha:0, delay: 0.5})
    tl.from(title.current, 0.5, {alpha: 0, xPercent: -10, ease:'power2'},'-=0.25')

      
    animate.current = ScrollTrigger.create({
      trigger: container.current,
      animation: tl,
      start: "top 90%",
      toggleActions: "play none resume reset",
      end: "bottom top",
    });


    

    return () => {
      if (animate.current != null){
        animate.current.kill();
      }
    }

}, [])







  return (
    <>
    <section ref={container} className={styles.section} id="social">
      <h3 ref={title} className={styles.title}>
          Follow us{" "} 
        <a
          className={`krona`}
          target="_blank"
          href="https://www.instagram.com/drexelgraphicdesign/"
        >
          @drexelgraphicdesign{" "}
        </a>
        on Instagram for more!
      </h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <StaticImage src="./../assets/instagram1.png" alt="Senior show instagram post: Publication" />
        </li>
        <li className={styles.item}>
          <StaticImage src="./../assets/instagram2.png" alt="Senior show instagram post: Packaging" />
        </li>
        {desktop ? <li className={styles.item}>
          <StaticImage src="./../assets/instagram3.png" alt="Senior show instagram post: Branding" />
        </li> : null}

      </ul>
      <div className={styles.deco}>
          <Glitch1 /> 
          <Glitch2 />
      </div>
    </section>
    </>
  );
};

export default SocialMedia;
