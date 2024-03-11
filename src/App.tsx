import { Box, CssBaseline, Toolbar } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <CssBaseline />
      <Navbar />
      <Toolbar />
    </Box>
  );
}

export default App;
