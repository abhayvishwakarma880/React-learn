import React from "react";
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Home(){
  return (
    <>
      <Container fluid>
        <Row className="main">
          <Col sm={3}></Col>
          <Col sm={6} className="h">
            <Row>
              <Col className="text-center test pt-4">Test Training Institute</Col>
            </Row>
            <Row>
              <Col className="text-center e">Every Student with modern Skills for the Digital Era</Col>
            </Row>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;