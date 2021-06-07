import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby"

import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ isHome=true, description, lang, meta, image, title,location='' }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const url = withPrefix(site.siteMetadata.siteUrl);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `og:image`,
          content: `${url}${image}`,
        },
        {
          name: `twitter:image:alt`,
          content: `Drexel Graphic Design 21 Senior Showcase `,
        },
        {
          name: `og:url`,
          content: `${url}${location}`,
        },
        {
          name: `og:site_name`,
          content: `${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:card`,
          content:"summary_large_image",
        },
      ]}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
