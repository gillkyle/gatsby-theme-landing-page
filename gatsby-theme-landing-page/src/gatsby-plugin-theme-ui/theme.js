const heading = {
  color: "text",
  lineHeight: "1.2",
  fontWeight: "heading",
}

export default {
  space: [0, 4, 8, 16, 32, 64, 128],
  breakpoints: ["750px"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    gray: ["#A0A4A6", "#B0B8BA", "#F3F5F6", "#FBFDFF"],
    secondary: "#50CAF9",
    primary: "#5368f1",
    text: "#42444a",
  },
  buttons: {
    primary: {
      padding: ".5rem 2.5rem",
      color: "gray.3",
      fontWeight: 700,
      cursor: "pointer",
      background: `linear-gradient(to top right, #50CAF9, #5368f1)`,
      borderRadius: "0",
      borderWidth: 0,
      transition: `all 0.3s ease-in-out`,
      boxShadow: `0px 5px 20px -2px rgba(121, 211, 255, 0.25)`,
      ":hover": {
        boxShadow: `0px 5px 20px -2px rgba(121, 211, 255, 0.75)`,
        transition: `all 0.3s ease-in-out`,
        transform: `scale(1.025)`,
      },
      "&:focus": {
        outline: 0,
        transform: `scale(1.025)`,
        boxShadow: `0px 5px 20px -2px rgba(121, 211, 255, 0.5), 0 0 0 3px rgba(121, 211, 255, 0.5)`,
      },
    },
    secondary: {
      color: "secondary",
      border: "1px solid",
      borderColor: "secondary",
      padding: ".25rem 1.5rem",
      cursor: "pointer",
    },
  },
  radii: [10],
  sizes: {
    max: "1024px",
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
    },
    Container: {
      textAlign: "center",
    },
    h1: {
      ...heading,
      fontSize: "6",
      margin: "0.67em 0",
    },
    h2: {
      ...heading,
    },
    h3: {
      ...heading,
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
    p: {
      margin: 0,
      marginBottom: "4",
    },
  },
}
