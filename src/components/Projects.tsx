import {
  Box,
  Button,
  Container,
  Link,
  MobileStepper,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import websiteList from "../data/websiteList";
import SectionTitle from "./common/SectionTitle";

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
    <Stack>
      <SectionTitle text="Explore My Projects!" />
      <Container maxWidth={"xs"}>
        <Paper elevation={5}>
          <Typography p={2}>{websiteList[activeImage].label}</Typography>
        </Paper>
        <Link href={websiteList[activeImage].link} target="_blank">
          <Box
            component="img"
            alt="Image"
            src={websiteList[activeImage].img}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
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
    </Stack>
  );
};

export default Projects;
