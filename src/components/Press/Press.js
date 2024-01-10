import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import PressCard from "./PressCards";

import R1C1 from "../../Assets/PressImages/R1C1.png";
import R1C2 from "../../Assets/PressImages/R1C2.png";
import R1C3 from "../../Assets/PressImages/R1C3.png";

import R2C1 from "../../Assets/PressImages/R2C1.png";

import "./press.css";

function press() {
  return (
    <Container fluid className="press-section">
      <Container>
        <h1 className="press-heading">
          A few <strong className="Fluorescent-Blue">snapshots </strong> from newspapers
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="press-card">
            <PressCard
              imgPath={R1C1}
            />
          </Col>

          <Col md={6} lg={4} className="press-card">
            <PressCard
              imgPath={R1C2}
            />
          </Col>
          <Col md={6} lg={4} className="press-card">
            <PressCard
              imgPath={R1C3}
            />
          </Col>
        </Row>
        <Row>
        <Col md={6} lg={4} className="press-card">
            <PressCard
              imgPath={R2C1}
            />
          </Col>
          {/* <Col md={6} lg={4} className="press-card">
            <PressCard
              imgPath={R2C2}
            />
          </Col> */}
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default press;
