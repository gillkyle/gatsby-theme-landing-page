/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => {
  const {
    text: { call_to_action: cta },
  } = useStaticQuery(graphql`
    query {
      text {
        id
        call_to_action {
          header
          subheader
          button_text
        }
      }
    }
  `)

  return (
    <Container>
      <SectionHeader title={cta.header} description={cta.subheader} />
      <Button>{cta.button_text}</Button>
    </Container>
  )
}

export default CallToAction
