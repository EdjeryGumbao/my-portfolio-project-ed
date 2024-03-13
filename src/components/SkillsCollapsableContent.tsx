import { Box, Collapse, Grid, ListItemText } from "@mui/material";
import { ISkillData } from "../data/skillDataList";
import ListItemWithIcon from "./common/ListItemWithIcon";

interface Props {
  open: boolean;
  data: ISkillData;
}

const leftPadding = { xs: 2, md: 5 };

const SkillsCollapsableContent = ({ open, data }: Props) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box pl={leftPadding}>
        {data.content.map((main) => (
          <ListItemText
            primary={<ListItemWithIcon name={main.header} icon={main.icon} />}
            secondary={
              <Box pl={leftPadding}>
                <Grid container>
                  {main.content.map((item) => (
                    <Grid item xs={6}>
                      <ListItemText
                        primary={
                          <ListItemWithIcon name={item.name} icon={item.icon} />
                        }
                        secondary={
                          <Box pl={leftPadding}>
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
