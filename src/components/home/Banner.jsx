import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Container, Grid } from "@mui/material";
const useStyles = makeStyles({
  root: {
    background: "rgb(82, 69, 130)",
    backgroundImage: 'url("./assets/images/bannerBG.png")',
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "50px!important"
  }
});
const Banner = () => {
  const classes = useStyles();
  console.log(classes.root);
  return (
    <div className={classes.root}>
      <Container style={{ marginTop: "100px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              Join us in a magic NFT advanture
            </Grid>
            <Grid item xs={7}>
              <img src="./assets/images/nft (2).png" alt="nft" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Banner;
