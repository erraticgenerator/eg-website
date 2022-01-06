/*
404.js
 */

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const PageNotFound = () => {
  return (
    <Layout>
      404 error
      <Link to="/">Back to homepage</Link>
    </Layout>
  )
}

export default PageNotFound
