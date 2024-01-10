import React from "react";
import Card from "react-bootstrap/Card";

function PressCards(props) {
  return (
    <Card className="press-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
    
  );
}
export default PressCards;
