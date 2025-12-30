import { Card, Col } from 'react-bootstrap';

function ServiceCard({ image, title, text }) {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100">
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ServiceCard;

