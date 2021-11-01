import { Card, CardContent, Typography } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";

const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: 20px;
`;

const FeaturedInfo = () => {
  return (
    <Container>
      <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Col xs={12} lg={4} className="mb-3">
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Revenue</Typography>
              <div className="d-flex">
                <FeaturedMoney>$ 2,8383 </FeaturedMoney>
                <MoneyRate>
                  <span>-11.83</span>{" "}
                  <ArrowDownward className="text-danger ms-2" />
                </MoneyRate>
              </div>
              <span style={{ fontSize: "18px" }} className="text-secondary">
                Compare to last month
              </span>
            </CardContent>
          </Card>
        </Col>
        <Col xs={12} lg={4} className="mb-3">
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Sales</Typography>
              <div className="d-flex">
                <FeaturedMoney>$ 1,8383 </FeaturedMoney>
                <MoneyRate>
                  <span>-1.83</span>{" "}
                  <ArrowDownward className="text-danger ms-2" />
                </MoneyRate>
              </div>
              <span style={{ fontSize: "18px" }} className="text-secondary">
                Compare to last month
              </span>
            </CardContent>
          </Card>
        </Col>
        <Col xs={12} lg={4} className="mb-3">
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Cost</Typography>
              <div className="d-flex">
                <FeaturedMoney>$ 4,8383 </FeaturedMoney>
                <MoneyRate>
                  <span>-21.83</span>{" "}
                  <ArrowUpward className="text-success ms-2" />
                </MoneyRate>
              </div>
              <span style={{ fontSize: "18px" }} className="text-secondary">
                Compare to last month
              </span>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedInfo;
