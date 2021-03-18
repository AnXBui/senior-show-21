import React from "react"
import Image from "gatsby-image"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const query = graphql`
{
  allStrapiArtworks {
    nodes {
      id
      Title
      Designer
      Date
      Description
      additional_info {
        id
        text
      }
      Country
      image {
        childImageSharp {
          fluid (maxWidth: 2048, quality: 80){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`


const Artworks = () => {


   const data = useStaticQuery(query)
   const {allStrapiArtworks:{nodes: artworks}} = data
   
   console.log(artworks[0]);

  return <section className='artworkCollection'>

    {artworks.map((item, index)=> {
      const {Title,Designer,Date,Description,Country,id, additional_info, image} = item;
      console.log(image.childImageSharp.fluid);
      return <div className="artworkItem" key={index}>
        <div className="artworkImage">
          <Image fluid={image.childImageSharp.fluid} 
                  imgStyle={{
                    objectFit: "contain",
                    objectPosition: "50% 50%",
                  }}
                  className='imageContent'/>
        </div>
        {/* <Image /> */}
        <div className="artworkInfo">
        <h3>{Title}</h3>
        <p>{Designer}</p>
        <p>{Date}</p>
        <p>{Country=='US' ? 'United States' : 'Soviet Union'}</p>
        {additional_info.map((info,index) => {
              const {text} = info;
              return <p key={index}>{text}</p>
            }
          )
        }
      </div>

      <div className="artworkDesc">
          <p>{Description}</p>
      </div>
      </div>
    })}
 
    </section>
}

export default Artworks
