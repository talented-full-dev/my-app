import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Button } from "@mui/material";
const useStyles = makeStyles({
  root: {
    backgroundImage: 'url("./assets/images/star (4).png")',
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "50px!important",
    marginTop: "150px!important"
  },
  playBtn: {
    background: "rgb(191,90,244)!important",
    color: "white!important",
    padding: "10px 40px!important",
    borderRadius: "15px!important"
  }
});
const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{ textAlign: "start" }}>
          <Grid item xs={5} style={{ marginTop: "100px" }}>
            <span
              style={{
                color: "rgb(191,90,244)",
                fontSize: "3rem",
                fontWeight: "bold"
              }}
            >
              Join us in a magic NFT advanture
            </span>
            <p
              style={{
                color: "white",
                fontSize: "1.5rem"
              }}
            >
              This will literally be the best game WAX has ever seen because
              birbs are working on it.
            </p>
            <Button className={classes.playBtn}>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold"
                }}
              >
                Play
              </span>
            </Button>
          </Grid>
          <Grid
            item
            xs={7}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src="./assets/images/nft (2).png" alt="nft" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Banner;
