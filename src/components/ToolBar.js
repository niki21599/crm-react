import React, { Component } from "react";
import "./ToolBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import TemporaryDrawer from "./TemporaryDrawer";

export default function ToolBar() {
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (open) => () => {
    setState({ ...state, left: open });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <React.Fragment>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"left"}
              open={state.left}
              onClose={toggleDrawer(false)}
            >
              <TemporaryDrawer toggleDrawer={toggleDrawer} />
            </Drawer>
          </React.Fragment>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple CRM
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
