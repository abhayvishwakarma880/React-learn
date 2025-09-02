import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
let a = "{Coders}";
export function Footer(){
  return(
    <>
    <Container fluid>
      <Row style={{minHeight:"60px", background:"#027bfe"}}>
        <Col><p className='text-center py-3 ab'>© 2025 digi<span style={{color:"red"}}>{a}</span>. All Right Reserved.</p></Col>
      </Row>
    </Container>
    </>
  )
}