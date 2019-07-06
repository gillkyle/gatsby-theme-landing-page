import React from "react"
/** @jsx jsx */
import { jsx, Header as ThemeHeader } from "theme-ui"
import { Link } from "gatsby"
import Button from "../components/button"

const StyledLink = props => (
  <Link
    sx={{ textDecoration: "none", color: "primary", fontWeight: "bold" }}
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
    <div sx={{ gridArea: "brand" }}>Brand</div>
    <div sx={{ gridArea: "nav" }}>
      <nav sx={{ "* + *": { marginLeft: "3" } }}>
        <StyledLink to="/">Features</StyledLink>
        <StyledLink to="/">Pricing</StyledLink>
        <Button variant="secondary">
          <StyledLink to="/">Buy Now</StyledLink>
        </Button>
      </nav>
    </div>
  </ThemeHeader>
)

export default Header
