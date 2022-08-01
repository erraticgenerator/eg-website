import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/react"
// import styled from "@emotion/styled"
import Seo from "../components/seo"

// find a way to do a full height page layout no matter how long contents are.
const contents = css`
  // outline: 1px solid red;
  height: calc(100vh - 220px);

  h1,
  h2 {
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

  pre {
    background-color: #eee;
    padding: 1rem;
  }
`

const About = () => {
  return (
    <Layout>
      <Seo title="About" description="About ErraticGenerator.com" />
      <div css={contents}>
        <h1>About</h1>
        <p>
          Hi, I'm Erratic Generator. I create contents for creative coding and
          design. I mainly use JavaScript and Processing. I also use Python and
          Tensorflow for machine learning.
        </p>
        <h2>Tezos donation address</h2>
        <p>Thank you for your support!</p>
        <p>
          <pre>tz1cr64U6Ga4skQ4oWYqchFLGgT6mmkyQZe9</pre>
        </p>
        <h2>Credits</h2>
        <ul>
          <li>
            This website is created with{" "}
            <a href="https://gatsbyjs.com">Gatsbyjs</a>
          </li>
          <li>
            Gist Syntax Themes from{" "}
            <a
              href="  ul {
    margin-bottom: 2.4rem;
    font-size: 1.8rem;
  }"
            >
              https://lonekorean.github.io/gist-syntax-themes/
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default About
