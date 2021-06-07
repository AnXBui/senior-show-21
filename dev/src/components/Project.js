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
    const multiple = gallery.length > 1;
    // const parent = wrapper;


    useEffect(() => {
      const element = ref.current;
      ScrollTrigger.create({
        trigger: element,
        start: "top 70%",
        end: "bottom 30%",
        toggleClass: "activeSlide"
      });

    }, []);


    const images = gallery.map((image, index) => {
        console.log(multiple);
        console.log(gallery);
       
        const src = getImage(image.localFile);

        if (image.localFile && multiple){
            return <SwiperSlide className={(index === 0) ? 'main' : 'second'} key={`${title} ${index}`}>
            <ProjectImage first={(index === 0) ? true : false  } url={src} alt={title}/>
        </SwiperSlide> 
        } else if (image.localFile){
           return <ProjectImage key={`${title} ${index}`} first={true} className={`main`} url={src} alt={title}/>
        } else return null;
       
      })

    const tags = project_tag.map((item, index) => {
          return <li key={index}><p>{item.tag}</p></li>
    })

    return <div className={slideLoaded ? 'slideLoaded' : 'slideLoading'}>
            <div ref={ref} className={`projectSlider ${!multiple ? styles.single : null}`}>

            {multiple ? (
              <Swiper
              spaceBetween={16}
              slidesPerView={1}
              navigation
              loop={true}
              onSlideChange={() => console.log('slide change')}
              breakpoints={{
                768:{
                  spaceBetween: 16
                }
              }}
              onSwiper={(swiper) => setSlide(true)}
              

              >
              {images}
              </Swiper>
              ) : images}
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

