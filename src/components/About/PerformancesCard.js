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
              <AiOutlineArrowRight /> Shri.Vinayak Gurav has played tabla along very renouned vocalist Pt.Jaithirth Mevundi, Pt.Shounk Abhisheki, Pt. Bholanath Mishra,Dr.Ravindra Ghangurde, Pt.Yadavraj Fad. Pt.Rajendra Kandalgaonkar, Pt.Krushna Bhongane, Pt.Sanjay Garod, Saniya Patankar, Sulekha Bhat, Shruti Bajarbarua, Asavari kelkar, Geeta Heblikar. Veena Mardor.Rindana Rahasya.
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> He has worked with Playback singer savane Ravindra, Nirali Kartik Antra Nandy, Anjali and Nandini Gaikwad
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> He has accompanied with Santoor players Takahero Arai from Japan, Pt.Dhananjay Daithankar from Pune.
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> He has played with Renowned Flute players Pt.Rajendra Kulkarni, Varad khatapurkar, Nash Nobert from USA, P.Himanshu Nanda.
              (2016)
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> He has accompanied with Renowned Sitar players Ustad. Rais Balekha, Nikhil Patwardhan.
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> AHe has Played with Renowned Sarood Players Abhishek Borkar. Praashekh Borkar, Anupam Joshi.
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> He has accompanied with Shehnai players PL.Pramod Gaikwad and Pt.Shailesh Bhagwat, Vinayak Hegde.
            </li>
            <br></br>
            <li className="about-activity">
              <AiOutlineArrowRight /> He has played Solo and accompanied artists in various cities like Pune, Mumbai, Banglore, Chennai, Delhi, Kolhapur, Sangli, Satara, Bhopal, Humnabad, Nashik, Ratanagiri, Karvar, Goa.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
