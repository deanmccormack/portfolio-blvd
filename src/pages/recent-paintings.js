import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getImageGallery } from "../components/image-gallery"

const RecentPaintings = () => {
  const [isLightBoxVisible, setLightboxVisible] = useState(false)

  const { allFile } = useStaticQuery(graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "paintings" } }
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

  const getMainContent = () => (
    <>
    <SEO title="Recent Paintings" />
    <article>
      <h3>Recent Paintings (2018 - 2019)</h3>
      <section>
        {getImageGallery(allFile, isLightBoxVisible, setLightboxVisible)}
        <p>sunt quem elit aliqua dolore export aliqua aliqua nisi sunt tempor malis amet
          esse esse cillum quid irure illum quae illum veniam summis nulla dolor culpa
          aute anim export eram velit magna fugiat export multos quid veniam nisi aliqua
          quis</p>
      </section>
     </article>
    </>
  )

  const getContent = () => (isLightBoxVisible
      ? getImageGallery(allFile, isLightBoxVisible, setLightboxVisible)
      : getMainContent()
  )

  return (
    <Layout isLightBoxVisible={isLightBoxVisible} >
      {getContent()}
    </Layout>
  )
}

export default RecentPaintings;
