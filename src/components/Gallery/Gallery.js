import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import GalleryCard from "./GalleryCards";

import R1C1 from "../../Assets/GalleryImages/R1C1.png";
import R1C2 from "../../Assets/GalleryImages/R1C2.png";
import R1C3 from "../../Assets/GalleryImages/R1C3.png";

import "./gallery.css";

function Gallery() {
  return (
    <Container fluid className="gallery-section">
      <Container>
        <h1 className="gallery-heading">
          A few <strong className="Fluorescent-Blue">snapshots </strong> from recent events
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="gallery-card">
            <GalleryCard
              imgPath={R1C1}
            />
          </Col>

          <Col md={6} lg={4} className="gallery-card">
            <GalleryCard
              imgPath={R1C2}
            />
          </Col>
          <Col md={6} lg={4} className="gallery-card">
            <GalleryCard
              imgPath={R1C3}
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Gallery;
