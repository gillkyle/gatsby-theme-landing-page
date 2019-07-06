import React from "react"
/** @jsx jsx */
import { jsx, Main, Layout as ThemeLayout } from "theme-ui"

import "../styles/default.css"

const Layout = ({ children }) => (
  <>
    <ThemeLayout>
      <Main>{children}</Main>
    </ThemeLayout>
  </>
)

export default Layout
