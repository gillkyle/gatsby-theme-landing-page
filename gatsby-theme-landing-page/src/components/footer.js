/** @jsx jsx */
import { jsx, Footer as ThemeFooter } from "theme-ui"

const Separator = () => <div sx={{ margin: "2" }}>·</div>

const Footer = ({ siteTitle }) => (
  <ThemeFooter
    sx={{
      backgroundColor: "gray.3",
    }}
  >
    <div
      sx={{
        padding: "4",
        maxWidth: "max",
        width: "100%",
        margin: "0 auto",
        fontSize: "2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        color: "gray.1",
        fontWeight: 700,
      }}
    >
      <a
        sx={{ textDecoration: "none", color: "gray.1" }}
        href="https://github.com/gillkyle/gatsby-starter-landing-page"
      >
        Contact Us
      </a>{" "}
      <Separator />
      <div sx={{}}>
        © {new Date().getFullYear()}
        {` `}
        {siteTitle}
      </div>
      <Separator />
      Terms of Service
    </div>
  </ThemeFooter>
)

export default Footer
