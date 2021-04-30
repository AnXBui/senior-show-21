import React, {useEffect, useRef} from "react";
import { StaticImage } from "gatsby-plugin-image";
import Senior from "./Senior";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "./Seniors.module.scss";
import { gsap, ScrollTrigger} from "gsap/all";


gsap.registerPlugin(ScrollTrigger); 



const query = graphql`
  {
    allStrapiSeniors(sort: { fields: last }) {
      nodes {
        name
        avatar {
          publicURL
        }
        photo {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH
              placeholder: BLURRED
              aspectRatio: 1
              formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;



const Seniors = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiSeniors: { nodes: seniors },
  } = data;

  const container = useRef(null);
  const animate = useRef(null);
  const animateList = useRef([]);
  const title = useRef(null);
  const arrow = useRef(null);

  const seniorRefs = useRef([]);
  //  console.log(data);

  const seniorsList = seniors.map((senior, index) => {
    return (
      <li ref={(element) => {seniorRefs.current[index] = element}} className={styles.item} key={index}>
        <Senior data={senior} />
      </li>
    );
  });

  

  useEffect(() => {
    let tl = gsap.timeline();

    gsap.set(title.current, {transformOrigin:'center bottom'});

    tl.from(arrow.current, 0.5, {alpha: 0, xPercent: -100, ease:'power2'})
    tl.from(title.current, 0.5, {alpha: 0, xPercent: -10, ease:'power2'},'-=0.25')
      
    animate.current = ScrollTrigger.create({
      trigger: container.current,
      animation: tl,
      start: "top 80%",
      end: "bottom top",
      onEnter: () => {
        ScrollTrigger.refresh();
      }
    });

    let tl2 = gsap.timeline();

    seniorRefs.current.forEach((item, index) => {
      let tl = gsap.timeline();
      gsap.set(item, {transformOrigin:'center bottom'});

      tl.from(item, 0.5, {alpha: 0, yPercent: 20, ease:'back'})

      animateList.current[index] = ScrollTrigger.create({
        trigger: item,
        animation: tl,
        start: "top 70%",
        toggleActions: "play complete none none",
        end: "bottom top",
      });

    })

    

    return () => {
      if (animate.current != null){
        animate.current.kill();
      }

      if (animateList.current != null){
        animateList.current.forEach(tl => {
          tl.kill();
        })
      }
    }

}, [])




  return (
    <section ref={container} className={styles.section} id="students">
      <h2 ref={title}>Class of 21'
      <div ref={arrow} className={styles.arrow}>
        <StaticImage src="./../assets/arrow.png" alt=''/>
      </div>
      </h2>
      
      

      <ul className={styles.wrapper}>{seniorsList}</ul>
    </section>
  );
};

export default Seniors;
