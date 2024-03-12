import { Box, Grid, Typography } from "@mui/material";
import headerPerson from "../assets/header-person.png";

const paragraphFontSize = 20;
const paragraphTextIndent = 50;

const About = () => {
  return (
    <Box component="div" sx={{ my: 15 }}>
      <Grid
        container
        px={{ xs: 5, lg: 25 }}
        spacing={10}
        sx={{ textAlign: "left" }}
      >
        <Grid item xs={12} md={6} lg={6}>
          <Typography
            variant="h4"
            sx={{ textAlign: "left", fontWeight: "bold", pb: 5 }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textIndent: paragraphTextIndent,
              textAlign: "justify",
              fontSize: paragraphFontSize,
              mb: 5,
            }}
          >
            I'm Edjery Gumbao, a passionate
            <Box component="span" sx={{ fontWeight: "bold" }}>
              {" "}
              software developer{" "}
            </Box>
            who thrives on the challenges of coding. Whether it's tackling
            complex problems or diving into intricate details, I find joy in
            every aspect of the development process.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textIndent: paragraphTextIndent,
              textAlign: "justify",
              fontSize: paragraphFontSize,
            }}
          >
            Present me with a problem, and I'll eagerly dive in, strategizing
            and crafting solutions that not only work but inspire. For me,
            <Box component="span" sx={{ fontWeight: "bold" }}>
              {" "}
              software development{" "}
            </Box>
            isn't just a job, it's a calling. With each line of code I write,
            I'm reminded that I'm exactly where I belong in my career journey.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Box
            component="img"
            alt="header-person"
            src={headerPerson}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
