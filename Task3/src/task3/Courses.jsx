import Container from 'react-bootstrap/esm/Container';
import './Courses.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
function Courses(){
  return (
    <>
      <Container fluid className="my-4">
        <Row>
          <Col>
            <p className="text-center c">Our Courses</p>
          </Col>
        </Row>
        <Row style={{ minHeight: "35px" }}>
          <Col sm={4}></Col>
          <Col sm={2}>
            <input type="text" placeholder="Search Courses..." />
          </Col>
          <Col sm={2}>
            <select name="" id="">
              <option value="">All Categories</option>
            </select>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row style={{ minHeight: "140px" }}>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Row style={{ minHeight: "140px" }} className='d-flex'>
              <Col sm={3} >
                <Row style={{ minHeight: "100px" }} className="mt-3 mx-0 shadoww">
                  <Col>
                    <p className="text-center f">Full Stack Development</p>
                    <p className="text-center cate">Category: Web</p>
                    <p className="text-center du">Duration: 6 Month</p>
                  </Col>
                </Row>
              </Col>
              <Col sm={3} >
                <Row style={{ minHeight: "100px" }} className="mt-3 mx-0 shadoww">
                  <Col>
                    <p className="text-center f">Python with django</p>
                    <p className="text-center cate">Category: Web</p>
                    <p className="text-center du">Duration: 6 Month</p>
                  </Col>
                </Row>
              </Col>
              <Col sm={3} >
                <Row style={{ minHeight: "100px" }} className="mt-3 mx-0 shadoww">
                  <Col>
                    <p className="text-center f">React Native</p>
                    <p className="text-center cate">Category: Mobile</p>
                    <p className="text-center du">Duration: 4 Month</p>
                  </Col>
                </Row>
              </Col>
              <Col sm={3} >
                <Row style={{ minHeight: "100px" }} className="mt-3 mx-0 shadoww">
                  <Col>
                    <p className="text-center f">Android Development</p>
                    <p className="text-center cate">Category: Mobile</p>
                    <p className="text-center du">Duration: 4 Month</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ minHeight: "140px" }}>
              <Col sm={3} >
                <Row style={{ minHeight: "100px" }} className="mt-3 mx-0 shadoww">
                  <Col>
                    <p className="text-center f">Data science</p>
                    <p className="text-center cate">Category: AI</p>
                    <p className="text-center du">Duration: 6 Month</p>
                  </Col>
                </Row>
              </Col>
              <Col sm={3} >
                <Row style={{ minHeight: "100px" }} className="mt-3 mx-0 shadoww">
                  <Col>
                    <p className="text-center f">Machine Learning</p>
                    <p className="text-center cate">Category: AI</p>
                    <p className="text-center du">Duration: 5 Month</p>
                  </Col>
                </Row>
              </Col>
              <Col sm={3} ></Col>
              <Col sm={3} ></Col>
            </Row>
          </Col>
          <Col sm={3}></Col>
        </Row>
        
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <p className="text-center c">Our Instructors</p>
          </Col>
        </Row>
      </Container>

    </>
  );
}
export default Courses;