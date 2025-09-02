import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from './Hero';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import {Footer} from './Footer';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

let a = "{Coders}"
function Home(){
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={2} style={{ height: "60px" }}></Col>
          <Col sm={8} style={{ height: "60px" }}>
            <Row>
              <Col sm={1}></Col>
              <Col sm={3} style={{ height: "60px" }}>
                <h1 className="text-center digi">
                  Digi<span style={{ color: "red" }}>{a}</span>
                </h1>
              </Col>
              <Col sm={3}></Col>
              <Col sm={4} style={{}}>
                <ul>
                  <li>
                    <button>Home</button>
                    <div className='ani'></div>
                  </li>
                  <li>
                    <button>About</button>
                    <div className='ani'></div>
                  </li>
                  <li>
                    <button>Service</button>
                    <div className='ani'></div>
                  </li>
                  <li>
                    <button>Contact</button>
                    <div className='ani'></div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col sm={2} style={{ height: "60px" }}></Col>
        </Row>

        {/* hero  */}

        <Hero />
        {/* <h1></h1> */}
      </Container>
      <Service />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;