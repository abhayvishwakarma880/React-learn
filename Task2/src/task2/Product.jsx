import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap'
import './Product.css'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import Image from 'react-bootstrap/Image';

function Product(){
  return (
    <>
      <Container>
        <Row style={{ minHeight: "400px" }}>
          <Col sm={3}>
            <Row  style={{ minHeight: "300px", padding: "10px" }}>
              <Col className='shadoww' style={{ borderRadius: "10px" }}>
                <Image
                  className="mt-2"
                  src={img1}
                  height={"250px"}
                  width={"100%"}
                  rounded
                />
                <Row>
                <Col className="text-center">
                  <h2>Headphones</h2>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p>₹2500</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p>⭐ 4.2</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                    className="btn btn-primary bb"
                    style={{ width: "100%" }}
                  >
                    Add to Cart
                  </button>
                </Col>
              </Row>
              </Col>
              
            </Row>
          </Col>
          <Col sm={3}>
             <Row  style={{ minHeight: "300px", padding: "10px" }}>
              <Col className='shadoww' style={{borderRadius: "10px" }}>
                <Image
                  className="mt-2"
                  src={img2}
                  height={"250px"}
                  width={"100%"}
                  rounded
                />
                <Row>
                <Col className="text-center">
                  <h2>Sneakers</h2>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p>₹3500</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p>⭐ 4.6</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                    className="btn btn-primary bb"
                    style={{ width: "100%" }}
                  >
                    Add to Cart
                  </button>
                </Col>
              </Row>
              </Col>
              
            </Row>
          </Col>
          <Col sm={3}>
             <Row  style={{ minHeight: "300px", padding: "10px" }}>
              <Col className='shadoww' style={{ borderRadius: "10px" }}>
                <Image
                  className="mt-2"
                  src={img3}
                  height={"250px"}
                  width={"100%"}
                  rounded
                />
                <Row>
                <Col className="text-center">
                  <h2>T-Shirt</h2>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p>₹999</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p>⭐ 4</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                    className="btn btn-primary bb"
                    style={{ width: "100%" }}
                  >
                    Add to Cart
                  </button>
                </Col>
              </Row>
              </Col>
              
            </Row>
          </Col>
          <Col sm={3}>
             <Row  style={{ minHeight: "300px", padding: "10px" }}>
              <Col className='shadoww' style={{ borderRadius: "10px" }}>
                <Image
                  className="mt-2"
                  src={img4}
                  height={"250px"}
                  width={"100%"}
                  rounded
                />
                <Row>
                <Col className="text-center">
                  <h2>Microwave</h2>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p>₹8500</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p>⭐ 4.3</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                    className="btn btn-primary bb"
                    style={{ width: "100%" }}
                  >
                    Add to Cart
                  </button>
                </Col>
              </Row>
              </Col>
              
            </Row>
          </Col>
        </Row>
        <Row style={{ minHeight: "400px" }}>
          <Col sm={3}>
            <Row  style={{ minHeight: "300px", padding: "10px" }}>
              <Col className='shadoww' style={{ borderRadius: "10px" }}>
                <Image
                  className="mt-2"
                  src={img5}
                  height={"250px"}
                  width={"100%"}
                  rounded
                />
                <Row>
                <Col className="text-center">
                  <h2>Sofa</h2>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p>₹22,000</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p>⭐ 4.7</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                    className="btn btn-primary bb"
                    style={{ width: "100%" }}
                  >
                    Add to Cart
                  </button>
                </Col>
              </Row>
              </Col>
              
            </Row>
          </Col>
          <Col sm={3}>
          </Col>
          <Col sm={3}>
            
          </Col>
          <Col sm={3}>
             
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Product;