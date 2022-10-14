import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MemberCarousel from "./MemberCarousel.jsx";
const useStyles = makeStyles({
  title: {
    color: "white",
    textShadow: "2px 2px 4px white",
    fontSize: "30px!important",
    fontWeight: "bold"
  }
});
const Team = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        textAlign: "start",
        paddingTop: "30px",
        background: "url('./assets/images/star (9).png')"
      }}
    >
      <Typography className={classes.title}>Contributors</Typography>
      <MemberCarousel />
    </div>
  );
};

export default Team;
