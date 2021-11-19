import {
  Card,
  CardContent,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SingleUser = ({ singleUser, setSingleUser, data, setData }) => {
  const [name, setName] = React.useState(singleUser.username);
  const [email, setEmail] = React.useState(singleUser.email);
  const [phone, setPhone] = React.useState(singleUser.phone);
  const [address, setAddress] = React.useState(singleUser.address);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const history = useHistory();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const obj = {
      ...singleUser,
      username: name,
      email: email,
      phone: phone,
      address: address,
    };
    setSingleUser(obj);
    // changing main array
    const copyData = [...data];
    Object.assign(
      copyData[copyData.findIndex(el => el.id === singleUser.id)],
      obj
    );
    // showing snackbar
    setSnackOpen(true);
    // timeout to leave the edit page
    setTimeout(() => {
      history.push("/userlist");
    }, 3000);
  };

  const createUser = () => {
    history.push("/addnewuser");
  };

  let user = null;

  if (singleUser) {
    user = (
      <Card>
        <CardContent>
          <div className="d-flex align-items-center mb-4">
            <img
              src={singleUser.avatar}
              alt="user"
              style={{ height: "60px", width: "60px", borderRadius: "50%" }}
            />
            <Typography variant="h6" className="fw-bold ms-3 text-capitalize">
              {singleUser.username}
            </Typography>
          </div>
          <div className="mb-3">
            <span className="text-secondary">Account details</span>
            <Divider />
          </div>

          <List>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={singleUser.email} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary={singleUser.phone} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={singleUser.address} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ImportExportIcon />
              </ListItemIcon>
              <ListItemText primary={singleUser.transactions} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {singleUser.status === "active" ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={singleUser.status} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    );
  }
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <Container>
          <Row>
            <Col xs={6} lg={4}>
              {user}
            </Col>
            <Col xs={6} lg={8}>
              <Card>
                <CardContent>
                  <div className="d-flex justify-content-between">
                    <Typography variant="h5">Edit details</Typography>
                    <Button
                      onClick={createUser}
                      variant="outlined"
                      color="primary"
                    >
                      create
                    </Button>
                  </div>
                  <Divider className="my-3" />
                  <form onSubmit={handleSubmit}>
                    <FormControl fullWidth={true} className="mb-4">
                      <TextField
                        onChange={e => setName(e.target.value)}
                        value={name}
                        type="text"
                      />
                    </FormControl>
                    <FormControl fullWidth={true} className="mb-4">
                      <TextField
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email"
                      />
                    </FormControl>
                    <FormControl fullWidth={true} className="mb-4">
                      <TextField
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                        type="number"
                      />
                    </FormControl>
                    <FormControl fullWidth={true} className="mb-3">
                      <TextField
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                        type="text"
                      />
                    </FormControl>
                    <Button variant="contained" color="primary" type="submit">
                      Change
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* snackbar */}

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackOpen}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          User Updated!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SingleUser;
