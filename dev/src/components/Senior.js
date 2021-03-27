import React from "react"
import { GatsbyImage , getImage} from "gatsby-plugin-image";
// import Title from "./Title"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
// import {Link, TransitionLink} from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


// import {slugify} from "slugify"

var slugify = require('slugify')



const Senior = ({data}) => {
    const avatar = getImage(data.avatar)
    const photo = getImage(data.photo)
    const slug = slugify(data.name)
    // const signature = getImage(data.blogPost.avatar)

    return <div>

        <AniLink cover to={slug} bg="#663399" direction="left"
  duration={1}>
            <h3>{data.name}</h3>
            {/* <p>{slug}</p> */}
            <GatsbyImage image={avatar} alt={data.name + " avatar"} />
        </AniLink>          
        
    </div>
}

export default Senior;

