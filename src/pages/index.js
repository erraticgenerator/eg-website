/*
index.js
- for now, it is blog index. things may change later.
- query first image from each post. consider post that has no image.
 */

import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Article has 2 children (featured image, header)
const Article = styled.article`
  margin: 7rem 0;
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
// grouping for flex purpose
const FeaturedImage = styled.div`
  margin-bottom: 12px;
  width: 100%;
  flex: 1;
`
// grouping for flex purpose
const HeaderGroup = styled.div`
  margin-left: 20px;
  flex: 3;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`

const postTitle = css`
  margin-bottom: 0.4rem;
  font-size: 2.6rem;
  line-height: 1.3;
`

const postSubtitle = css`
  margin-bottom: 0.8rem;
  font-size: 1.8rem;
  font-weight: 400;
  color: #666;
`

const postDate = css`
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  color: #666;
`

const postTags = css`
  // margin: 1rem 0;
`

const postTag = css`
  display: inline-block;
  margin: 2px;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 1rem;
  // font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  line-height: 2;
  background-color: #fee;
  // border: 1px solid #fcc;
`

const Index = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const metadata = data.site.siteMetadata

  return (
    <Layout>
      <Seo title={metadata.title} description={metadata.tagline} />
      {edges.map(({ node }) => {
        // for now, only use png/jpg, no gif support (sharp doesn't support)
        // also, aspectRatio works, but generated file is not cropped.
        const featuredImg = node.frontmatter.featuredImage
        const childImageSharp = featuredImg ? featuredImg.childImageSharp : null

        return (
          <Article key={node.id}>
            <FeaturedImage>
              <Link to={node.frontmatter.slug}>
                {childImageSharp && (
                  <Img fluid={{ ...childImageSharp.fluid, aspectRatio: 1.5 }} />
                )}
              </Link>
            </FeaturedImage>

            <HeaderGroup>
              <div css={postDate}>
                {node.frontmatter.date} • {node.timeToRead} min read
              </div>

              <Link to={node.frontmatter.slug}>
                <h1 css={postTitle}>{node.frontmatter.title}</h1>
                <h2 css={postSubtitle}>{node.frontmatter.subtitle}</h2>
              </Link>

              <div css={postTags}>
                {node.frontmatter.tags.map(tag => {
                  return (
                    <span key={tag} css={postTag}>
                      {tag}
                    </span>
                  )
                })}
              </div>
            </HeaderGroup>
          </Article>
        )
      })}
    </Layout>
  )
}

export default Index

// fixed image 240x180 (for thumbnail)
export const query = graphql`
  query IndexQuery {
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
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            slug
            subtitle
            tags
            title
          }
          timeToRead
          wordCount {
            words
          }
        }
      }
    }
  }
`
