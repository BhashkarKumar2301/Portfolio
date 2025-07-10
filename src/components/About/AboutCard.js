import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhashkar Kumar Jha </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am a recent graduate and an enthusiastic software developer eager to begin my professional journey.
            Let me know the tone you'd prefer — professional, friendly, or confident — and I can tailor it further.
            <br />
            I have completed Bachelor of Engineering (B.E.) in Computer Science From Chandigarh University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't comment bad code, rewrite it"{" "}
          </p>
          <footer className="blockquote-footer">Bhashkar Kumar Jha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
