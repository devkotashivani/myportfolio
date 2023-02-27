import { Container, Row, Col, Button } from "react-bootstrap";
import React, { useState } from 'react';
import Typed from "react-typed";
import Resume from "../assets/Resume.pdf";
import Particle from "./Particle";

export default function Home() {
  
  return (
    <section className="home min-vh-100 d-flex align-items-center" id="home">
      
      <Container>
      
        <Row className="align-items-center homeRow">
          
          <Col  className="col colleft" xs={12} md={6} l={6} xl={6}>
            <div className = "profile">
              
            </div>
              
          </Col>
          <Col className="col colright" xs={12} md={6} l={6} xl={6}>
          <Particle className="particles" />
            <h1>Hi</h1>
            <h3>I am Shivani Devkota</h3>
            <h3>a <Typed
              strings={[    
                "Web Developer",
                "UI-UX Designer",
                "Software Developer",
              ]}
              typeSpeed={100}
              backSpeed={100}
              loop
            /></h3>
            <a download="" href={Resume} className="btn btn-primary buttonResume">Download Resume</a>

          </Col>
        </Row>
      </Container>
    </section>
  )
  
}
