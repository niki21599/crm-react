import * as React from "react";
import Box from "@mui/material/Box";
import "./TemporaryDrawer.css";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import { Link } from "react-router-dom";

export default function TemporaryDrawer({ toggleDrawer }) {
  let menuPoints = [
    {
      text: "DashBoard",
      iconComponent: <DashboardIcon />,
      linkTo: "dashboard",
    },
    {
      text: "User",
      iconComponent: <PersonOutlineIcon />,
      linkTo: "user",
    },
  ];

  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="logo">
        <img src="/img/logo.png" />
      </div>
      <Divider />
      <List>
        {menuPoints.map((menuPoint, index) => (
          <ListItem
            button
            component={Link}
            to={menuPoint.linkTo}
            key={menuPoint.text}
          >
            <ListItemIcon> {menuPoint.iconComponent} </ListItemIcon>
            <ListItemText primary={menuPoint.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
