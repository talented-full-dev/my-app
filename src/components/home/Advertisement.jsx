import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
const useStyles = makeStyles({
  advTxt: {
    color: "white",
    textAlign: "start",
    display: "flex!important",
    flexDirection: "column!important"
  }
});

export default function Advertisement() {
  const classes = useStyles();
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        backgroundColor: "rgb(43,44,64)",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "5px 5px 5px #aaaaaa"
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <Grid item xs={12} sm={7} className={classes.advTxt}>
          <Typography variant="p" style={{ fontSize: "20px", color: "yellow" }}>
            COMING SOON ON ETHEREUM
          </Typography>
          <br />
          <Typography
            variant="p"
            style={{ fontSize: "40px", fontWeight: "bold" }}
          >
            GEN 2: NEW!
          </Typography>
          <br />
          <Typography variant="p" style={{ fontSize: "17px" }}>
            Experiment what fashion can be without the boundaries of physics.
            Expression must transcend feasibility. This is a fearless attempt to
            reach what wasn't possible. What new possibilities can be unlocked
            when fashion meets the metaverse?
          </Typography>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IconButton
              style={{ color: "white", width: "100px", height: "100px" }}
            >
              <SmartDisplayIcon style={{ width: "60px", height: "60px" }} />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img
            src="./assets/images/nft (8).png"
            alt="advertisement"
            width="300px"
            height="300px"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
