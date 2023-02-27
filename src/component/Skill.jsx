import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { PatchCheck } from 'react-bootstrap-icons';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Skill() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease',
      // once: 'true',

    });
  })

  return (
    <section className="skill py-5 d-flex align-items-center justify-content-center" id="skills">
      <Container>
        <Row>
          <h1 className="heading">Skills</h1>
          <Col xs={12} md={6} xl={6} className="justify-content-center mb-4 mt-4">
            <Card data-aos="zoom-in" data-aos-once='false' className='frontCard skillCard' style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Title>Front End</Card.Title>
                <div className='list'>
                <ListGroup>
                  <ListGroup.Item><PatchCheck></PatchCheck> HTML</ListGroup.Item>
                  <ListGroup.Item><PatchCheck></PatchCheck> CSS/Sass</ListGroup.Item>
                  <ListGroup.Item><PatchCheck></PatchCheck> JavaScriipt</ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item><PatchCheck></PatchCheck> React/Angular</ListGroup.Item>
                  <ListGroup.Item><PatchCheck></PatchCheck> Bootstrap</ListGroup.Item>
                  <ListGroup.Item><PatchCheck></PatchCheck> Wordpress</ListGroup.Item>
                </ListGroup>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} xl={6} className="justify-content-center mb-4 mt-4">
            <Card data-aos="zoom-in" data-aos-once='false' className='cardBox skillCard' style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Title>FrameWork & BackEnd</Card.Title>
                <div className='list'>
                <ListGroup>
                  <ListGroup.Item><PatchCheck></PatchCheck> Ruby</ListGroup.Item>
                  <ListGroup.Item><PatchCheck></PatchCheck> Code Igniter</ListGroup.Item>
                  <ListGroup.Item><PatchCheck></PatchCheck> AWS</ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item><PatchCheck></PatchCheck> PhP</ListGroup.Item>
                  <ListGroup.Item><PatchCheck></PatchCheck> MySQL</ListGroup.Item>
                </ListGroup>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
