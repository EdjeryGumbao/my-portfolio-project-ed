import { Box, Typography } from "@mui/material";
import headerPerson from "../assets/header-person.png";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "lightgray",
      }}
    >
      <Box sx={{ marginLeft: "5rem" }}>
        <img
          src={headerPerson}
          alt="header-person"
          style={{ maxWidth: "70%", height: "auto" }}
        />
      </Box>
      <Box>
        <Typography variant="h6">Edjery Gumbao</Typography>
        <Typography variant="h3">
          Passionately Crafting Software Solutions
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
