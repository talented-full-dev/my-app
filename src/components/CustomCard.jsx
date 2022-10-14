import React from "react";
import { Card } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  color: theme.palette.success.main,
  "& .MuiCard-root": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`
    }
  }
}));

export default function CustomCard() {
  console.log("sdfasdfasdf");
  return <StyledCard />;
}
