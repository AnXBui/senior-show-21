import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./SocialMedia.module.scss"
import {useMediaQuery} from '@react-hook/media-query'
import {Glitch1, Glitch2} from "./svg/SocialGlitch"
import Westphal from "./svg/Westphal"
import { RiHeart3Line } from "@react-icons/all-files/ri/RiHeart3Line";

// import Title from "./Title"
// import services from "../constants/services"
const SocialMedia = () => {
  const desktop = useMediaQuery('only screen and (min-width: 992px)')

  return (
    <>
    <section className={styles.section} id="social">
      <h3 className={styles.title}>
          Follow us{" "} 
        <a
          className={`krona`}
          target="_blank"
          href="https://www.instagram.com/drexelgraphicdesign/"
        >
          @drexelgraphicdesign{" "}
        </a>
        on instagram for more!
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

      {/* <div className={styles.preFooter}>
        <p> Made with <RiHeart3Line/> at Westphal</p>
      <Westphal />
      </div> */}
    </>
  );
};

export default SocialMedia;
