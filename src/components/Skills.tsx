import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import skillDataList from "../data/skillDataList";
import SkillsCollapsableContent from "./SkillsCollapsableContent";

const Skills = () => {
  const [open1stCol, setOpen1stCol] = useState(true);
  const [open2ndCol, setOpen2ndCol] = useState(false);

  const handleFirstCol = () => {
    setOpen1stCol(!open1stCol);
    if (open2ndCol) setOpen2ndCol(false);
  };
  const handleSecondCol = () => {
    setOpen2ndCol(!open2ndCol);
    if (open1stCol) setOpen1stCol(false);
  };
  return (
    <Box my={30}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
        Skills
      </Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: "70rem",
          bgcolor: "background.paper",
          textAlign: "center",
          margin: "auto",
        }}
        component="nav"
      >
        <Stack direction="row">
          <ListItemButton onClick={handleFirstCol}>
            <ListItemIcon>
              <EmojiObjectsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={skillDataList[1].header} />
            {open1stCol ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton onClick={handleSecondCol}>
            <ListItemIcon>
              <BusinessCenterOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={skillDataList[0].header} />
            {open2ndCol ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </Stack>

        <SkillsCollapsableContent open={open1stCol} data={skillDataList[1]} />
        <SkillsCollapsableContent open={open2ndCol} data={skillDataList[0]} />
      </List>
    </Box>
  );
};

export default Skills;
