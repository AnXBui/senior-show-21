import React, { useCallback, useState, useRef, useEffect } from 'react'
import { getImage} from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PropTypes from "prop-types"
import 'react-medium-image-zoom/dist/styles.css'
import * as styles from './Project.module.scss'

import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProjectImage from "../components/ProjectImage"


import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

// import useVisibilitySensor from "@rooks/use-visibility-sensor"


SwiperCore.use([Navigation,A11y]);
gsap.registerPlugin(ScrollTrigger);





var slugify = require('slugify')

const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
  }


const Project = ({data}) => {

  
    const {title, description, project_tag, gallery} = data;

    const [slideLoaded, setSlide] = useState(false);
    const ref = useRef(null);
    // const parent = wrapper;


    useEffect(() => {
      const element = ref.current;
      ScrollTrigger.create({
        trigger: element,
        start: "top 70%",
        end: "bottom 30%",
        scroller:".seniorProfile",
        toggleClass: "activeSlide"
      });
    }, []);


    const images = gallery.map((image, index) => {
       
        const src = getImage(image.localFile);

        if (image.localFile){
            return <SwiperSlide className={(index === 0) ? 'main' : 'second'} key={index}>
            <ProjectImage url={src} alt={title}/>
        </SwiperSlide> 
        } else 
        return null;
       
      })

    const tags = project_tag.map((item, index) => {
          return <li key={index}><p>{item.tag}</p></li>
    })

    return <div className={slideLoaded ? 'slideLoaded' : 'slideLoading'}>
            <div ref={ref} className={'projectSlider'}>
              <Swiper
              spaceBetween={32}
              slidesPerView={1}
              navigation
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => setSlide(true)}
              >
              {images}
              </Swiper>
            </div>

        
        <div className="projectInfo">
          <h3>{title}</h3>
          <ul>
            {tags}
          </ul>
        </div>
        
    </div>

}

export default Project;

