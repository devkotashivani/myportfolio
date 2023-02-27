import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function Footer() {
    return (
        <div className='footer py-5'>
                <Container>
                    <Row>
                        <Col className='footerLink'>
                            <ul>
                                <li><a href='#home'>HOME</a></li>
                                <li><a href='#skills'>SKILLS</a></li>
                                <li><a href='#qualification'>QUALIFICATION</a></li>
                                <li><a href='#project'>PROJECTS</a></li>
                                <li><a href='#contact'>CONTACT</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
       

        </div>
    )
}
