import React from "react"
import { GatsbyImage , getImage} from "gatsby-plugin-image";
import Title from "./Title"
import PropTypes from "prop-types"
import { Link } from "gatsby"


const Senior = ({data}) => {
    console.log(data);
    const avatar = getImage(data.avatar)
    const photo = getImage(data.photo)
    // const signature = getImage(data.blogPost.avatar)

    return <div>
        <h3>{data.name}</h3>
        <GatsbyImage image={avatar} alt="random alt" />
    </div>
}

export default Senior;

