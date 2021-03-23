import React from "react"
import { GatsbyImage , getImage} from "gatsby-plugin-image";
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

var slugify = require('slugify')

const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
  }

const Project = ({data}) => {

    const {title, description, projecTag, gallery} = data;

    const images = gallery.map((image, index) => {
       
        const src = getImage(image.localFile);

        if (image.localFile){
            return <SwiperSlide key={index}>
            <Zoom>
              <GatsbyImage image={src} alt={title} />
            </Zoom>
        </SwiperSlide> 
        } else 
        return null;
       
      })


    return <div className='projectSingle'>
        {/* <h3>{title}</h3> */}
        <Swiper
            spaceBetween={32}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            {images}
        </Swiper>
    </div>

}

export default Project;

