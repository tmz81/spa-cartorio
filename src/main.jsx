import { createRoot } from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    text: {
      primary: "#FF7F0B",
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
