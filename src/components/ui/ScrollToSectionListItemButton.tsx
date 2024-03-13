import { ListItemButton } from "@mui/material";

interface Props {
  sectionId: string;
  text: string;
}

const ScrollToSectionListItemButton = ({ sectionId, text }: Props) => {
  const scrollToSection = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ListItemButton onClick={scrollToSection} color="primary">
      {text}
    </ListItemButton>
  );
};

export default ScrollToSectionListItemButton;
