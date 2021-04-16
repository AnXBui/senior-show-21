import React from "react";
// import { GatsbyImage } from "gatsby-plugin-image";
import Senior from "./Senior";
// import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby";
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
            gatsbyImageData(formats: WEBP, placeholder: DOMINANT_COLOR)
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
      <h2>Class of 21'</h2>

      <ul className={styles.wrapper}>{seniorsList}</ul>
    </section>
  );
};

export default Seniors;
