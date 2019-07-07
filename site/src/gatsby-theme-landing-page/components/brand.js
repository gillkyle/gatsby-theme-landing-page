/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui/theme"
const Brand = ({ fill }) => {
  return (
    <div
      sx={{
        color: "gray.0",
        display: "flex",
        placeItems: "center",
        fontWeight: "bold",
        letterSpacing: 1.2,
        fontSize: "3",
        textTransform: "uppercase",
      }}
    >
      Brand
    </div>
  )
}

export default Brand
