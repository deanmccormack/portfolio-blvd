import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const AppLaunchImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bridge-blvd-screens/bridge-blvd-landing-card.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default AppLaunchImage
