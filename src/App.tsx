import { Box, CssBaseline, Toolbar } from "@mui/material";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <CssBaseline />
      <Navbar />
      <Toolbar />
      <Header />
      <Projects />
    </Box>
  );
}

export default App;
