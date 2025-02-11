import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi <span className="purple">Prathyush Nair here </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />I have completed my postgraduation in Physics from Institute of Chemical Technology,
            Mumbai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing badminton...I am good at it.
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music..
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling..
            </li>

          </ul>
          <div style={{display:"flex",marginTop:"10px",gap:"20px"}}>
          <div className="about-activity">
               <span style={{color:"#b440e2"}}>Email:</span> prathyu360@gmail.com
          </div>
          <div className="about-activity">
          <span style={{color:"#b440e2"}}>Mobile:</span> 8369740382
          </div>
          </div>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
