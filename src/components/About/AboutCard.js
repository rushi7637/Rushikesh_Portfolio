import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rushikesh Patil </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am pursing my Btech At MIT Academy of enginnering in ENTC DEPARTMENT
            <br />
            <br />
            I develop wesites.
            <br />
            <br/>
           
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Your limit is your imagination!"{" "}
          </p>
          <footer className="blockquote-footer">Rushikesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
