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

const Contact = () => {
  return (
    <Box maxWidth={1200} mx="auto" my={15} px={5}>
      <Typography
        variant="h4"
        sx={{ textAlign: "left", fontWeight: "bold", pb: 5 }}
      >
        Contact
      </Typography>
      <form action="https://formbold.com/s/9gp78" method="POST">
        <Stack spacing={2}>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput id="email" name="email" type="email" label="Email" />
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
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Contact;
