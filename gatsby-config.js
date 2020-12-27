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
  // pathPrefix: "/eg-website", // for gh-pages website
  pathPrefix: "",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-185826355-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        defer: false,
      },
    },
  ],
}
