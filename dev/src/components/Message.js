import React, {useEffect, useRef} from "react";
import * as styles from "./Message.module.scss"
import ColorWheels from "./svg/ColorWheels"
import Stroke1 from "./svg/Stroke1"
import cross from "./../assets/cross.png"
import Glitch1 from "./svg/Glitch1"
import { gsap, ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger); 

const Message = () => {
  const container = useRef(null);
  const animate = useRef(null);
  const parallax = useRef(null);
  const title = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  const glitch = useRef(null);
  const stroke = useRef(null);
  const color = useRef(null);
  const crossy = useRef(null);
  const gradient = useRef(null);



  useEffect(() => {
      let tl = gsap.timeline();
      const content = [text1.current, text2.current, text3.current];

      gsap.set(title.current, {transformOrigin:'center bottom'});

      tl.from(title.current, 0.5, {alpha: 0, rotateX: -45, xPercent: -10, ease:'power2', delay: 0.15})
        .from(content, 0.5, {alpha:0, yPercent: 10, ease:'back', stagger: 0.25})
        
      
      animate.current = ScrollTrigger.create({
        trigger: container.current,
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

    

    ScrollTrigger.matchMedia({
	
      // desktop
      "(min-width: 768px)": function() {

        const saveList = [glitch.current, stroke.current, title.current, color.current, crossy.current, gradient.current];
        ScrollTrigger.saveStyles(saveList);

        gsap.set(gradient.current,{transformOrigin:'left center'})


          tl.to(glitch.current, 0.5, {y: -200},'start')
          .to(stroke.current, 1, {y: -200},'start' )
          .to(color.current, 0.5, {y: -100, delay: 0.5},'start' )
          .to(crossy.current, 0.5, {y: -200, delay: 0.5},'start' )
          .fromTo(gradient.current, 0.25, {scale:0, delay: 0.5},{scale:1.25},'start')




        parallax.current = ScrollTrigger.create({
          trigger: container.current,
          animation: tl,
          scrub: 0.25,
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
    <section ref={container} id="intro" className={styles.section}>
      <div ref={glitch} className={styles.glitch}>
        <Glitch1 />
      </div>
      <h2 ref={title}><span className={`dark h3`}>A message from the</span>Senior Class</h2>
      <p ref={text1}>
      The Graphic Design program at Drexel has been our home for the past four years. We came in as naïve freshman, unsure of our futures and if we were going to measure up. As time passed, we learned the specifics of our profession to prepare us for the future, but we also had the opportunity to find ourselves along the way. All of us were taught the same underlying principles, yet we were able to discover our unique styles and were encouraged to embrace them. Our professors urged us to share our thoughts freely with one another, which developed into the pillar of the class of ‘21: we believe the best work is from collaboration and the exchanging of individual ideas. 
      </p>
      <p ref={text2}>
      Now approaching graduation, all of us will leave different than we came, we are no longer hesitant in pursuing design, but rather are confident in our skills, our individuality, and the power of collaboration in process. All this is thanks to the community we built that celebrated differences. 
      </p>
      <p ref={text3}>
      We want to thank our families, friends, professors, and supporters for the endless encouragement and tough love that helped us reach where we are today. We are grateful for your support and excited to share our work with you. 
      </p>

      <div ref={color} className={styles.deco}>
       <ColorWheels />
      </div>

      <div ref={stroke} className={styles.deco2}>
        <Stroke1 />
      </div>

      <div ref={crossy} className={styles.deco3}>
        <img src={cross} alt=''/>
      </div>

      <div ref={gradient} className={styles.gradient}></div>

      
    </section>
  );
};

export default Message;
