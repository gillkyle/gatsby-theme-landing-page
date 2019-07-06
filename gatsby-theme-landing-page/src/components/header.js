import React from "react"
/** @jsx jsx */
import { jsx, Header as ThemeHeader } from "theme-ui"
import { Link } from "gatsby"

const Header = () => (
  <ThemeHeader
    sx={{
      background: `primary`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <nav style={{ margin: 0, padding: 20 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </nav>
    </div>
  </ThemeHeader>
)

export default Header
