import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> Brief Description </span>
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              {/* <br />
              I'm a <i className="primary-header">
                Self-Taught Web Developer
              </i>{" "}
              who loves solving problems and building Websites.
              <br />
              <br />I am passionate about{" "}
              <i className="primary-header">technologies</i> and love to learn
              new things.
              <br />
              <br />I am more interested in building new
              <i>
                <i className="primary-header">Web Technologies and Products.</i>
              </i>
              <br />
              <br />I always apply my experience in developing products with{" "}
              <i className="primary-header">Node.js</i> and Modern Javascript
              Library and Framework like
              <i className="primary-header"> React.js.</i>
              <br />
              <br />
              Currently expanding my portfolio by building more{" "}
              <i className="primary-header">projects </i>projects that I can add
              here. */}

            Shri. Vinayak Gurav is a tabla artist in Pune, India. He is Playing tabla from past twenty years. He has completed Table Visharad and Tabla Alankar from Gandharv Mahavidyalay, Mumbai in mentorship of his Gurus Pt. Manmohan Khumbhare and Pt.Anand sidhaye.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">Social Media </span>
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@vinayakguravtablaartist4231"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="youtube"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sachingurav2010@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vinayakrgurav/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
