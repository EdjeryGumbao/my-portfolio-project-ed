import { Box, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const iconHeight = 25;
const iconWidth = 25;

interface Props {
  name: string;
  icon: string;
}

const ListItemWithIcon = ({ name, icon }: Props) => {
  return (
    <ListItem key={name}>
      {icon !== "" ? (
        <ListItemIcon>
          <Box
            sx={{
              maxHeight: iconHeight,
              maxWidth: iconWidth,
            }}
            component="img"
            alt={name}
            src={icon}
          />
        </ListItemIcon>
      ) : null}
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default ListItemWithIcon;
