/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Erratic Generator`,
    titleTemplate: "%s | ErraticGenerator.com",
    siteUrl: `https://erraticgenerator.com`,
    tagline: `Creative Coding and Design`,
    email: `erraticgenerator@gmail.com`,
    social: {
      twitterUrl: `https://twitter.com/erraticgener8or`,
      instagramUrl: `https://instagram.com/erraticgenerator`,
      mediumUrl: `https://erraticgenerator.medium.com`,
      kofiUrl: `https://ko-fi.com/E1E12Z9TZ`,
    },
  },
  pathPrefix: "/eg-website", // for local
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/draft`,
        name: `draft`,
        ignore: process.env.NODE_ENV === `production` ? [`**/draft`] : [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-embed-gist`, // place before prismjs
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              //
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200, // doesn't seem to work?
              // wrapperStyle: `width: 100%`,
              linkImagesToOriginal: false,
              showCaptions: true,
              // markdownCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-figure-caption`,
            options: {
              figureClassName: "md-figure",
            },
          },
          `gatsby-remark-static-images`, // place after gatsby-remark-images
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "UA-185826355-1",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     defer: false,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-185826355-1", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
