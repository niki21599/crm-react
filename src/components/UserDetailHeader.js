import React from "react";
import { Card } from "@mui/material";

export default function UserDetailHeader({ user }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: "#ff5b27",
        minHeight: 300,
        color: "white",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <img src="/img/avatar.png" className="profile-pic" />
      <div className="main-info">
        <h2>{user.firstName + " " + user.lastName}</h2>

        <div>{user.email}</div>
      </div>
    </Card>
  );
}
