import React from "react"
/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import feature from "../images/feature.png"
import SectionHeader from "./section-header"

const Content = () => {
  const {
    text: { content: contentText },
  } = useStaticQuery(graphql`
    query {
      text {
        id
        content {
          header
          subheader
          sections {
            title
            description
          }
        }
      }
    }
  `)

  return (
    <Container>
      <SectionHeader
        title={contentText.header}
        description={contentText.subheader}
      />
      <content
        sx={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
        }}
      >
        {contentText.sections.map(section => (
          <>
            <div>
              <Styled.h3>{section.title}</Styled.h3>
              <Styled.p sx={{ color: "gray.1" }}>
                {section.description}
              </Styled.p>
            </div>
            <div>
              <img
                src={feature}
                alt="a blank card floating over colorful graphics"
              />
            </div>
          </>
        ))}
      </content>
    </Container>
  )
}

export default Content
