import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Avatar,
} from "@material-ui/core";
import React from "react";
import { Badge } from "react-bootstrap";
import { tableData } from "../../DummyData";

const WidgeLg = () => {
  return (
    <>
      <TableContainer component={Paper} className="mb-3">
        <Typography variant="h5" className="fw-bold p-3">
          Latest Transactions
        </Typography>
        <Table arial-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="fw-bold" style={{ fontSize: "16px" }}>
                Customer
              </TableCell>
              <TableCell
                className="fw-bold"
                style={{ fontSize: "16px" }}
                align="left"
              >
                Date
              </TableCell>
              <TableCell
                className="fw-bold"
                style={{ fontSize: "16px" }}
                align="left"
              >
                Amount
              </TableCell>
              <TableCell
                className="fw-bold"
                style={{ fontSize: "16px" }}
                align="left"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((data, index) => (
              <TableRow key={index}>
                <TableCell align="left" className="d-flex align-items-center">
                  <Avatar src="/broken-image.jpg" />
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      marginLeft: "10px",
                    }}
                  >
                    {data.user}
                  </span>
                </TableCell>
                <TableCell align="right">{data.date}</TableCell>
                <TableCell align="right">{"$ " + data.amount}</TableCell>
                <TableCell align="right">
                  <Badge bg={data.status.color} style={{ fontSize: "13px" }}>
                    {data.status.cond}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default WidgeLg;
