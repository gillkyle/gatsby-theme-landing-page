/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <Container>
    <SectionHeader
      title="Stay Updated"
      description="Give a final call to action because that's what the cool kids are doing."
    />
    <Button>Get Early Access</Button>
  </Container>
)

export default CallToAction
