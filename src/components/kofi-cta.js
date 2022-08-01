import React from "react"
import { css } from "@emotion/react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const container = css`
  margin-top: 60px;
  padding: 30px;
  border-top: 1px solid #aaa;
  font-size: 1.8rem;
  text-align: center;
`

const text = css`
  margin-bottom: 16px;
  color: #666;
`

const button = css`
  // display: block;
`

const KofiCta = () => {
  const data = useSiteMetadata()
  const metadata = data.site.siteMetadata

  return (
    <div css={container}>
      <p css={text}>
        If you liked my contents, please consider supporting. Thank you!
      </p>
      <p>
        Tezos donation address: <pre>tz1cr64U6Ga4skQ4oWYqchFLGgT6mmkyQZe9</pre>
      </p>
      <p>Kofi donation link:</p>

      <OutboundLink
        css={button}
        href={metadata.social.kofiUrl}
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{
            border: 0,
            height: 36,
          }}
          src="https://cdn.ko-fi.com/cdn/kofi2.png?v=2"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </OutboundLink>
    </div>
  )
}

export default KofiCta
