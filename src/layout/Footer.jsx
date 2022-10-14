import React from "react";
import { Grid, Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Twitter,
  Instagram,
  Telegram,
  LinkedIn,
  Facebook,
  YouTube
} from "@mui/icons-material";
const useStyles = makeStyles({
  root: {
    background: "rgb(100, 80, 150)",
    padding: "20px"
  },
  iconSz: {
    width: "40px!important",
    height: "40px!important"
  }
});
const Footer = () => {
  const classes = useStyles();
  const iconArr = [
    { name: Twitter },
    { name: Instagram },
    { name: Telegram },
    { name: LinkedIn },
    { name: Facebook },
    { name: YouTube }
  ];
  return (
    <Grid className={classes.root}>
      <Box>
        <img
          src="./assets/images/logo (2).png"
          style={{ width: "145px", height: "130px" }}
          alt="logo"
        />
      </Box>
      <Box>
        {iconArr.map((item, key) => (
          <IconButton color="warning" arial-label={item.name} key={key}>
            <item.name className={classes.iconSz} />
          </IconButton>
        ))}
      </Box>
    </Grid>
  );
};

export default Footer;
