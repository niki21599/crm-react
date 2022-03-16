import React, { useEffect } from "react";
import "./UserDetail.css";
import { useParams } from "react-router-dom";
import firestore from "../data/firebase.config";
import User from "../models/user";
import Card from "@mui/material/Card";
import UserDetailHeader from "./UserDetailHeader";
import UserDetailCard from "./UserDetailCard";

export default function UserDetail() {
  let { userId } = useParams();
  let [user, setUser] = React.useState(new User());

  useEffect(() => {
    firestore
      .collection("users")
      .doc(userId)
      .get()
      .then((snapshot) => {
        user = new User(snapshot.data());
        setUser(user);
        console.log(user);
      });
  }, []);

  return (
    <div>
      <div>
        <UserDetailHeader user={user} />
      </div>
      <div className="second-container">
        <UserDetailCard user={user} />
      </div>
    </div>
  );
}
