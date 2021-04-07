require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `BeQuasi`,
    description: `BeQuasi`,
    author: `@adamjw3`,
    siteUrl: `https://wwww.bequasi.com`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `bequasi`,
        accessToken: `MC5YcHJvQlJFQUFDTUFqRlIz.Cu-_ve-_vTTvv73vv73vv73vv70p77-9Tz3vv70a77-977-9Mw1Y77-977-977-9EO-_vQrvv73vv73vv73vv70I77-9Wg`,
        linkResolver: ({ node, key, value }) => item => `/${item.uid}`,
        schemas: {
          item: require("./src/schemas/item.json"),
          order: require("./src/schemas/order.json"),
          legal: require("./src/schemas/legal.json")
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-typescript-minimal`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ["/404/*"],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.bequasi.com`,
        sitemap: `https://www.bequasi.com/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-163952727-1",
          anonymize: true,
        },
        environments: ["production", "development"],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: "#___gatsby",

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          style: {
            content: {
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
            },
          },
        },
      },
    },
  ],
}
