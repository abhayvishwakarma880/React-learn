import { Col, Container, Row } from "react-bootstrap";
import "./Cart.css";

function Cart(){
  return (
    <>
      <Container className="my-4">
        <Row style={{minHeight: "10px",backgroundColor: "#f3f3f3",borderRadius: "10px",}}>
          <Col>
            
              
              <h3 className="pt-3">&#128722; Add to Cart</h3>
              <p>cart is empty</p>
            
            
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Cart;