import { Typography } from "@mui/material";

interface Props {
  text: string;
}

const SectionTitle = ({ text }: Props) => {
  return (
    <Typography
      variant="h4"
      sx={{ mb: 5, textAlign: "center", fontWeight: "bold" }}
    >
      {text}
    </Typography>
  );
};

export default SectionTitle;
