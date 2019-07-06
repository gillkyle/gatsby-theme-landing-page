export default {
  colors: {
    gray: ["#A0A4A6", "#B0B8BA", "#F3F5F6", "#FBFDFF"],
    secondary: "#50CAF9",
    primary: "#5368f1",
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
      ":hover": {
        boxShadow: `0px 5px 20px -2px rgba(121, 211, 255, 0.45)`,
        transition: `all 0.3s ease-in-out`,
      },
    },
    secondary: {
      padding: ".5rem 2.5rem",
      cursor: "pointer",
    },
  },
  radii: [10],
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
    },
    h1: {
      fontSize: "2em",
      margin: "0.67em 0",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
  },
}
