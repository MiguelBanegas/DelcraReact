import { Container, Row, Col, Button, Ratio } from 'react-bootstrap';
import styles from './ContactoPage.module.css';
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
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5934.5755405896125!2d-57.54489166694497!3d-38.00669369055288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc19ce481755%3A0x79ab889dc012fe0a!2sPlaza%20Col%C3%B3n!5e0!3m2!1ses!2sar!4v1753227936444!5m2!1ses!2sar"
              title="Ubicación en Google Maps"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactoPage;