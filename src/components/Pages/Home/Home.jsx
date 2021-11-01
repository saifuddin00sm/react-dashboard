import React from "react";
import Charts from "../Charts/Charts";
import FeaturedInfo from "../FeaturedInfo/FeaturedInfo";
import { userData } from "../../../DummyData";
import { Col, Container, Row } from "react-bootstrap";
import WidgeSm from "../../WidgeSm/WidgeSm";
import WidgeLg from "../../WidgeLg/WidgeLg";

const Home = () => {
  return (
    <div>
      <FeaturedInfo />
      <Charts
        data={userData}
        title="User Analytics"
        grid
        datakey="Active Users"
      />

      <Container>
        <Row>
          <Col sm={12} lg={5}>
            <WidgeSm />
          </Col>
          <Col sm={12} lg={7}>
            <WidgeLg />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
