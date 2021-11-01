import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SingleUser = ({ singleUser }) => {
  console.log(singleUser);
  let user = null;
  if (singleUser) {
    user = (
      <Card>
        <CardContent>
          <div className="d-flex align-items-center">
            <img
              src={singleUser.avatar}
              alt="user"
              style={{ height: "60px", width: "60px", borderRadius: "50%" }}
            />
            <Typography variant="h6" className="fw-bold ms-3">
              {singleUser.username}
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <Container>
          <Row>
            <Col lg={4}>{user}</Col>
            <Col lg={8}>
              <Card>
                <CardContent>userform</CardContent>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SingleUser;
