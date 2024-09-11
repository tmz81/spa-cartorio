import { createRoot } from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    text: {
      primary: "#000",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
