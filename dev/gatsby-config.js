let facebook_pixel = ''
let gtm = '1234'

module.exports = {
  siteMetadata: {
    title: `Gatsby Landing Page Starter`,
    description: `A slightly opinionated Gatsby Landing Page starter template. `,
    author: `Jeremy Lynch`,
    siteUrl: `https://gatsby-strapi-starter.netlify.com/`,
    phone: '1800123456',
    fax: '180012345',
    address: '123 fake street',
    email: 'contact@test.com'

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`seniors`],
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
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: gtm,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './src/assets/icon.png'
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:100,400,800', 'Krona One']
        }
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 250
      }
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
        }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`
  ],
}
