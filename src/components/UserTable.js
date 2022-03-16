import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import User from "../models/user";
import { getAutoHeightDuration } from "@mui/material/styles/createTransitions";
import firestore from "../data/firebase.config";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default class UserTable extends React.Component {
  columns = [
    { field: "id", headerName: "ID", minWidth: 70, hide: true },
    { field: "firstName", headerName: "First name", minWidth: 130 },
    { field: "lastName", headerName: "Last name", minWidth: 130 },
    { field: "birthdate", headerName: "Birthdate", minWidth: 130 },
    { field: "street", headerName: "Street + number", minWidth: 200 },
    { field: "zip", headerName: "zip Code", minWidth: 130 },
    { field: "city", headerName: "City", minWidth: 130 },
    {
      field: "Mehr Info",
      minWidth: 110,
      renderCell: (cellValues) => {
        return (
          <Link to={cellValues.id}>
            <Button variant="contained">Details</Button>
          </Link>
        );
      },
    },
  ];

  state = {};

  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div>
        <DataGrid
          autoHeight
          rows={this.state.users}
          columns={this.columns}
          onRowClick={this.openDetail}
        />
      </div>
    );
  }

  openDetail(user) {
    let userId = user.id;
  }

  z;

  getUsers = async () => {
    const snapshot = await firestore.collection("users").get();

    let users = [];

    snapshot.docChanges().forEach((change) => {
      users.push(change.doc.data());
    });

    this.setState({ users });
  };
}
