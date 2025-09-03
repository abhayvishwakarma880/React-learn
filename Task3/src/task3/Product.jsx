import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap'
import './Product.css'
// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.jpg';
import img from '../assets/img.jpg';
import Image from 'react-bootstrap/Image';

function Product() {
  return (
    <>
      <Container>
        <Row style={{ minHeight: "300px" }}>
          <Col sm={1}></Col>
          <Col sm={1}></Col>
          <Col sm={3}>
            <Row style={{ minHeight: "300px", padding: "10px" }}>
              <Col className="shadoww" style={{ borderRadius: "10px" }}>
                <Image
                  className="mt-2"
                  src={img}
                  height={"250px"}
                  width={"100%"}
                  rounded
                />
                <Row>
                  <Col className="text-center">
                    <h4>Abhay Vishwakarma</h4>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <p>Web Development</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col sm={3}>
            <Row style={{ minHeight: "300px", padding: "10px" }}>
              <Col className="shadoww" style={{ borderRadius: "10px" }}>
                <Image
                  className="mt-2"
                  src={img}
                  height={"250px"}
                  width={"100%"}
                  rounded
                />
                <Row>
                  <Col className="text-center">
                    <h4>Abhay Vishwakarma</h4>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <p>Web Development</p>
                  </Col>
                </Row>
               </Col>
            </Row>
          </Col>
          <Col sm={3}>
            <Row style={{ minHeight: "300px", padding: "10px" }}>
              <Col className="shadoww" style={{ borderRadius: "10px" }}>
                <Image
                  className="mt-2"
                  src={img}
                  height={"250px"}
                  width={"100%"}
                  rounded
                />
                <Row>
                  <Col className="text-center">
                    <h4>Abhay Vishwakarma</h4>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <p>Web Development</p>
                  </Col>
                </Row>
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Product;