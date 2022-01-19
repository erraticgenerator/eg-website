import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { AiOutlineMedium } from "@react-icons/all-files/ai/AiOutlineMedium"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter"

const footer = css`
  margin-top: 48px;
  height: 100px;
  background-image: linear-gradient(white 0%, #fdd 100%);
`

const container = css`
  margin: 0 auto;
  padding: 0 12px;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const copyright = css`
  font-size: 1.2rem;
`

const listLinks = css`
  display: flex;
  font-size: 3rem;
  list-style-type: none;

  li {
    margin: 0 10px;
  }
`

const Footer = () => {
  const data = useSiteMetadata()
  const metadata = data.site.siteMetadata

  return (
    <footer css={footer}>
      <div css={container}>
        <div css={copyright}>
          Copyright 2020-2021 • ErraticGenerator.com •{" "}
          <Link to="/privacy/">Our Privacy Policy</Link>
        </div>
        <ul css={listLinks}>
          <li>
            <a
              href={`mailto:${metadata.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail />
            </a>
          </li>
          <li>
            <a
              href={metadata.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a
              href={metadata.social.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMedium />
            </a>
          </li>
          <li>
            <a
              href={metadata.social.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
