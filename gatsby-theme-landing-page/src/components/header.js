import React from "react"
/** @jsx jsx */
import { jsx, Header as ThemeHeader } from "theme-ui"
import { Link } from "gatsby"
import Brand from "../components/Brand"
import Button from "../components/button"

const StyledLink = props => (
  <Link
    sx={{
      textDecoration: "none",
      color: "secondary",
      fontWeight: "bold",
      ":hover": { color: "primary" },
    }}
    {...props}
  >
    {props.children}
  </Link>
)

const Header = () => (
  <ThemeHeader
    sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "4",
      maxWidth: "max",
      margin: "0 auto",
    }}
  >
    <div sx={{ gridArea: "brand" }}>
      <Brand fill="secondary" />
    </div>
    <div sx={{ gridArea: "nav" }}>
      <nav sx={{ "* + *": { marginLeft: "3" } }}>
        <StyledLink to="/">Features</StyledLink>
        <StyledLink to="/">Pricing</StyledLink>
        <Button variant="secondary">Sign Up</Button>
      </nav>
    </div>
  </ThemeHeader>
)

export default Header
