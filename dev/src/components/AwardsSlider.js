import React, { useCallback, useState, useRef, useEffect } from "react";
import Senior from "./Senior";

import SwiperCore, { Navigation, A11y, Autoplay, Mousewheel} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import * as styles from "./AwardsSlider.module.scss";

SwiperCore.use([Navigation, A11y, Autoplay, Mousewheel]);
// gsap.registerPlugin(ScrollTrigger);

const AwardsSlider = ({ data }) => {
  // console.log(data);
  const awardsList = data.map((award, index) => {
    const { name, senior } = award;
    return (
      <SwiperSlide className={`${styles.item}`} key={index}>
        <Senior data={senior} className={styles.profile} />
        <p className={`${styles.title} krona dark`}>{name}</p>
      </SwiperSlide>
    );
  });

  const [slideLoaded, setSlide] = useState(false);

  return (
    <Swiper
      spaceBetween={32}
      slidesPerView={1}
      navigation
      loop={true}
      loopedSlides={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => setSlide(true)}
      autoplay={{delay: 2000, disableOnInteraction: false}}
      mousewheel={{forceToAxis: true}}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
    >
      {awardsList}
    </Swiper>
  );
};

export default AwardsSlider;
