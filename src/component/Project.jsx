import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import saras from "../assets/saras.png";
import kalimata from "../assets/kalimata.png";
import Ai from "../assets/AI1.png";
import AOS from 'aos';
import { useEffect } from 'react';

export default function Project() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease',
        //   once: 'false',
        });
    })
    return (
        <section id="project" className="project py-5 d-flex align-items-center justify-content-center">
            <Container>
                <Row className="projectRow">
                    <h1 className="heading">Projects</h1>

                    <Col xs={12} md={6} xl={4} className="justify-content-center mb-4">
                        <Card data-aos="fade-in" data-aos-once='false'  className="projectCard">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <a className="link" target="_blank" rel="noreferrer" href="https://saras.care/">
                                <Card.Img  className="image" variant="top" src={saras} />
                                <Card.Body>
                                    <Card.Title>Saras Care Website</Card.Title>
                                    <Card.Text>
                                        Tools: WordPress, Php, MSAzure
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} xl={4} className="justify-content-center mb-4">
                        <Card data-aos="fade-in" data-aos-delay='300' data-aos-once='false' className="projectCard">
                             <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <a className="link disableLink" target="_blank" rel="noreferrer" href="#construction">
                                <Card.Img className="image" variant="top" src={kalimata} />
                                <Card.Body>
                                    <Card.Title>Kalimata Websie</Card.Title>
                                    <Card.Text>
                                        Tools: WordPress, Php, MSAzure
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} xl={4} className="justify-content-center mb-4">
                        <Card data-aos="fade-in" data-aos-delay='700' data-aos-once='false' className="projectCard">
                        <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <a className="link disableLink" target="_blank" rel="noreferrer" href="#construction">
                                <Card.Img className="image" variant="top" src={Ai} />
                                <Card.Body>
                                    <Card.Title>AI-Enabled Cloud Migrating System</Card.Title>
                                    <Card.Text>
                                        Tools: React JS, CSS, SASS, NodeJS, Amazon web services and Firebase
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
