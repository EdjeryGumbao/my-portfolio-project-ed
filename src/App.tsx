import { Box, CssBaseline, Toolbar } from "@mui/material";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <CssBaseline />
      <Navbar />
      <Toolbar />
      <Header />
    </Box>
  );
}

export default App;
