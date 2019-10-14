import React from "react"

import Layout from "../components/layout"
import HomePageImage from "../components/home-page-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ marginBottom: `1.45rem` }}>
      <HomePageImage />
    </div>
  </Layout>
)

export default IndexPage
