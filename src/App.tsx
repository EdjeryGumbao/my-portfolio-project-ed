import { Box, CssBaseline, Toolbar } from "@mui/material";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <CssBaseline />
      <Navbar />
      <Toolbar />
      <Header />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
