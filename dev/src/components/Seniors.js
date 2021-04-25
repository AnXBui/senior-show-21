import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Senior from "./Senior";
// import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby";
import arrow from "./../assets/arrow.png";
import * as styles from "./Seniors.module.scss";
// import PropTypes from "prop-types"
// import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiSeniors(sort: { fields: last }) {
      nodes {
        name
        avatar {
          publicURL
        }
        photo {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH
              placeholder: BLURRED
              aspectRatio: 1
              formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;



const Seniors = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiSeniors: { nodes: seniors },
  } = data;
  //  console.log(data);

  const seniorsList = seniors.map((senior, index) => {
    return (
      <li className={styles.item} key={index}>
        <Senior data={senior} />
      </li>
    );
  });

  return (
    <section className={styles.section} id="students">
      <h2>Class of 21'
      <div className={styles.arrow}>
      <StaticImage src="./../assets/arrow.png" alt=''/>
      </div>
      </h2>
      
      

      <ul className={styles.wrapper}>{seniorsList}</ul>
    </section>
  );
};

export default Seniors;
