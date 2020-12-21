import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const header = css`
  // outline: 1px solid red;
  margin-bottom: 48px;
  padding: 12px 0;
  height: 120px;
  background-image: linear-gradient(#fdd 0%, white 100%);
`

const siteTitle = css`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
`

const siteTagline = css`
  font-weight: 400;
`

const container = css`
  // outline: 1px solid red;
  margin: 0 auto;
  padding: 0 12px;
  max-width: 720px;
  display: flex;
`

const child1 = css`
  flex: 4;
  @media (max-width: 600px) {
    flex: 6;
  }
`

const child2 = css`
  flex: 1;
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
`

const Header = () => {
  const data = useSiteMetadata()
  const metadata = data.site.siteMetadata
  return (
    <header css={header}>
      <div css={container}>
        <div css={child1}>
          <h1 css={siteTitle}>
            <Link to="/">{metadata.title}</Link>
          </h1>
          <h2 css={siteTagline}>{metadata.tagline}</h2>
        </div>
        <Link css={child2} to="/about/">About</Link>
      </div>
    </header>
  )
}

export default Header
