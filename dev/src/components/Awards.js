import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "./Awards.module.scss";
import AwardsSlider from "./AwardsSlider";

// import Title from "./Title"
// import services from "../constants/services"

const query = graphql`
  {
    allStrapiAwards {
      nodes {
        senior {
          name
          avatar {
            publicURL
          }
          photo {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
        name
      }
    }
  }
`;

const Awards = () => {
  const data = useStaticQuery(query);
  const awards = data.allStrapiAwards.nodes;
  console.log(awards);

  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <h2>Awards Of Excellence</h2>
        <p>
          We would like to extend a BIG congratulations to the winners of the
          Senior Show Awards for Excellence in graphic design! The awards
          recognize a select group of seniors whose work demonstrates an
          impressively high level of achievement in graphic design among their
          peers.
        </p>
        <p>
          While all the unique work of class of ‘21 is outstanding in every way,
          the following students have distinguished their designs and efforts
          with the faculty and alumni colleagues. With great pleasure we would
          like to recognize the following seniors in their winning categories:
        </p>
      </div>

      <div className={styles.awards}>
        <AwardsSlider data={awards} />
      </div>
    </section>
  );
};

export default Awards;
