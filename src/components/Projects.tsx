import {
  Box,
  Button,
  Container,
  Link,
  MobileStepper,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import sampleImg from "../assets/sampleWebsite.png";

const images = [
  {
    label: "Youtube",
    link: "https://www.youtube.com/",
    img: sampleImg,
  },
  {
    label: "Google",
    link: "https://www.google.com/",
    img: sampleImg,
  },
  {
    label: "Gmail",
    link: "https://www.gmail.com/",
    img: sampleImg,
  },
  {
    label: "Github",
    link: "https://www.github.com/",
    img: sampleImg,
  },
];

const Projects = () => {
  const [activeImage, setActiveImage] = React.useState(0);
  const maxImages = images.length;

  const handleNext = () => {
    setActiveImage((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveImage((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box component="div" sx={{ my: 15 }}>
      <Typography
        variant="h4"
        sx={{ mb: 10, textAlign: "center", fontWeight: "bold" }}
      >
        Explore My Projects!
      </Typography>
      {/* TODO Add the websites */}
      <Container maxWidth="xs">
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "gray",
            color: "white",
          }}
        >
          <Typography>{images[activeImage].label}</Typography>
        </Paper>
        <Link href={images[activeImage].link} target="_blank">
          <Box sx={{ height: 250, maxWidth: 400, width: "100%" }}>
            <Box
              component="img"
              alt="Image"
              src={images[activeImage].img}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Link>
        <MobileStepper
          variant="text"
          steps={maxImages}
          position="static"
          activeStep={activeImage}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeImage === maxImages - 1}
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeImage === 0}
            >
              Back
            </Button>
          }
        />
      </Container>
    </Box>
  );
};

export default Projects;
