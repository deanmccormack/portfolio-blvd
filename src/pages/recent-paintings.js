import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SlideShow from "../components/slide-show"

const PaintingSlideShow = function PaintingSlideShow (props) {
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
  return (
    <SlideShow {...props} allFile={allFile} />
  )
}

const RecentPaintings = () => {
  const [isLightBoxVisible, setLightboxVisible] = useState(false)

  const openLightBox = function openLightBox() {
    setLightboxVisible(true)
  }

  const closeLightBox = function closeLightBox() {
    setLightboxVisible(false)
  }

  const getPaintingSlideShow = () => (<PaintingSlideShow
    isLightBoxVisible={isLightBoxVisible}
    openLightBox={openLightBox}
    closeLightBox={closeLightBox} />
  )

  const getMainContent = () => (
    <>
    <SEO title="Recent Paintings" />
    <article>
      <h3>Recent Paintings</h3>
      <section>
        {getPaintingSlideShow()}
        <p>sunt quem elit aliqua dolore export aliqua aliqua nisi sunt tempor malis amet
          esse esse cillum quid irure illum quae illum veniam summis nulla dolor culpa
          aute anim export eram velit magna fugiat export multos quid veniam nisi aliqua
          quis</p>
      </section>
     </article>
    </>
  )

  const getContent = () => (isLightBoxVisible
      ? getPaintingSlideShow()
      : getMainContent()
  )

  return (
    <Layout isLightBoxVisible={isLightBoxVisible} >
      {getContent()}
    </Layout>
  )
}

export default RecentPaintings;
