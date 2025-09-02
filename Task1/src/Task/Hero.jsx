import 'bootstrap/dist/css/bootstrap.min.css';
import "./Hero.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/img1.jpg';
import Image from 'react-bootstrap/Image';

function Hero(){
  return (
    <>
      <Row
        style={{ minHeight: "68vh", background: "#027bfe", paddingLeft: "2%" }}
      >
        <Col sm={2}></Col>
        <Col sm={8}>
          <Row style={{ minHeight: "100%" }}>
            <Col sm={1}></Col>
            <Col>
              <Row className="grow my-2">Grow Your Business with Us</Row>
              <Row className="pgrow my-2">
                We provide modern digital solution to help your brand succed on
                time
              </Row>
              <Row>
                <button className="mbtn my-2">Get Started</button>
              </Row>
              <Row>
                <Col>
                  <Image  style={{ borderRadius:"10px" }} src={img1} alt="" height={"300px"} width={"90%"} />
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