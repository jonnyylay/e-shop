import { createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E25E3E",
    },
    secondary: {
      main: "#111",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      ontFamily: "Lato",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
      fontFamily: "Lato",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      ontFamily: "Lato",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 600,
      ontFamily: "Lato",
      color: "#ccc",
    },
    h5: {
      fontSize: ".8rem",
      fontWeight: 400,
      ontFamily: "Lato",
    },
    h6: {
      fontSize: ".8rem",
      fontWeight: 600,
      ontFamily: "Lato",
    },
    h7: {
      fontSize: "1.4rem",
      fontWeight: 400,
      ontFamily: "Lato",
    },
    h8: {
      fontSize: ".8rem",
      fontWeight: 600,
      ontFamily: "Lato",
    },
    h9: {
      fontSize: "1.3rem",
      fontWeight: 600,
      ontFamily: "Lato",
    },
    h10: {
      fontSize: "1.3rem",
      fontWeight: 500,
      ontFamily: "Lato",
    },
  },
});

export default theme;
