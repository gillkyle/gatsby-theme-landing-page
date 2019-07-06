/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import feature from "../images/feature.png"
import SectionHeader from "./section-header"

const Content = () => (
  <Container>
    <SectionHeader
      title="Minimal Features"
      description="Don't spend time ripping out unneeded plugins and bloat."
    />
    <content
      sx={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <Styled.h3>What you need to Start</Styled.h3>
        <Styled.p sx={{ color: "gray.1" }}>
          Includes plugins for analytics, building sitemaps, and optimizing
          images
        </Styled.p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </Container>
)

export default Content
