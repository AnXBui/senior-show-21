import React from "react"
import { GatsbyImage , getImage} from "gatsby-plugin-image";
import Title from "./Title"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import {slugify} from "slugify"

var slugify = require('slugify')



const Senior = ({data}) => {
    const avatar = getImage(data.avatar)
    const photo = getImage(data.photo)
    const slug = slugify(data.name)
    // const signature = getImage(data.blogPost.avatar)

    return <div>
        <Link to={slug}>
            <h3>{data.name}</h3>
            {/* <p>{slug}</p> */}
            <GatsbyImage image={avatar} alt="random alt" />
        </Link>
        
    </div>
}

export default Senior;

