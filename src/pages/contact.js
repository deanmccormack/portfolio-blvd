import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "paintings/untitled-2019-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p><a href={`mailto:${"deanmccormack@gmail.com" }`}>deanmccormack@gmail.com</a></p>
    <div style={{ marginBottom: `1.45rem` }}>
      <PageImage />
    </div>
  </Layout>
)

export default ContactPage
