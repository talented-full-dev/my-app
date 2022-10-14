import React from "react";
import { Container } from "@mui/material";
import Banner from "../components/home/Banner.jsx";
import Advertisement from "../components/home/Advertisement.jsx";
import Team from "../components/home/Team.jsx";
const Home = () => {
  return (
    <Container>
      <Banner />
      <Advertisement />
      <Team />
    </Container>
  );
};

export default Home;
