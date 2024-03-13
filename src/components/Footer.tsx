import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
const iconSize = "large";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center" }} px={5} py={5} mt={20}>
      <Stack spacing={2}>
        <Box>
          <IconButton
            aria-label="GitHub"
            href="https://github.com/Edjery"
            target="_blank"
            size={iconSize}
          >
            <GitHub />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/edjery-gumbao-4661b429a/"
            target="_blank"
            size={iconSize}
          >
            <LinkedIn />
          </IconButton>
        </Box>

        <Typography>
          Crafted with passion and enthusiasm by Edjery Gumbao © 2024. All
          rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
