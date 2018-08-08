import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'green',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <img style={{display: 'block', maxWidth: '100%', margin: "auto"}} src="http://www.manchesterh3.co.uk/uploads/1/1/1/9/11194774/8715520_orig.gif" alt=""/>
      </div>
    </div>
  </div>
)

export default Header
