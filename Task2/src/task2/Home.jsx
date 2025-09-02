import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import Product from './Product';
import Cart from './Cart';
import { Footer } from './Footer';
function Home(){
  return (
    <>
      <Container>
        <Row style={{ minHeight: "60px" }}>
          <Col sm={2}>
            <input type="text" className='py-2 mt-1' placeholder='Search product ...' />
          </Col>
          <Col sm={2}>
            <select name="" id="" className='py-2 mt-1'>
              <option value="">All Categories</option>
            </select>
          </Col>
          <Col sm={4}>
            <p className='py-2 mt-1'>Max Price: 46,000 <progress value="70" max="100"></progress></p>
          </Col>
        </Row>
      </Container>
      <Product />
      <Cart />
      <Footer />
    </>
  );
}
export default Home;;