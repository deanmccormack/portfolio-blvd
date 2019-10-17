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

        <p></p>

        <div className='float-image-container'>
          <AppLaunchImage />
        </div>

        <p></p>
        <p></p>

        <button
          className="launch-btn"
          title="Opens Bridge Blvd app in new tab" 
          onClick={
            (e) => {e.preventDefault(); window.open('https://heuristic-johnson-16785e.netlify.com/');}
        }>Launch</button>

      </section>
    </article>
  </Layout>
)

export default BridgeBlvd
