import { Button } from "@mui/material";

interface Props {
  sectionId: string;
  text: string;
}

const ScrollToSectionButton = ({ sectionId, text }: Props) => {
  const scrollToSection = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <Button onClick={scrollToSection}>{text}</Button>;
};

export default ScrollToSectionButton;
