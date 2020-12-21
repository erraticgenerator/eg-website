import React from "react"
import { css } from "@emotion/react"
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
        If you like my contents, please consider supporting me. It helps me
        create more contents like this. Thank you!
      </p>

      <a
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
      </a>
    </div>
  )
}

export default KofiCta
