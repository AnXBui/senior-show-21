import React, {useEffect, useRef} from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "./Awards.module.scss";
import AwardsSlider from "./AwardsSlider";
import AwardBanner from "./svg/AwardBanner"
import Explosive from "./svg/Explosive"
import Blocks from "./svg/Blocks"
import GridCurve from "./svg/GridCurve"
import TwistTexture from "./svg/TwistTexture"
import GlitchLines from "./svg/GlitchLines"
import { gsap, ScrollTrigger} from "gsap/all";



import texture from "./../assets/printTexture.png"




// import Title from "./Title"
// import services from "../constants/services"

const query = graphql`
{
  allStrapiAwards {
    nodes {
      senior {
        name
        photo {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1, formats: [AUTO, WEBP, AVIF])
          }
        }
        avatar {
          publicURL
        }
      }
      name
    }
  }
}
`;

const Awards = () => {
  const data = useStaticQuery(query);
  const awards = data.allStrapiAwards.nodes;
  console.log(awards);

  const container1 = useRef(null);
  const container2 = useRef(null);
  const wrapper = useRef(null);
  const title = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);

  const twist = useRef(null);
  const lines = useRef(null);
  const blocks = useRef(null);
  const curve = useRef(null);
  const explosive = useRef(null);

  const animate = useRef(null);
  const parallax = useRef(null);
  const parallax2 = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    const content = [text1.current, text2.current];

    tl.from(wrapper.current,0.25,{alpha: 0})
      .from(title.current, 0.5, {alpha: 0, xPercent: -10, ease:'power2'})
      .from(content, 0.5, {alpha:0, yPercent: 10, ease:'back', stagger: 0.25},'-=0.25')
      
    
    animate.current = ScrollTrigger.create({
      trigger: container1.current,
      animation: tl,
      start: "top 80%",
      end: "bottom top",
    });

    return () => {
      if (animate.current != null){
        animate.current.kill();
      }
    }
}, [])

useEffect(() => {
  let tl = gsap.timeline({ defaults: {duration: 1, ease: "linear"} });
  let tl2 = gsap.timeline({ defaults: {duration: 1, ease: "expo"} });

  

  ScrollTrigger.matchMedia({

    // desktop
    "(min-width: 768px)": function() {

      const saveList = [twist.current, lines.current, blocks.current, curve.current, explosive.current];
      ScrollTrigger.saveStyles(saveList);

      // gsap.set(gradient.current,{transformOrigin:'left center'})


      tl.to(twist.current, 0.5, {y: -120},'start')
        .to(lines.current, 1, {y: -200},'start' )
        .to(curve.current, 1, {y: 50},'start' )
        .from(blocks.current, 0.5,{delay: 0.5, x: -50},'start');

      tl2.from(explosive.current, 1, {scale: 0.25, alpha: 0});





      parallax.current = ScrollTrigger.create({
        trigger: container1.current,
        animation: tl,
        scrub: 0.25,
        start: "top bottom",
        end: "bottom top",
      });

      parallax2.current = ScrollTrigger.create({
        trigger: container2.current,
        animation: tl2,
        start: "top bottom",
        end: "bottom top",
      });
    }
    
  }); 

  return () => {
    if (parallax.current != null){
      parallax.current.kill();
    }
  }
},[])





  return (
    <section ref={wrapper} className={styles.section}>

      <div ref={twist} className={styles.decoBig}>
        <TwistTexture />
      </div>

      <div ref={lines} className={styles.decoSide}>
        <GlitchLines />
      </div>
      <div ref={container1} className={styles.info}>
        <h2 ref={title}>Awards Of Excellence</h2>
        <div ref={curve} className={styles.textDeco}><GridCurve /></div>
        <div className={styles.infoText}>
          <p ref={text1}>
            We would like to extend a BIG congratulations to the winners of the
            Senior Show Awards for Excellence in graphic design! The awards
            recognize a select group of seniors whose work demonstrates an
            impressively high level of achievement in graphic design among their
            peers.
          </p>
          <p ref={text2}>
            While all the unique work of class of ‘21 is outstanding in every way,
            the following students have distinguished their designs and efforts
            with the faculty and alumni colleagues. With great pleasure we would
            like to recognize the following seniors in their winning categories:
          </p>
        </div>

        <div ref={blocks} className={styles.deco}>
          <Blocks />
          <img src={texture} alt=''/>
        </div>

  
      </div>

      <div className={styles.banner}>
        <div aria-label="Congratulations to Class of 21 Award Winners">
          <AwardBanner />
          <AwardBanner />
        </div>
      </div>
     

     

      <div ref={container2} className={styles.awards}>
        <AwardsSlider data={awards} />

        <div ref={explosive} className={styles.explosive}>
          <Explosive />  
        </div>
        
      </div>
    </section>
  );
};

export default Awards;
