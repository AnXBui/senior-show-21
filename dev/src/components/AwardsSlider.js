import React, { useCallback, useState, useRef, useEffect } from 'react'
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import Senior from "./Senior"

import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import * as styles from "./AwardsSlider.module.scss"


SwiperCore.use([Navigation,A11y]);
// gsap.registerPlugin(ScrollTrigger);



const AwardsSlider = ({data}) => {
    // console.log(data);
    const awardsList = data.map((award, index) => {
        const {name, senior} = award;
        return <SwiperSlide  className={styles.item} key={index}>
            <Senior data={senior} className={styles.profile}/>
            <p className={styles.title}>{name}</p>
        </SwiperSlide >
      })

      const [slideLoaded, setSlide] = useState(false);

  return <Swiper
              spaceBetween={32}
              slidesPerView={1}
              navigation
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => setSlide(true)}
              breakpoints={{
                  768:{
                    slidesPerView:2,  
                  }
              }}
         >
          {awardsList}
          </Swiper>
}


export default AwardsSlider
