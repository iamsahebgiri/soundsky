import { createTheme } from "@mui/material/styles";
import colors from "./colors";

// Create a theme instance.
const theme = (mode: any) =>
  createTheme({
    palette: {
      mode,
      ...colors,
    },
    typography: {
      fontFamily: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      allVariants: {
        fontFeatureSettings: ['"cv02"', '"cv03"', '"cv04"', '"cv11"'].join(","),
      },
    },
  });

export default theme;
