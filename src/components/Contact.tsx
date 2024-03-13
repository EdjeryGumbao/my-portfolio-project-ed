import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SectionTitle from "./common/SectionTitle";

const Contact = () => {
  return (
    <Box>
      <SectionTitle text="Contact Me" />

      <Stack spacing={5}>
        <Typography variant="h6">
          Got questions or inquiries? Don't hesitate to reach out!
        </Typography>
        <form action="https://formbold.com/s/9gp78" method="POST">
          <Stack spacing={2}>
            <FormControl>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                name="email"
                type="email"
                label="Email"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="subject">Subject</InputLabel>
              <OutlinedInput
                id="subject"
                name="subject"
                type="text"
                label="Subject"
              />
            </FormControl>
            <TextField
              id="message"
              name="message"
              label="Message"
              multiline
              rows={5}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              color="secondary"
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default Contact;
