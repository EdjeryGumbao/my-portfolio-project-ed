import {
  Box,
  Button,
  Container,
  Link,
  MobileStepper,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import websiteList from "../data/websiteList";

const Projects = () => {
  const [activeImage, setActiveImage] = useState(0);
  const maxImages = websiteList.length;

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
          <Typography>{websiteList[activeImage].label}</Typography>
        </Paper>
        <Link href={websiteList[activeImage].link} target="_blank">
          <Box sx={{ height: 250, maxWidth: 400, width: "100%" }}>
            <Box
              component="img"
              alt="Image"
              src={websiteList[activeImage].img}
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
