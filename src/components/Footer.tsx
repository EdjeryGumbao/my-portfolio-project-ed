import { GitHub, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
const iconSize = "large";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "lightblue", textAlign: "center" }} px={5} py={5}>
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
