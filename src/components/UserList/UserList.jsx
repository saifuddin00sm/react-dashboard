import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function DataTable({ columns, data, open, handleClose }) {
  return (
    <Container>
      <div
        style={{
          height: 500,
          width: "100%",
          backgroundColor: "#ffff",
          marginTop: "30px",
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          User removed!
        </Alert>
      </Snackbar>
    </Container>
  );
}
