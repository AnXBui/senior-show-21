import React from "react"
import { GatsbyImage , getImage} from "gatsby-plugin-image";
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import {slugify} from "slugify"

var slugify = require('slugify')



const Project = ({data}) => {

    const {title, description, projecTag, gallery} = data;

    const images = gallery.map((image, index) => {
       
        const src = getImage(image.localFile);

        if (image.localFile){
            return <li key={index}>
            <GatsbyImage image={src} alt={title} />
        </li> 
        } else 
        return null;
       
      })


    return <div>
        <h3>{title}</h3>
        <ul>
            {images}
        </ul>
    </div>
}

export default Project;

