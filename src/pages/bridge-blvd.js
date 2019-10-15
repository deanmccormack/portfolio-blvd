import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AppLaunchImage from "../components/app-launch-image"

const BridgeBlvd = () => (
  <Layout>
    <SEO title="Bridge-Blvd" />
    <article>
      <h3>Bridge Blvd.</h3>
      <section style={{maxWidth: '700px'}}>

        <p>sunt quem elit aliqua dolore export aliqua aliqua nisi sunt tempor malis amet
        esse esse cillum quid irure illum quae illum veniam summis nulla dolor culpa
        aute anim export eram velit magna fugiat export multos quid veniam nisi aliqua
        quis</p>

        <div className='float-image-container'>
          <AppLaunchImage />
        </div>

        <p>sunt quem elit aliqua dolore export aliqua aliqua nisi sunt tempor malis amet
        esse esse cillum quid irure illum quae illum veniam summis nulla dolor culpa
        aute anim export eram velit magna fugiat export multos quid veniam nisi aliqua
        quis</p>
        <p>sunt quem elit aliqua dolore export aliqua aliqua nisi sunt tempor malis amet
        esse esse cillum quid irure illum quae illum veniam summis nulla dolor culpa
        aute anim export eram velit magna fugiat export multos quid veniam nisi aliqua
        quis</p>

        <button onClick={
          (e) => {e.preventDefault(); window.open('https://heuristic-johnson-16785e.netlify.com/');}
        }>Launch</button>

      </section>
    </article>
  </Layout>
)

export default BridgeBlvd
