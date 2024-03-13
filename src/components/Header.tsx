import { Box, Divider, Grid, Typography } from "@mui/material";
import headerPerson from "../assets/Images/header-person.png";

const Header = () => {
  return (
    <Box>
      <Box sx={{ bgcolor: "info.main" }}>
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
                alt="header-person"
                src={headerPerson}
                sx={{ width: "80%", height: "auto", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid item xs={10} lg={7}>
            <Box
              sx={{ textAlign: { xs: "center", md: "left" }, my: { xs: 5 } }}
            >
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
    </Box>
  );
};

export default Header;
