import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> SPt.Appasaheb Jalgaonkar Sangeet Mohatsav
              Guarav Puraskar (2014).
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> TGlobal Hunt for the best Indian classical
              performer at Whiz classical (2016).
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> Samaj Shiromani Award at Mumbai (2016)
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> Gurav Samaj KalaGaurav puraskar at Sangli
              (2016)
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> Bharatanatya utsav at Bharatiya Sangeetha
              Vidyalaya, Bangalore. (2018)
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> Akhil Bharatiya Marathi Natya Samelan,
              Organized by Pimpri Chinchwad Muncipal Corporation (2018)
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> SNBP RISING STAR, SNBP Group of Institute,
              Pune.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
