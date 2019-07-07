/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"

const Hero = () => {
  const {
    text: { hero },
  } = useStaticQuery(graphql`
    query {
      text {
        id
        hero {
          header
          subheader
          button_text
        }
      }
    }
  `)

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        sx={{
          backgroundImage: `url(${headerImage})`,
          position: "absolute",
          top: 0,
          zIndex: -5,
          height: "100vh",
          width: "100vw",
          opacity: 0.5,
        }}
      />
      <Styled.h1 sx={{ textAlign: "center" }}>{hero.header}</Styled.h1>
      <Styled.p sx={{ textAlign: "center", maxWidth: 440 }}>
        {hero.subheader}
      </Styled.p>
      <Button>{hero.button_text}</Button>
      <div sx={{ margin: 60, width: `250px`, position: "relative" }}>
        <div sx={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
          <MockupContent />
        </div>
        <div
          sx={{
            position: "absolute",
            width: "250px",
            top: 0,
          }}
        >
          <img
            src={mockupFrame}
            alt="outlines of shapes and confetti in the background "
          />
        </div>
      </div>
    </Container>
  )
}

export default Hero
