import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <span>
            Redesigned and Edited by{" "}
            <a href="https://www.linkedin.com/in/mitra-aditya/" className="primary-header">
              Aditya Mitra.
            </a>
          </span>
        </Col>
      </Row>
      <Row>
        <span>
          Originally Designed and Developed by{" "}
          <a href="https://www.rahuljha.info/" className="primary-header">
            Rahul Jha
          </a>
        </span>
      </Row>
    </Container>
  );
}

export default Footer;
