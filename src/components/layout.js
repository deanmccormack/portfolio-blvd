/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SideBar from "./sidebar"

import "./layout.css"
import "../css/portfolio-blvd.css"

const FULL_SCREEN_WIDTH = '768';

export const getIsPortrait = function getIsPortrait() {
  return typeof window !== `undefined`
    ? window.innerHeight > window.innerWidth : false  
}

export const getIsFullScreenLayout = function getIsFullScreenLayout() {
  return typeof document !== `undefined`
    ? document.body.clientWidth >= FULL_SCREEN_WIDTH : false
}

const Layout = (props) => {

  const [isSideBarVisible, setSideBarVisible] = useState(getIsFullScreenLayout())

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const getIsSideBarVisible = () => {
    return isSideBarVisible
      || getIsFullScreenLayout()
  }

  const getLightBoxLayout = () => (
    <div style={{
      marginT0p: '2% auto',
      height: '92vh',
    }}>
      <main style={{height: '98%'}}>{props.children}</main>
    </div>
  )

  const handleHamburgerClick = function handleHamburgerClick() {
    setSideBarVisible(!isSideBarVisible)
  }

  const HamburgerIcon = () => (
    <button className="nav__button" onClick={() => handleHamburgerClick()}>&#9776;</button>
  )

  const getMainLayout = () => (
    <>
      <div className="wrapper">
        <Header siteTitle={data.site.siteMetadata.title}>
          {!getIsFullScreenLayout() &&
            <HamburgerIcon />
          }
        </Header>
        {getIsSideBarVisible() &&
          <SideBar />
        }
        <main className="content" style={{minHeight: '520px'}}>{props.children}</main>
        <footer className="footer" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
          <span style={{fontSize: '60%', float: 'right'}}>
            © All images copyright of the artist, 1990-{new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org" style={{fontSize: '100%'}}>Gatsby</a>
          </span>
        </footer>
      </div>
    </>
  )

  return (
    props.isLightBoxVisible
      ? getLightBoxLayout()
      : getMainLayout()
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
