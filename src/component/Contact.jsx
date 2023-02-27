import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ContactImg from "../assets/Contact.png";
import AOS from 'aos';
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease',
        //   once: 'false',
        });
    })
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rfjmg2e', 'template_pszyf6t', form.current, 'tXHfNBZnE-N2jQG8m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className='py-5 contact d-flex align-items-center justify-content-center' id='contact'>
            <Container>
                <Row>
                <h1 className="heading">Contact</h1>
                    <Col xs={12} md={6} xl={6} >
                        <Form ref={form} onSubmit={sendEmail} className='contactForm'>
                        <Form.Group className="mb-3 formGroup">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control name="user_name" type="text" placeholder="Enter full name" required />
                            </Form.Group>
                            <Form.Group className="mb-3 formGroup">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="user_email" type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3 formGroup">
                                <Form.Label>Message</Form.Label>
                                <Form.Control name="message"  className='textarea' as="textarea" placeholder="Enter message" required />
                            </Form.Group>
                            <Button className='button' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={12} md={6} xl={6} className="contactImg d-flex">
                        <img data-aos="fade-in" src={ContactImg}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
