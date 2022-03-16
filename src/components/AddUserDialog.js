import * as React from "react";
import "./AddUserDialog.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import { DatePicker } from "@material-ui/pickers";
import { LinearProgress, stepButtonClasses } from "@mui/material";

export default function AddUserDialog({ open, handleClose, loading }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [city, setCity] = React.useState("");
  const [email, setEmail] = React.useState("");

  const resetData = () => {
    setBirthdate("");
    setCity("");
    setFirstName("");
    setLastName("");
    setStreet("");
    setZip("");
  };

  return (
    <Dialog open={open} onClose={() => handleClose()}>
      {loading ? (
        <div className="dialog-container">
          <LinearProgress />
        </div>
      ) : (
        ""
      )}

      <DialogTitle sx={{ fontWeight: "bold" }}>Add User</DialogTitle>
      <DialogContent>
        <div>
          <TextField
            id="outlined-basic"
            label="Vorname"
            variant="outlined"
            margin="normal"
            sx={{ mr: 2 }}
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            disabled={loading}
          />
          <TextField
            id="outlined-basic"
            label="Nachname"
            variant="outlined"
            margin="normal"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            disabled={loading}
          />
          <TextField
            id="outlined-basic"
            label="eMail"
            variant="outlined"
            margin="normal"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={loading}
          />
          <TextField
            id="outlined-basic"
            label="Geburtstag"
            variant="outlined"
            margin="normal"
            fullWidth
            value={birthdate}
            onChange={(event) => setBirthdate(event.target.value)}
            disabled={loading}
          />

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
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => handleClose()} disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            let id = Math.random();
            handleClose({
              id,
              firstName,
              lastName,
              email,
              birthdate,
              street,
              zip,
              city,
            });
            resetData();
          }}
          disabled={loading}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
