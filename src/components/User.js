import React from "react";
import "./User.css";
import AddUserButton from "./AddUserButton";
import UserTable from "./UserTable";

export default function User() {
  return (
    <div>
      <AddUserButton />
      <UserTable />
    </div>
  );
}
