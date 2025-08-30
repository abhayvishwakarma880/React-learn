import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Service() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red", fontSize: "40px", fontFamily:"sans-serif" }}>
        Services
      </h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Service;