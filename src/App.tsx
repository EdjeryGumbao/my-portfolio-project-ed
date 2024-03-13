import {
  Box,
  CssBaseline,
  Stack,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import { useMemo, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ColorModeContext from "./context/ColorModeContext";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box>
          <CssBaseline />
          <Box component="div" id="Home">
            <Navbar />
          </Box>
          <Toolbar />
          <Header />
          <Stack maxWidth={1200} mx="auto" px={10} spacing={20}>
            <Box component="div" id="Projects" />
            <Projects />
            <Box component="div" id="Skills" />
            <Skills />
            <Box component="div" id="About" />
            <About />
            <Box component="div" id="Contact" />
            <Contact />
          </Stack>
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
