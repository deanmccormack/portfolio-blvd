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
        <div className='float-image-container'>
          <AppLaunchImage />
        </div>
        <section>
          <h6>WIP - Work in Progress</h6>
          <p>Currently working towards some visualized end. (see goal) </p>
        </section>
        <section>
          <h6>Personal Project</h6>
          <p>If thing A only needs to be 50% complete; to get thing B to 90% complete.
          Is it good enough? Wouldn&apos;t be cool if thing C did action D? ... (see personal project.)
          </p><p>Or, it&apos;s all minimal incremental recursion until (see goal.)
          </p>

        </section>
        <section>
          <h6>Goal</h6>
          <p>Build a self-generating Rubber Bridge tutorial.</p>
        </section>
        <section>
          <h6>Up Next</h6>
          <ol>
          <li>Just added Darl Mode; still tweaking shades and tints</li>
          <li>Generate a bidding cheat sheet for the configured bid system</li>
          <li>Add SAYC</li>
          <li>Accessibility</li>
          <li>When bidding take vulnerability, rubber strategy into account.</li>
          <li>improve bid hints, more why not to bid...</li>
          <li>fix ui bugs stacking issue, tablet display...</li>
          <li>UI testing</li>
          <li>export/import my local storage saved/test deals and add to the preloadded deals menu</li>
          <li>PWA</li>
          <li>add an updates seciton here</li>
          <li>way out... complete card play</li>
          </ol>
        </section>

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
