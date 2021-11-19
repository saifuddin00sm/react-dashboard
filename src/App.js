import React, { useState } from "react";
import { rows } from "./DummyData";
import { Route, Switch } from "react-router-dom";
import UserList from "./components/UserList/UserList";
import Topbar from "./components/Topbar/Topbar";
import { Col, Row } from "react-bootstrap";
import Home from "./components/Pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import SingleUser from "./components/UserList/SingleUser";
import { IconButton, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import AddNewUser from "./components/UserList/AddNewUser";
import Product from "./components/Product/Product";

function App() {
  const [data, setData] = useState(rows);
  const [open, setOpen] = useState(false);
  const [singleUser, setSingleUser] = useState({});

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleDel = id => {
    const updatedData = data.filter(elem => elem.id !== id);
    setData(updatedData);
    if (data !== updatedData) {
      setOpen(true);
    }
  };

  const getUserData = user => {
    setSingleUser(user);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 140,
      renderCell: params => (
        <div>
          <img
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
            src={params.row.avatar}
            alt="userimg"
          />
          <span>{params.row.username}</span>
        </div>
      ),
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 120,
      editable: true,
    },
    {
      field: "transactions",
      headerName: "transaction Valume",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
    },

    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: params => (
        <>
          <Link to={"/user/" + params.row.id} exact>
            <IconButton
              onClick={() => getUserData(params.row)}
              color="primary"
              size="small"
            >
              <Tooltip title="Edit" placement="top-start">
                <EditIcon fontSize="small" />
              </Tooltip>
            </IconButton>
          </Link>
          <IconButton
            color="secondary"
            size="small"
            onClick={() => handleDel(params.row.id)}
          >
            <Tooltip title="Delete" placement="top-start">
              <DeleteIcon fontSize="small" />
            </Tooltip>
          </IconButton>
        </>
      ),
      eiditable: true,
    },
  ];

  return (
    <>
      <Topbar />
      <Row>
        <Col xs={12} lg={3}>
          <Sidebar />
        </Col>
        <Col xs={12} lg={9}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/userlist"
              render={() => (
                <UserList
                  data={data}
                  columns={columns}
                  open={open}
                  handleClose={handleClose}
                />
              )}
              exact
            />
            <Route
              path="/user/:userid"
              render={() => (
                <SingleUser
                  singleUser={singleUser}
                  setSingleUser={setSingleUser}
                  data={data}
                  setData={setData}
                />
              )}
              exact
            />
            <Route
              path="/addnewuser"
              render={() => <AddNewUser data={data} setData={setData} />}
              exact
            />

            <Route path="/product" component={Product} exact />
          </Switch>
        </Col>
      </Row>
    </>
  );
}

export default App;
