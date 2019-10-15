import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { getImageGallery } from "../components/image-gallery"

const PastPaintings = () => {
  const { allFile } = useStaticQuery(graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "past-paintings" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  const [isLightBoxVisible, setLightboxVisible] = useState(false)
  return (
    <Layout>
      <SEO title="Past Paintings" />
      <h3>Past Paintings</h3>
      {getImageGallery(allFile, isLightBoxVisible, setLightboxVisible)}
      <p>sunt quem elit aliqua dolore export aliqua aliqua nisi sunt tempor malis amet
      esse esse cillum quid irure illum quae illum veniam summis nulla dolor culpa
      aute anim export eram velit magna fugiat export multos quid veniam nisi aliqua
      quis</p>
    </Layout>
  )

}

export default PastPaintings;
