import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwarTalCard from "./SwarTalCard";
import AwardsCard from "./AwardsCard";
import PerformancesCard from "./PerformancesCard";

import musicArtist from "../../Assets/about.png";
import musicAward from "../../Assets/musicAwards.png";
import musicPerformances from "../../Assets/musicPerformance.png";

import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              data-aos="fade-right"
            >
              <span className="primary-header">Swar Tal Music Academy</span>
            </h1>
            <div data-aos="fade-up">
              <SwarTalCard />
            </div>
          </Col>
          <Col
            md={4}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={musicArtist}
              alt="about"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={4}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={musicAward}
              alt="about"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              data-aos="fade-right"
            >
              <span className="primary-header">Awards</span>
            </h1>
            <div data-aos="fade-up">
              <AwardsCard />
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              data-aos="fade-right"
            >
              <span className="primary-header">Notable Performances</span>
            </h1>
            <div data-aos="fade-up">
              <PerformancesCard />
            </div>
          </Col>
          {/* <Col
            md={3}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={musicPerformances}
              alt="about"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col> */}
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
