import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
// const query = graphql`{
//   file(relativePath: {eq: "hero-img.png"}) {
//     childImageSharp {
//       gatsbyImageData(layout: FULL_WIDTH)
//     }
//   }
// }
// `
const Hero = () => {
  // const {
  //   file:
  //    {
  //     childImageSharp: { fluid },
  //    },
  // } = useStaticQuery(query);
  return (
    <section className='heroSection'>
      <StaticImage src="../assets/hero-img.png" alt="hero image" className="heroImg" />
      {/* <Link to='/contact' className='scrollButton'>Contact Me</Link> */}
      {/* <SocialLinks/> */}
      <h1>Cold Graphic</h1>

      <div className='heroInfo'>
        <div>
          <p>A look into the evolution of propoganda graphic during the Cold War.</p>
          <p>A Digital Exhibition by An Bui</p>
        </div>
        <p>Scroll to Begin</p>
      </div>
    </section>
  );
}

export default Hero
