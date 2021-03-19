import React from "react"
import { GatsbyImage , getImage} from "gatsby-plugin-image";
import Title from "./Title"
import PropTypes from "prop-types"


const SocialIcon = ({type,link}) => {

    return <div>
        <a href={"https://" + link} target="_blank" rel="noopener noreferrer">
            {link}
        </a> 
    </div>
}

export default SocialIcon;

