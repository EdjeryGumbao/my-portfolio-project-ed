import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import { useState } from "react";
import ScrollToSectionButton from "./ui/ScrollToSectionButton";
import ScrollToSectionListItemButton from "./ui/ScrollToSectionListItemButton";
import ToggleColorMode from "./ui/ToggleColorMode";

const drawerWidth = 240;
const navItems = ["Home", "Projects", "Skills", "About", "Contact"];
// TODO: Add anchor links

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <AppBar component="nav" sx={{ bgcolor: "background.default" }}>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                color="primary"
              >
                PORTFOLIO
              </Typography>
            </Grid>
            <Grid item>
              <Box>
                <Box sx={{ display: { xs: "none", sm: "inline" } }}>
                  {navItems.map((item) => (
                    <ScrollToSectionButton sectionId={item} text={item} />
                  ))}
                </Box>
                <ToggleColorMode />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} textAlign="center">
            <Typography my={3}>Welcome to my Portfolio!</Typography>
            <Stack spacing={2}>
              {navItems.map((item) => (
                <ScrollToSectionListItemButton sectionId={item} text={item} />
              ))}
            </Stack>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
