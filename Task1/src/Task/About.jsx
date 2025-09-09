import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ye zaruri hai

function About() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    // refresh AOS after component renders
    AOS.refresh();
  }, []);
  return (
    <>
      <Container
        fluid
        className="my-5"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <Row
          style={{ minHeight: "130px", backgroundColor: "#f3f3f3" }}
          className="py-4"
        >
          <Col sm={2}></Col>
          <Col sm={8}>
            <Row>
              <h1 className=" my-3 about">About Us</h1>
            </Row>
            <Row>
              <p className="p">
                We are team of passionate developers, designers and marketers
                helping businesses transform digitally with innovative
                solutions.
              </p>
            </Row>
            <Row>
              <p className="p">
                with years of experience, we have delivered project across
                industies like e-commerce, healthcare and startups.
              </p>
            </Row>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </>
  );
}
export default About;
