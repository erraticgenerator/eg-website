import React from "react"
// import { Link, graphql } from "gatsby"
import { Global, css } from "@emotion/react"
import Header from "./header"
import Footer from "./footer"

const pageContainer = css`
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 120px auto 100px;

  p {
    margin-bottom: 2.4rem;
    font-size: 1.8rem;
    line-height: 1.6;
  }
`
const header = css`
  // outline: 1px solid red;
  grid-row: 1 / 2;
`

const mainContainer = css`
  // border: 5px solid red;
  max-width: 720px;
  width: 100%; // without this, it doesn't shrink.
  margin: 0 auto;
  padding: 0 12px;
  grid-row: 2 / 3;
`

const footer = css`
  grid-row: 3 / 4;
`

export default function Layout(props) {
  return (
    <div css={pageContainer}>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Andika+New+Basic:ital@0;1&family=Open+Sans:wght@400;700&display=swap");

          * {
            margin: 0;
            box-sizing: border-box;
          }

          html,
          body {
            font-family: "Andika New Basic", sans-serif;
            font-size: 10px;
            height: 100%;
          }

          a {
            color: black;
            text-decoration: none;
          }
        `}
      />
      <Header css={header} />
      <main css={mainContainer}>{props.children}</main>
      <Footer css={footer} />
    </div>
  )
}
