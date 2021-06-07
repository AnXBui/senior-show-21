import React, { useState, useRef } from "react";
import { graphql } from "gatsby";
import SocialIcon from "../components/SocialIcon";
import Explosive from "../components/svg/Explosive";
import Project from "../components/Project";
import VideoProject from "../components/VideoProject";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./senior-template.module.scss"
import thumbnail from "../assets/thumbnail.png"




import AniLink from "gatsby-plugin-transition-link/AniLink";

// import Layout from "../components/Layout"
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query GetSingleSenior($name: String) {
    senior: strapiSeniors(name: { eq: $name }) {
      name
      avatar {
        publicURL
      }

      photo {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH, 
            placeholder: BLURRED, 
            aspectRatio: 1, 
            sizes:"15w"
            formats: [AUTO, WEBP, AVIF])
        }
      }

      signature {
        publicURL
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
        video
        gallery {
          localFile {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF],
                sizes:"(min-width: 768px) 40w , 90w"
                layout: FULL_WIDTH,
                quality: 80,
                placeholder: BLURRED
              )
            }
          }
          caption
          alternativeText
        }
      }
    }
  }
`;

const SeniorProfile = ({ data, pageContext }) => {
  var slugify = require("slugify");

  const wrapper = useRef(null);


  const nextUrl = slugify(pageContext.next);
  const prevUrl = slugify(pageContext.prev);


  const { senior } = data;
  const { name, bio, social_media, website, projects_list } = senior;
  const signature = senior.signature.publicURL;
  const photo = getImage(senior.photo);
  const url = slugify(name);


  const [bioState, setBio] = useState(false);

  const socialLinks = social_media.map((social, index) => {
    return (
      <li key={index}>
        <SocialIcon type={social.type} link={social.link} />
      </li>
    );
  });

  const projects = projects_list.map((project, index) => {
    if ((project.video !== "none" && project.video !== '' && project.video !== null) || project.gallery === null) {
      return (
        <li className="projectSingle" key={`Project ${index}`}>
          {/* <h1>{project.title}</h1> */}
          <VideoProject data={project} />
        </li>
      );
    } else {
      return (
        <li className="projectSingle" key={`Project ${index}`}>
          <Project data={project} />
        </li>
      );
    }
  });

  // const {allStrapiSeniors:{nodes: seniors}} = data

  // console.log(name);

  const seoDesc = `See ${name}'s amazing projects and more in the Graphic Design Senior Show by Westphal College, Drexel University!`;

  return (
    <Layout type="profile" page={name} className="seniorProfile">
      <SEO 
        title={name} 
        description={seoDesc} 
        image={thumbnail}
        location={url}
      />

      <aside className={`seniorInfo ${bioState ? "expand" : " "}`}>
        <div className="stickyInfo">
          <div className="seniorInfoMain">

            <div className={styles.photo}>
              <GatsbyImage critical={true} loading='eager' image={photo} alt={data.name + "'s photo"} />
            </div>
            
            <img
              className="seniorInfoName seniorSignature"
              src={signature}
              alt={name + "'s signature"}
            />
          </div>

          <div className="seniorInfoDetails">
            <button onClick={() => setBio(!bioState)} className="bioButton">
              {bioState ? "Close Bio X" : "Read My Bio ➤"}
            </button>

            <ul className="seniorSocials">{socialLinks}</ul>

            <a className="seniorWebsite solidButton" rel='noreferrer' target='_blank' href={website}>
              Website
            </a>
          </div>
        </div>

        <div className="seniorBio">
          <button onClick={() => setBio(!bioState)}>Back</button>
          <p>{bio}</p>
        </div>
      </aside>
      <section ref={wrapper} className="seniorProjects">
        <button
          aria-label='See my bio'
          onClick={() => setBio(!bioState)}
          className={`projectOverlay ${bioState ? "expand" : " "}`}
        ></button>
        <ul>
          {projects}

          <li className="moreProjects">
            <p>
              Want to see more projects? Visit my <a rel='noreferrer' target='_blank' href={website}>website!</a>
            </p>
          </li>
          <li className="profileLinkList">
            <h3>More Seniors</h3>

            <div>
              <AniLink
                cover
                to={`/${prevUrl}`}
                bg="#EC6B5B"
                className="profileLink"
                direction="right"
                duration={1}
              >
                {pageContext.prev}
              </AniLink>

              <AniLink
                cover
                to="/"
                bg="#EC6B5B"
                className="profileLink"
                direction="down"
                duration={1}
              >
                back to home
              </AniLink>

              <AniLink
                cover
                to={`/${nextUrl}`}
                bg="#EC6B5B"
                className="profileLink"
                direction="left"
                duration={1}
              >
                {pageContext.next}
              </AniLink>
            </div>

            <Explosive classValue="deco1" />
            <Explosive classValue="deco2" />
          </li>
        </ul>
      </section>
    </Layout>
  );
};
export default SeniorProfile;
