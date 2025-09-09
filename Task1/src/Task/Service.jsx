import "bootstrap/dist/css/bootstrap.min.css";
import "./Service.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img2 from "../assets/img2.png";
import Image from "react-bootstrap/Image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ye zaruri hai
function Service() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    // refresh AOS after component renders
    AOS.refresh();
  }, []);
  return (
    <>
      <Container fluid className="mt-4 text-center">
        <Row>
          <Col data-aos="zoom-in-down" style={{ fontSize: "30px" }}>
            Our Services
          </Col>
        </Row>
        <Row style={{ minHeight: "180px" }} className="mt-4">
          <Col sm={1}></Col>
          <Col sm={10}>
            <Row style={{ minHeight: "100%" }}>
              <Col sm={1}></Col>
              <Col>
                <Row>
                  <Col sm={4}>
                    <Row className="mx-3 my-2 shadoww" data-aos="zoom-in-right">
                      <Col>
                        <Image
                          className="img2 py-2"
                          src={img2}
                          style={{ height: "60px" }}
                        />
                      </Col>
                      <Row>
                        <Col>
                          <h1 className="web">Web Development</h1>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="p">
                            We build responsive and scalable web applications
                            for your Business
                          </p>
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                  <Col sm={4}>
                    <Row className="mx-3 my-2 shadoww" data-aos="zoom-in-right">
                      <Col>
                        <Image
                          className="img2 py-2"
                          src={img2}
                          style={{ height: "60px" }}
                        />
                      </Col>
                      <Row>
                        <Col>
                          <h1 className="web">E-Commerce</h1>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="p">
                            Create Online Stores with secure payment integration
                          </p>
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="mx-3 my-2 shadoww" data-aos="zoom-in-right">
                      <Col>
                        <Image
                          className="img2 py-2"
                          src={img2}
                          style={{ height: "60px" }}
                        />
                      </Col>
                      <Row>
                        <Col>
                          <h1 className="web">SEO & Marketing</h1>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="p">
                            Boost Your online visibility and reach your target
                            audience.
                          </p>
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col sm={1}></Col>
            </Row>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </>
  );
}
export default Service;
