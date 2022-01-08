import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, image, pagePath, isBlogPost }) => (
  <StaticQuery
    query={query}
    render={({ site: { siteMetadata } }) => {
      const seo = {
        title: title || siteMetadata.title,
        titleTemplate: siteMetadata.titleTemplate || "",
        description: description || siteMetadata.tagline,
        url: `${siteMetadata.siteUrl}${pagePath || ""}`,
        image: image ? `${siteMetadata.siteUrl}${image}` : null,
      }
      return (
        <Helmet
          htmlAttributes={{ lang: "en-US" }}
          title={seo.title}
          titleTemplate={seo.titleTemplate}
        >
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          {seo.url && <meta property="og:url" content={seo.url} />}
          {(isBlogPost ? true : null) && (
            <meta property="og:type" content="article" />
          )}
          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}
          {seo.image && <meta property="og:image" content={seo.image} />}
          {(seo.imageWidth ? true : null) && (
            <meta property="og:image:width" content={seo.imageWidth} />
          )}
          {(seo.imageHeight ? true : null) && (
            <meta property="og:image:height" content={seo.imageHeight} />
          )}
          <meta name="twitter:card" content="summary_large_image" />
          {seo.title && <meta name="twitter:title" content={seo.title} />}
          {seo.description && (
            <meta name="twitter:description" content={seo.description} />
          )}
          {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
      )
    }}
  />
)

export default Seo

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  pagePath: null,
  isBlogPost: false,
}

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        title
        titleTemplate
        siteUrl
        tagline
      }
    }
  }
`
