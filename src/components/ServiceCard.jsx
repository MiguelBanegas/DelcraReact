import { Card, Col, Carousel } from 'react-bootstrap';

function ServiceCard({ image, images, title, text }) {
  const hasMultipleImages = images && Array.isArray(images) && images.length > 0;

  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm border-0">
        {hasMultipleImages ? (
          <Carousel interval={3000} indicators={true} fade>
            {images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                   <img
                    className="d-block w-100 h-100"
                    src={img}
                    alt={`${title} - ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div style={{ height: '240px', overflow: 'hidden' }}>
            <Card.Img 
              variant="top" 
              src={image} 
              alt={title} 
              loading="lazy"
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}
        <Card.Body className="text-center d-flex flex-column">
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text className="text-muted flex-grow-1">{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ServiceCard;


