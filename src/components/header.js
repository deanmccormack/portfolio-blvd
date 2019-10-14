import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../css/portfolio-blvd.css"

const Header = (props) => (
  <header className="header">
    <div
      style={{
        display: 'flex',
        margin: `5px auto`,
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              fontFamily: '"Sansumi-ExtraBold", helvetica, verdana, sans-serif',
              fontSize: `30px`,
              lineHeight: `43px`,
              color: `#3A3A3A`,
              letterSpacing: `0em`,
              textDecoration: `none`,
            }}
          >
            {props.siteTitle}
          </Link>
        </h1>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
