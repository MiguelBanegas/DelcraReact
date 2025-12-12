import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin, Whatsapp, HouseDoorFill, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function AppFooter() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container className="text-center text-md-start">
        <Row className="text-center text-md-start">
          <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">DELCRA®</h5>
            <p>Soluciones eléctricas integrales para la industria, el comercio y la hotelería. Garantizamos seguridad, eficiencia y tecnología de punta en cada proyecto.</p>
          </Col>
          <Col md={3} lg={2} xl={2} className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">Enlaces</h5>
            <p><Link to="/servicios" className="text-white text-decoration-none">Servicios</Link></p>
            <p><a href="/#proyectos" className="text-white text-decoration-none">Proyectos</a></p>
            <p><a href="/#clientes" className="text-white text-decoration-none">Clientes</a></p>
            <p><Link to="/contacto" className="text-white text-decoration-none">Contacto</Link></p>
          </Col>
          <Col md={4} lg={3} xl={3} className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">Contacto</h5>
            <p><HouseDoorFill className="me-3 text-secondary" size={20} /> Mar del Plata, Argentina</p>
            <p><EnvelopeFill className="me-3 text-secondary" size={20} /> se.delcra@gmail.com</p>
            <p><TelephoneFill className="me-3 text-secondary" size={20} /> +54 9 11 5949-0184</p>
          </Col>
        </Row>
        <hr className="mb-4 border-secondary" />
        <Row className="align-items-center">
          <Col md={7} lg={8}>
            <p className="m-0">© 2025 DELCRA.com.ar - Todos los derechos reservados</p>
          </Col>
          <Col md={5} lg={4}>
            <div className="text-center text-md-end">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle m-1 d-inline-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}><Facebook size={20} /></a>
              <a href="https://www.instagram.com/delcra_/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle m-1 d-inline-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}><Instagram size={20} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle m-1 d-inline-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}><Linkedin size={20} /></a>
              <a href="https://wa.me/5491159490184" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle m-1 d-inline-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}><Whatsapp size={20} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default AppFooter;
