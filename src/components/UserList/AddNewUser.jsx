import React from "react";
import { useHistory } from "react-router";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  FormControl,
  TextField,
  IconButton,
  Button,
  Container,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { PhotoCamera } from "@material-ui/icons";
import { Col, Row } from "react-bootstrap";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddNewUser = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [img, setImg] = React.useState("");
  const classes = useStyles();

  const [status, setStatus] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setStatus(event.target.value);
  };

  const handleSelectClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const history = useHistory();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      username: name,
      email: email,
      number: number,
      address: address,
      id: 11,
      avatar: img,
      status: status,
    };

    console.log(userData);

    setSnackOpen(true);
    setTimeout(() => {
      history.push("/");
    }, 2000);
  };

  return (
    <div style={{ marginTop: "30px", width: "600px" }}>
      <Container>
        <Card>
          <CardContent>
            <div className="d-flex justify-content-between">
              <Typography variant="h5">Add New User</Typography>
            </div>
            <Divider className="my-3" />
            <form onSubmit={handleSubmit}>
              <Row>
                <Col lg={6}>
                  <FormControl className="mb-4">
                    <input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      onChange={e => setImg(e.target.value)}
                      style={{ display: "none" }}
                    />
                    <label htmlFor="icon-button-file">
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </FormControl>
                  <br />
                  <FormControl fullWidth={true} className="mb-4">
                    <TextField
                      onChange={e => setName(e.target.value)}
                      placeholder="Name"
                      type="text"
                    />
                  </FormControl>
                  <br />
                  <FormControl fullWidth={true} className="mb-4">
                    <TextField
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Email"
                      type="email"
                    />
                  </FormControl>
                </Col>
                <Col lg={6}>
                  <FormControl fullWidth={true} className="mb-4">
                    <TextField
                      onChange={e => setNumber(e.target.value)}
                      placeholder="Number"
                      type="number"
                    />
                  </FormControl>
                  <br />
                  <FormControl fullWidth={true} className="mb-3">
                    <TextField
                      onChange={e => setAddress(e.target.value)}
                      placeholder="Address"
                      type="text"
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open}
                      onClose={handleSelectClose}
                      onOpen={handleOpen}
                      value={status}
                      onChange={handleChange}
                    >
                      <MenuItem value="active">Active</MenuItem>
                      <MenuItem value="offline">Offline</MenuItem>
                    </Select>
                  </FormControl>
                </Col>
              </Row>
              <Button variant="contained" color="primary" type="submit">
                Add
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackOpen}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          New User Added
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddNewUser;
