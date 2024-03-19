import { Box, Grid, Stack, Typography } from "@mui/material";
import aboutImage from "../assets/Images/about-image.png";
import SectionTitle from "./common/SectionTitle";

const paragraphStyle = {
  textIndent: 50,
  textAlign: "justify",
  fontSize: 20,
};

const About = () => {
  const BoldSpan = (text: string) => {
    return (
      <Box component="span" sx={{ fontWeight: "bold" }}>
        {text}
      </Box>
    );
  };

  return (
    <Box>
      <SectionTitle text="About Me" />

      <Grid container spacing={10}>
        <Grid item xs={12} lg={6} my={6}>
          <Stack spacing={5}>
            <Typography variant="body1" sx={paragraphStyle}>
              I'm Edjery Gumbao, a passionate {BoldSpan(" software developer ")}
              who thrives on the challenges of coding. Whether it's tackling
              complex problems or diving into intricate details, I find joy in
              every aspect of the development process.
            </Typography>
            <Typography variant="body1" sx={paragraphStyle}>
              Present me with a problem, and I'll eagerly dive in, strategizing
              and crafting solutions that not only work but inspire. For me,
              {BoldSpan(" software development ")} isn't just a job, it's a
              calling. With each line of code I write, I'm reminded that I'm
              exactly where I belong in my career journey.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6} sx={{textAlign: "center"}}>
          <Box
            component="img"
            alt="about-image"
            src={aboutImage}
            sx={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
