import React from "react"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const SectionHeader = ({ title, description }) => (
  <>
    <Styled.h2>{title}</Styled.h2>
    <Styled.p sx={{ color: "gray.0" }}>{description}</Styled.p>
  </>
)

export default SectionHeader
