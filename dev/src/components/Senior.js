import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
// import Title from "./Title"
import PropTypes from "prop-types";
// import { Link } from "gatsby"
// import {Link, TransitionLink} from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as styles from "./Senior.module.scss"

// import {slugify} from "slugify"

var slugify = require("slugify");

const Senior = ({ data, className = "" }) => {
  console.log(`rendering ${data}`);
  console.log(data);
  const { avatar } = data;
  const photo = getImage(data.photo);
  const slug = slugify(data.name);
  // const signature = getImage(data.blogPost.avatar)

  return (
    <div className={`${className} ${styles.item}`}>
      <AniLink cover to={slug} bg="#EC6B5B" direction="left" duration={1}>
        <h3>{data.name}</h3>
        <img
          src={avatar ? avatar.publicURL : ""}
          alt={data.name + "'s avatar"}
        />

        <div className={styles.photo}>
          <GatsbyImage image={photo} alt={data.name + "'s photo"} />
        </div>
      </AniLink>
    </div>
  );
};

export default Senior;
