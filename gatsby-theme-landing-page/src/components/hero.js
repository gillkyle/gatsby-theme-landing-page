/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"

const Hero = () => (
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
    <Styled.h1 sx={{ textAlign: "center" }}>Landing Page Starter</Styled.h1>
    <Styled.p sx={{ textAlign: "center", maxWidth: 440 }}>
      This landing page looks great on all devices and is minimal in design. Add
      what you want and deploy.
    </Styled.p>
    <Button>Get Early Access</Button>
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

export default Hero
