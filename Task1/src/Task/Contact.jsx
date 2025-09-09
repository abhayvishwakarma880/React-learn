import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ye zaruri hai
// import { useLocation } from "react-router-dom";

function Contact() {
  //   useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // animation duration in ms
  //     once: true      // ek baar hi animate hoga
  //   });
  // }, []);
  // const location = useLocation();

  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: true });
  //   AOS.refresh();
  // }, []);

  // // route change ke liye
  // useEffect(() => {
  //   AOS.refresh();
  // }, [location]);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // refresh AOS after component renders
    AOS.refresh();
  }, []);

  return (
    <>
      <Container fluid data-aos="zoom-in-down">
        <Row style={{ minHeight: "400px" }}>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Row style={{ minHeight: "350px" }}>
              <Col sm={1}></Col>
              <Col sm={10}>
                <Row>
                  <p data-aos="fade-down" className="text-center c py-1">
                    Contact Us
                  </p>
                </Row>
                <Row className="py-2">
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    <input
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      type="text"
                      placeholder="Your name"
                    />
                  </Col>
                  <Col sm={1}></Col>
                </Row>
                <Row className="py-2">
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    <input
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      type="text"
                      placeholder="Your name"
                    />
                  </Col>
                  <Col sm={1}></Col>
                </Row>
                <Row className="py-2">
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    <textarea
                      data-aos="fade-right"
                      data-aos-duration="3000"
                      className="t"
                      name=""
                      id=""
                      placeholder="Your message"
                      cols="45"
                      rows="4"
                    ></textarea>
                  </Col>
                  <Col sm={1}></Col>
                </Row>
                <Row className="">
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    <Button
                      className="btn btn-primary"
                      style={{ width: "97%" }}
                      data-aos="fade-left"
                      data-aos-delay="500"
                    >
                      Send message
                    </Button>
                  </Col>
                  <Col sm={1}></Col>
                </Row>
              </Col>
              <Col sm={1}></Col>
            </Row>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </>
  );
}
export default Contact;
