let facebook_pixel = "";
let gtm = "1234";

module.exports = {
  pathPrefix: `/GD/SeniorShow21/testbed/`,
  siteMetadata: {
    title: `Westphal Graphic Design Senior Show 21`,
    description: `Welcome to the Graphic Design Senior Show 21 by Westphal College, Drexel University `,
    author: `Graphic Group – Graphic Design Program, Drexel University`,
    siteUrl: `http://westphal.design`,
    keywords: `Graphic Design`,
    address: "3501 Market St, Philadelphia, PA 19104",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`seniors`, `awards`],
        //If using single types place them in this array.
        // singleTypes: [`home-page`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: gtm,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "./src/assets/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto Mono:400,800", "Krona One"],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: require.resolve(`./src/components/Layout.js`),
    //   },
    // },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        // layout: require.resolve(`./src/components/Layout.js`)
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-netlify`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-styled-components`,
  ],
};
