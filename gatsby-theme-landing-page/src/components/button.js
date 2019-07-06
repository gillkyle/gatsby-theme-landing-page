/** @jsx jsx */
import { jsx } from "theme-ui"

const Button = ({ children, variant = "primary" }) => (
  <button
    sx={{
      color: "primary",
      variant: `buttons.${variant}`,
    }}
  >
    {children}
  </button>
)

export default Button
