import { Box, Collapse, Grid, ListItemText } from "@mui/material";
import { ISkillData } from "../data/skillData";
import ListItemWithIcon from "./common/ListItemWithIcon";

interface Props {
  open: boolean;
  data: ISkillData;
}

const SkillsCollapsableContent = ({ open, data }: Props) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box pl={5}>
        {data.content.map((main) => (
          <ListItemText
            primary={<ListItemWithIcon name={main.header} icon={main.icon} />}
            secondary={
              <Box pl={5}>
                <Grid container>
                  {main.content.map((item) => (
                    <Grid item xs={6}>
                      <ListItemText
                        primary={
                          <ListItemWithIcon name={item.name} icon={item.icon} />
                        }
                        secondary={
                          <Box pl={5}>
                            {item.content.length !== 0
                              ? item.content.map((subItem) => (
                                  <ListItemText
                                    primary={
                                      <ListItemWithIcon
                                        name={subItem.name}
                                        icon={subItem.icon}
                                      />
                                    }
                                  />
                                ))
                              : null}
                          </Box>
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            }
          />
        ))}
      </Box>
    </Collapse>
  );
};

export default SkillsCollapsableContent;
