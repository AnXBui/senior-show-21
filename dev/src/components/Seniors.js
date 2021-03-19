import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import Senior from "./Senior"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiSeniors(sort: {fields: name}) {
      nodes {
        name
        avatar {
          childImageSharp {
            gatsbyImageData(
              formats: WEBP, 
              placeholder: DOMINANT_COLOR
            )
          }
          childrenImageSharp {
            gatsbyImageData(
              formats: WEBP, 
              placeholder: DOMINANT_COLOR
            )
          }
        }
        photo {
          childImageSharp {
            gatsbyImageData(
              formats: WEBP, 
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
  }
`


const Seniors = () => {

   const data = useStaticQuery(query)
   const {allStrapiSeniors:{nodes: seniors}} = data
   
   const seniorsList = seniors.map((senior, index) => {
     return <li key={index}>
       <Senior data={senior}/>
     </li>
   })

  return <section className='artworkCollection'>

    <h1>Senior Gallery</h1>

    <ul>
      {seniorsList}
    </ul>
    
    </section>
}

export default Seniors
