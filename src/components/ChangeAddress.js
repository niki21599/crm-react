import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./AddUserDialog.css";
import { LinearProgress } from "@mui/material";

export default function ChangeAddress({ open, handleClose, user, loading }) {
  const [street, setStreet] = React.useState(user.street);
  const [zip, setZip] = React.useState(user.zip);
  const [city, setCity] = React.useState(user.city);
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      {loading ? (
        <div className="dialog-container">
          <LinearProgress />
        </div>
      ) : (
        ""
      )}
      <DialogTitle>Change Address</DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-basic"
          label="Straße + Hausnummer"
          variant="outlined"
          margin="normal"
          fullWidth
          value={street}
          onChange={(event) => setStreet(event.target.value)}
          disabled={loading}
        />
        <TextField
          id="outlined-basic"
          label="PLZ"
          variant="outlined"
          margin="normal"
          sx={{ mr: 2 }}
          value={zip}
          onChange={(event) => setZip(event.target.value)}
          disabled={loading}
        />
        <TextField
          id="outlined-basic"
          label="Stadt"
          variant="outlined"
          margin="normal"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          disabled={loading}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleClose();
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleClose({
              street: street,
              zip: zip,
              city: city,
            });
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
