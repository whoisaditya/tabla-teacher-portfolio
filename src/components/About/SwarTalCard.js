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
              <AiOutlineArrowRight />  Shri. Vinayak Gurav has started Swar Tal Music Academy, Chandan Nagar, Pune in 2009.
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> This Academy every year arranges the Swar Tal Sangeet Mahostav.
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> He has groomed many students at beginner and expert level majorly for tabla. &nbsp; Students are also guided for singing.
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> His music academy organizes various programs which not only provides platform for his students but also gives an opportunity to upcoming artists and students.
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> The Music syllabus of this academy follows Akhil Bharatiya Gandharva Mahavidyalaya, Mumbai Centre.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
