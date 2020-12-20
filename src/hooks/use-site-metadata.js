/*
this is a useStaticQuery hook that calls site metadata query.
it can be reused in many components (ie. header, footer)
*/

import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          tagline
          email
          social {
            twitterUrl
            instagramUrl
            mediumUrl
            kofiUrl
          }
        }
      }
    }
  `)
  return data
}
