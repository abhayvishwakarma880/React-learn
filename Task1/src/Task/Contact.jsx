import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Contact(){
  return (
    <>
      <Container fluid>
        <Row style={{ minHeight: "400px" }}>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Row style={{ minHeight: "350px" }}>
              <Col sm={1}></Col>
              <Col sm={10}>
                <Row>
                  <p className="text-center c py-1">Contact Us</p>
                </Row>
                <Row className="py-2">
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    <input type="text" placeholder="Your name" />
                  </Col>
                  <Col sm={1}></Col>
                </Row>
                <Row className="py-2">
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    <input type="text" placeholder="Your name" />
                  </Col>
                  <Col sm={1}></Col>
                </Row>
                <Row className="py-2">
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    <textarea
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