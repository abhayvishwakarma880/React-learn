import 'bootstrap/dist/css/bootstrap.min.css';
import "./Hero.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/img1.jpg';
import Image from 'react-bootstrap/Image';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ye zaruri hai


function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    // refresh AOS after component renders
    AOS.refresh();
  }, []);
  return (
    <>
      <Row
        style={{ minHeight: "68vh", background: "#027bfe", paddingLeft: "2%" }}
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <Col sm={2}></Col>
        <Col sm={8}>
          <Row style={{ minHeight: "100%" }}>
            <Col sm={1}></Col>
            <Col>
              <Row className="grow my-2" data-aos="fade-down-right">Grow Your Business with Us</Row>
              <Row className="pgrow my-2" data-aos="fade-down-left">
                We provide modern digital solution to help your brand succed on
                time
              </Row>
              <Row>
                <button className="mbtn my-2" data-aos="fade-up"
                  data-aos-anchor-placement="center-center" >Get Started</button>
              </Row>
              <Row>
                <Col>
                  <Image data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" style={{ borderRadius: "10px" }} src={img1} alt="" height={"300px"} width={"90%"} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col sm={2}></Col>
      </Row>
    </>
  );
}
export default Hero;