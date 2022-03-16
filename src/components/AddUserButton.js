import { IconButton } from "@mui/material";
import React from "react";
import "./AddUserButton.css";
import { Add } from "@mui/icons-material";

import { Tooltip } from "@mui/material";
import AddUserDialog from "./AddUserDialog";
import User from "../models/user";

// Imports aus Video
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

import firestore from "../data/firebase.config";

export default function AddUserButton() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (obj) => {
    if (obj) {
      let user = new User(obj);
      //saveUser also closes the dialog
      saveUser(user);
    } else {
      setOpen(false);
    }
  };

  const saveUser = (user) => {
    setLoading(true);
    let pushedRef = firestore
      .collection("users")
      .add(user.toJSON())
      .then((docRef) => {
        setLoading(false);
        setOpen(false);
        console.log(docRef.id);
        firestore.collection("users").doc(docRef.id).update({
          id: docRef.id,
        });
      });
  };

  return (
    <div>
      <div className="addButtonContainer">
        <Tooltip title="Add User">
          <IconButton
            size="large"
            variant="contained"
            color="default"
            sx={{ color: "white" }}
            onClick={handleClickOpen}
          >
            <Add> </Add>
          </IconButton>
        </Tooltip>
      </div>
      <AddUserDialog open={open} handleClose={handleClose} loading={loading} />
    </div>
  );
}

// const firebaseConfig = {
//   apiKey: "AIzaSyCprK9urSi6e-ARVqGye9TGCM1631NTVdE",

//   authDomain: "simple-crm-react.firebaseapp.com",

//   projectId: "simple-crm-react",

//   storageBucket: "simple-crm-react.appspot.com",

//   messagingSenderId: "187665634057",

//   appId: "1:187665634057:web:efe81807a87ce1bd9cf9d8",

//   measurementId: "G-DQQ09MMRY0",
// };
