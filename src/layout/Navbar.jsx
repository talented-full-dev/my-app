// file name: Navbar.jsx
// author: Supernova
// date: 01/08/2022
// description: Total navbar file.
import * as React from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Button,
  MenuItem,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useScrollTrigger } from "@mui/material";

const useStyles = makeStyles({
  root: {
    position: "fixed !important",
    top: "0px",
    zIndex: 9999,
    color: "white",
    padding: "0px 80px",
    boxShadow: "none !important",
    transition: "1.4s"
  },

  logotxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: "2.2rem",
    paddingLeft: "10px"
  }
});

const pages = ["Team", "Roadmap", "Whitepaper"];

const Navbar = props => {
  function ChangeColorOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined
    });

    return React.cloneElement(children, {
      style: { background: trigger ? "grey" : "transparent" }
    });
  }
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <ChangeColorOnScroll {...props}>
      <AppBar position="static" className={classes.root}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              width="100"
              height="100"
              src="./assets/images/logo (3).png"
              alt="logo"
            />
            <span className={classes.logotxt}>MagicWorld</span>
          </div>
          <div className="flex">
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                {pages.map(page => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    style={{
                      backgroundColor: "white!important",
                      color: "white!important"
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map(page => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: "white",
                    display: "block",
                    fontSize: "16px",
                    fontWeight: "bold"
                  }}
                  className={classes.menuitems}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </ChangeColorOnScroll>
  );
};
export default Navbar;
