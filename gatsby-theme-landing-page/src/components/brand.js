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
      <svg
        sx={{ marginRight: "2" }}
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="17.5"
          cy="17.5"
          r="16"
          stroke={theme.colors[fill]}
          strokeWidth="3"
        />
        <circle
          r="2.5"
          transform="matrix(-1 0 0 1 24.5 9.5)"
          fill={theme.colors[fill]}
        />
      </svg>
      Brand
    </div>
  )
}

export default Brand
