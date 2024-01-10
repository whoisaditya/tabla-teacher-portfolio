import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import GalleryCard from "./GalleryCards";

import R1C1 from "../../Assets/GalleryImages/R1C1.png";
import R1C2 from "../../Assets/GalleryImages/R1C2.png";
import R1C3 from "../../Assets/GalleryImages/R1C3.png";

import R2C1 from "../../Assets/GalleryImages/R2C1.png";
import R2C2 from "../../Assets/GalleryImages/R2C2.png";
import R2C3 from "../../Assets/GalleryImages/R2C3.png";

import R3C1 from "../../Assets/GalleryImages/R3C1.png";

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
              imgPath={R2C2}
              description="With Viraj Joshi"
            />
          </Col>
          

          <Col md={6} lg={4} className="gallery-card">
            <GalleryCard
              imgPath={R1C2}
              description="With Pandit Suresh Pataki"
            />
          </Col>
          <Col md={6} lg={4} className="gallery-card">
            <GalleryCard
              imgPath={R1C3}
              description="With Madhuvanti Borgaonkar"
            />
          </Col>
        </Row>
        <Row>
        <Col md={6} lg={4} className="gallery-card">
            <GalleryCard
              imgPath={R2C1}
              description="With famous playback singer Anjali and Nandini Gaikwad"
            />
          </Col>
          <Col md={6} lg={4} className="gallery-card">
            <GalleryCard
              imgPath={R1C1}
              description="With Pt. Rajendra kandalgavkar"
            />
          </Col>
      
          <Col md={6} lg={4} className="gallery-card">
            <GalleryCard
              imgPath={R2C3}
              description="With Satyavisha Mukharji from Kolkata"
            />
          </Col>
        </Row>
        <Row>
        <Col md={6} lg={4} className="gallery-card">
            <GalleryCard
              imgPath={R3C1}
              description="At Panchak Tabla Shehnai Vocal Harmonium and Pakhavaj"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Gallery;
