import { Container, Row, Col, Button, Ratio } from 'react-bootstrap';
import { EnvelopeFill, Whatsapp, Instagram, Linkedin } from 'react-bootstrap-icons';

function ContactoPage() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Contactate con Nosotros</h1>
      <p className="text-center">
        Hacé click en los íconos para enviarnos un correo, un mensaje por WhatsApp o ver nuestra ubicación.
      </p>
      <div className="d-flex justify-content-center my-4 gap-3">
        <Button href="mailto:se.delcra@gmail.com" title="Enviar correo electrónico" variant="outline-primary" className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
          <EnvelopeFill size={24} />
        </Button>
        <Button href="https://wa.me/5491159490184" target="_blank" rel="noopener noreferrer" title="Chatear por WhatsApp" variant="outline-success" className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
          <Whatsapp size={24} />
        </Button>
        <Button href="https://www.instagram.com/delcra_/" target="_blank" rel="noopener noreferrer" title="Instagram" variant="outline-danger" className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
          <Instagram size={24} />
        </Button>
        <Button href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" variant="outline-info" className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
          <Linkedin size={24} />
        </Button>
      </div>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <img
            src="./assets/mapas/mapa.png"
            alt="Mapa de ubicación"
            className="img-fluid rounded shadow w-100"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactoPage;