import { PaletteMode, createTheme } from "@mui/material";

const theme = (themeMode: PaletteMode) =>
  createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: themeMode === "dark" ? "#D4D3FF" : "#1C004C",
      },
      secondary: {
        main: themeMode === "dark" ? "#5000DC" : "#1C004C",
      },
      background: {
        default: themeMode === "dark" ? "#1A1A2A" : "#E9EBFA",
        paper: themeMode === "dark" ? "#0B0B26" : "#D2D9FF",
      },
      text: {
        primary: themeMode === "dark" ? "#D4D3FF" : "#1C004C",
        secondary: themeMode === "dark" ? "#8E8CB7" : "#403650",
      },
      info: {
        main: themeMode === "dark" ? "#6970AD" : "#6C7FBD",
      },
    },
  });

export default theme;
