import React, { useState, useRef} from 'react'
import { graphql} from "gatsby"
import SocialIcon from "../components/SocialIcon"
import Explosive from "../components/svg/Explosive"
import Project from "../components/Project"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import AniLink from "gatsby-plugin-transition-link/AniLink";

// import Layout from "../components/Layout"
import { GatsbyImage , getImage} from "gatsby-plugin-image";





export const query = graphql`
  query GetSingleSenior($name: String) {
    senior: strapiSeniors(name: { eq: $name }) {
      name
      avatar {
        childImageSharp {
          gatsbyImageData(formats: [AUTO, WEBP, AVIF], sizes: "", layout: FULL_WIDTH)
        }
      }
      signature {
        childImageSharp {
          gatsbyImageData(formats: [AUTO, WEBP, AVIF], sizes: "", layout: FULL_WIDTH)
        }
      }
      social_media {
        type
        link
      }
      website
      bio
      projects_list {
        description
        index
        project_tag {
          tag
        }
        title
        gallery {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP], sizes: "", layout: FULL_WIDTH)
            }
          }
          caption
          alternativeText
        }
      }
    }
  }
`


const SeniorProfile = ({data, pageContext}) => {

  var slugify = require('slugify')

  const wrapper = useRef(null);


  console.log(pageContext.next);

  const nextUrl = slugify(pageContext.next);
  const prevUrl = slugify(pageContext.prev);

  // console.log(query);

  // const data = useStaticQuery(query)
  // console.log(data.senior);
  const {senior} = data;
  const {name, bio,social_media,website, projects_list} = senior;
  const avatar = getImage(senior.avatar);
  const signature = getImage(senior.signature);

  const [bioState, setBio] = useState(false);


  const socialLinks = social_media.map((social, index) => {
    return <li key={index}>
        <SocialIcon type={social.type} link={social.link}/>
    </li>
  })

  const projects = projects_list.map((project, index) => {
    return <li className='projectSingle' key={index}>
      {/* <h1>{project.title}</h1> */}
      <Project data={project}/>
    </li>
  })

  // const {allStrapiSeniors:{nodes: seniors}} = data

  // console.log(name);

  const seoDesc = `See ${name}'s amazing projects and more in the Graphic Design Senior Show by Westphal College, Drexel University!`;

  return <Layout type='profile' page={name} className='seniorProfile'>
    <SEO title={name} description={seoDesc}/>

    <aside className={`seniorInfo ${bioState ? "expand" : " "}`}>
      <div className='stickyInfo'>

          <div className="seniorInfoMain">
          <GatsbyImage className='seniorAvatar' image={avatar} alt={name + " avatar"} />
          {/* <h1 className='seniorInfoName'>{name}</h1> */}
          <GatsbyImage className=' seniorInfoName seniorSignature' image={signature} alt={name + " signature"} />
          </div>

        <div className='seniorInfoDetails'>
        <button onClick={() => setBio(!bioState)} className='bioButton'>
            {bioState ? "Close Bio X" : "Read My Bio ➤"}
        </button>

        <ul className='seniorSocials'>
          {socialLinks}
        </ul>

        <a className='seniorWebsite solidButton' href={website}>Website</a>
        </div>        
      </div> 

      <div className='seniorBio'>
          <p>{bio}</p>
          <button onClick={() => setBio(!bioState)}>Back</button>
        </div>
    </aside>
    <section ref={wrapper} className='seniorProjects'>
      <button onClick={() => setBio(!bioState)} className={`projectOverlay ${bioState ? "expand" : " "}`}></button>
      <ul>
        {projects}

        <li className='moreProjects'>
          <p>Want to see projects? Visit my <a href={website}>website!</a></p>
          
        </li>
        <li className='profileLinkList'>

        <h3>More Seniors</h3>

        <div>
        <AniLink cover to={`/${prevUrl}`} bg="#663399" className='profileLink' direction="right"
        duration={1}>
              {pageContext.prev}
        </AniLink> 

        <AniLink cover to="/" bg="#663399" className='profileLink' direction="down"
        duration={1}>
              back to home
        </AniLink> 

        <AniLink cover to={`/${nextUrl}`} bg="#663399" className='profileLink' direction="left"
        duration={1}>
              {pageContext.next}
        </AniLink> 
        </div>

        <Explosive classValue='deco1'/>
        <Explosive classValue='deco2'/>
        </li>
      </ul>
    </section>
  </Layout>
}
export default SeniorProfile
