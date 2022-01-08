import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import KofiCta from "../components/kofi-cta"
import "../styles/gist-solarized-light.css"

const contents = css`
  // margin: 0 auto;
  // width: 100%;
`

const header = css`
  // outline: 1px solid red;
  margin-bottom: 3rem;
  // padding: 0 60px;
  font-family: "Open Sans", sans-serif;
`

const title = css`
  margin-top: 1rem;
  font-size: 4rem;
  line-height: 1.2;
`

const subtitle = css`
  margin-bottom: 0.6rem;
  color: #666;
  font-size: 2.4rem;
  font-weight: 400;
`

const date = css`
  color: #666;
  font-size: 1.8rem;
`

const markdown = css`
  h2,
  p,
  .gist,
  .gatsby-highlight {
    // padding: 0 60px;
  }
  h2 {
    margin-bottom: 0.8rem;
    font-family: "Open Sans", sans-serif;
    font-size: 2.4rem;
  }

  p {
    margin-bottom: 2.4rem;
    font-size: 1.8rem;
    line-height: 1.6;
  }

  a {
    color: teal;
    text-decoration: underline;
  }

  ul {
    margin-bottom: 2.4rem;
    font-size: 1.8rem;
  }

  figure {
    margin: 5rem auto;
    width: 100%;
  }
  .gatsby-resp-image-wrapper {
    max-width: 100% !important;
  }
  figure img {
    width: 100%;
  }
  figure figcaption {
    padding: 0.6rem 4%;
    color: #666;
    font-size: 1.6rem;
    text-align: center;
  }

  .gist,
  .gatsby-highlight {
    margin: 5rem auto;
  }
  .gist .gist-file {
    border: none;
  }
  .gatsby-highlight,
  .gist span {
    font-size: 1.4rem;
  }
  .gist .gist-meta {
    // display: none;
  }
`

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds post data
  const { frontmatter, html } = markdownRemark
  const image = frontmatter.featuredImage
    ? frontmatter.featuredImage.publicURL
    : null

  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={markdownRemark.excerpt}
        pagePath={frontmatter.slug}
        image={image}
        isBlogPost
      />
      <div css={contents}>
        <header css={header}>
          <h1 css={title}>{frontmatter.title}</h1>
          <h2 css={subtitle}>{frontmatter.subtitle}</h2>
          <time css={date}>{frontmatter.date}</time>
        </header>
        <div css={markdown} dangerouslySetInnerHTML={{ __html: html }} />
        <KofiCta />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostTemplate($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 140)
      frontmatter {
        slug
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        tags
        featuredImage {
          publicURL
        }
      }
    }
  }
`

export default BlogPostTemplate
