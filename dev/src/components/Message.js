import React from "react";
import * as styles from "./Message.module.scss"
import ColorWheels from "./svg/ColorWheels"
import Stroke1 from "./svg/Stroke1"
import cross from "./../assets/cross.png"
// import Title from "./Title"
// import services from "../constants/services"
const Message = () => {
  return (
    <section id="intro" className={styles.section}>
      <h2><span className={`dark h3`}>A message from the</span>Senior Class</h2>
      <p>
      The Graphic Design program at Drexel has been our home for the past four years. We came in as naïve freshman, unsure of our futures and if we were going to measure up. As time passed, we learned the specifics of our profession to prepare us for the future, but we also had the opportunity to find ourselves along the way. All of us were taught the same underlying principles, yet we were able to discover our unique styles and were encouraged to embrace them. Our professors urged us to share our thoughts freely with one another, which developed into the pillar of the class of ‘21: we believe the best work is from collaboration and the exchanging of individual ideas. 
      </p>
      <p>
      Now approaching graduation, all of us will leave different than we came, we are no longer hesitant in pursuing design, but rather are confident in our skills, our individuality, and the power of collaboration in process. All this is thanks to the community we built that celebrated differences. 
      </p>
      <p>
      We want to thank our families, friends, professors, and supporters for the endless encouragement and tough love that helped us reach where we are today. We are grateful for your support and excited to share our work with you. 
      </p>

      <div className={styles.deco}>
       <ColorWheels />
      </div>

      <div className={styles.deco2}>
        <Stroke1 />
      </div>

      <div className={styles.deco3}>
        <img src={cross} alt=''/>
      </div>

      <div className={styles.gradient}></div>

      
    </section>
  );
};

export default Message;
