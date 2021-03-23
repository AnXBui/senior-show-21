import React from "react"
import { graphql} from "gatsby"
import SocialIcon from "../components/SocialIcon"
import Project from "../components/Project"
import Layout from "../components/Layout"
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


const SeniorProfile = ({data}) => {
  // console.log(query);

  // const data = useStaticQuery(query)
  // console.log(data.senior);
  const {senior} = data;
  const {name, bio,social_media,website, projects_list} = senior;
  const avatar = getImage(senior.avatar);
  const signature = getImage(senior.signature);


  const socialLinks = social_media.map((social, index) => {
    return <li key={index}>
        <SocialIcon type={social.type} link={social.link}/>
    </li>
  })

  const projects = projects_list.map((project, index) => {
    return <li key={index}>
      {/* <h1>{project.title}</h1> */}
      <Project data={project}/>
    </li>
  })

  // const {allStrapiSeniors:{nodes: seniors}} = data

  console.log(name);

  return <Layout className='seniorProfile'>
    <aside className='seniorInfo'>
      <div className='stickyInfo'>
      <GatsbyImage className='seniorAvatar' image={avatar} alt={name + " avatar"} />
        {/* <h1>{name}</h1> */}
        <GatsbyImage className='seniorSignature' image={signature} alt={name + " signature"} />
        {/* <p>{bio}</p> */}
        <a href={website}>{website}</a>
        <ul>
          {socialLinks}
        </ul>
      </div> 
    </aside>
    <section className='seniorProjects'>
      <ul>
        {projects}
      </ul>
    </section>
  </Layout>
}
export default SeniorProfile
