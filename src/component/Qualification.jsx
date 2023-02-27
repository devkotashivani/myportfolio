import React from 'react';
import { Container, Row, Col,Tab,Tabs } from 'react-bootstrap';
import { Calendar } from 'react-bootstrap-icons';
import Education from './Education';
import Experience from './Experience';


export default function Qualification() {
  return (
    <section className="qualification d-flex align-items-center justify-content-center mb-4" id='qualification'>
      <Container className='py-5 qClass'>
        <Row className='qualificationContent'>
        <h1 className="heading">Qualification</h1>
        <h4>My Qualification Journey</h4>
          <Col>
            <Tabs
              defaultActiveKey="experience"
              id="uncontrolled-tab-example"
              className="tabs mb-3"
            >   
              <Tab className='tab' eventKey="experience" title="Experience">
                <Experience />
              </Tab>

              <Tab eventKey="Education" title="Education">
                <Education />
              </Tab>

            </Tabs>
          </Col>
        </Row>
      </Container>

    </section>

  );

}
