import { Box, Divider, Grid, Typography } from "@mui/material";
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
      <Grid container alignItems="center" pl={10}>
        <Grid item xs={10} lg={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              style={{ maxWidth: "80%", height: "auto" }}
              alt="header-person"
              src={headerPerson}
            />
          </Box>
        </Grid>
        <Grid item xs={10} lg={7}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, my: { xs: 5 } }}>
            <Typography variant="h6" sx={{ fontSize: { xs: 30, md: 20 } }}>
              Edjery Gumbao
            </Typography>
            <Divider
              sx={{
                mb: { xs: 3, lg: 0 },
                display: { xs: "block", md: "none" },
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Passionately Crafting Software Solutions
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
