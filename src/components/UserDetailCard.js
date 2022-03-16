import React from "react";
import "./UserDetail.css";

import { Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import User from "../models/user";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ChangeAddress from "./ChangeAddress";
import firestore from "../data/firebase.config";

export default function UserDetailCard({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openChangeDialogState, setOpenChangeDialogState] =
    React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const openDialog = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeDialog = () => {
    setAnchorEl(null);
  };

  const openChangeDialog = () => {
    closeDialog();
    setOpenChangeDialogState(true);
  };

  const closeChangeDialog = (obj) => {
    if (obj) {
      saveAdressChanges(obj.street, obj.zip, obj.city);
    } else {
      setOpenChangeDialogState(false);
    }
  };

  const saveAdressChanges = (street, zip, city) => {
    setLoading(true);
    firestore
      .collection("users")
      .doc(user.id)
      .update({
        street: street,
        zip: zip,
        city: city,
      })
      .then(() => {
        setLoading(false);
        setOpenChangeDialogState(false);
      });
  };
  return (
    <Card sx={{ width: 240 }}>
      <CardContent sx={{ position: "relative" }}>
        <IconButton
          id="basic-button"
          sx={{ position: "absolute", right: "8px", top: "8px" }}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={openDialog}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={closeDialog}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={(closeDialog, openChangeDialog)}>
            bearbeiten
          </MenuItem>
        </Menu>
        <Typography gutterBottom variant="h5" component="div">
          Address
        </Typography>
        <Typography variant="body2" component="div">
          {user.street}
        </Typography>
        <Typography variant="body2" component="div">
          {user.zip + " " + user.street}
        </Typography>
      </CardContent>
      <ChangeAddress
        open={openChangeDialogState}
        handleClose={closeChangeDialog}
        user={user}
        loading={loading}
      ></ChangeAddress>
    </Card>
  );
}
