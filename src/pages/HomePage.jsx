import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  LightningCharge, 
  Gear, 
  CheckCircle, 
  Search, 
  ClipboardData, 
  Tools,
  Award,
  Buildings,
  Shop,
  House
} from 'react-bootstrap-icons';
import styles from './HomePage.module.css';
import CarouselNetflix from "../components/CarouselNetflix";
import CarouselIluminacion from "../components/CarouselIluminacion";
import WhatsAppButton from "../components/WhatsAppButton";

const servicesData = [
  {
    icon: <Buildings size={40} className="text-primary mb-3" />,
    title: "Instalaciones eléctricas industriales",
    text: "Diseñadas para garantizar continuidad operativa y seguridad en procesos productivos."
  },
  {
    icon: <Shop size={40} className="text-primary mb-3" />,
    title: "Instalaciones comerciales",
    text: "Soluciones eléctricas seguras y eficientes para espacios de atención al público."
  },
  {
    icon: <Gear size={40} className="text-primary mb-3" />,
    title: "Mantenimiento eléctrico",
    text: "Prevención de fallas y optimización del rendimiento del sistema eléctrico."
  }
];

function HomePage() {
  return (
    <Container fluid className="p-0">
      <WhatsAppButton />
      
      {/* 1. HERO PRINCIPAL REEMPLAZADO */}
      <section className="hero-gradient py-10 text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <h1 className="display-3 fw-bold mb-4">
                DELCRA <span className="text-primary">Soluciones Eléctricas</span>
              </h1>
              <h2 className="h3 mb-4 text-dark opacity-90">
                Ingeniería aplicada para instalaciones eléctricas seguras y confiables.
              </h2>
              <p className="fs-5 text-secondary mb-5">
                Sistemas eléctricos para industria, hotelería, comercios y residencias.
                <br />
                Instalaciones diseñadas bajo normativa vigente, con enfoque en seguridad, eficiencia energética y continuidad operativa.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Button as={Link} to="/contacto" variant="primary" size="lg" className="px-5 py-3 shadow">
                  Solicitar asesoramiento
                </Button>
                <Button as={Link} to="/servicios" variant="outline-primary" size="lg" className="px-5 py-3">
                  Ver servicios
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. BLOQUE DIFERENCIAL */}
      <section className="bg-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0 text-center text-lg-start">
              <h2 className="display-5 fw-bold mb-4 text-gradient">
                Diseñamos sistemas eléctricos, no instalaciones improvisadas.
              </h2>
              <p className="fs-5 text-secondary">
                Cada proyecto es analizado y ejecutado mediante procesos técnicos definidos que garantizan seguridad, estabilidad y confiabilidad a largo plazo.
              </p>
            </Col>
            <Col lg={6}>
              <div className="p-4 bg-light rounded-4 shadow-sm">
                <Image 
                  src="/assets/proyectos/1.png" 
                  alt="Tablero eléctrico profesional" 
                  fluid 
                  className="rounded-3 shadow"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 7. SECCIÓN SERVICIOS MEJORADA */}
      <section id="servicios" className="bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Nuestras Soluciones</h2>
            <div className="bg-primary mx-auto" style={{ width: '80px', height: '4px' }}></div>
          </div>
          <Row>
            {servicesData.map((service, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className={`h-100 border-0 shadow-sm card-hover p-4`}>
                  <Card.Body className="text-center">
                    {service.icon}
                    <Card.Title className="h4 fw-bold mb-3">{service.title}</Card.Title>
                    <Card.Text className="text-secondary fs-6">
                      {service.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button as={Link} to="/servicios" variant="primary" size="lg">
              Solicitar diagnóstico eléctrico
            </Button>
          </div>
        </Container>
      </section>

      {/* 4. BLOQUE BENEFICIOS */}
      <section className="bg-dark text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h2 className="display-4 fw-bold mb-4 text-white">Por qué elegir <span className="text-primary">DELCRA</span></h2>
              <div className="d-flex flex-column gap-4 mt-5">
                {[
                  "Seguridad eléctrica bajo normativa vigente",
                  "Instalaciones diseñadas para prevenir fallas",
                  "Optimización energética y reducción de costos",
                  "Materiales certificados y ejecución profesional",
                  "Soluciones adaptadas a cada operación"
                ].map((item, i) => (
                  <div key={i} className="d-flex align-items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                    <span className="fs-5">{item}</span>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={6}>
              <Row>
                <Col xs={6} className="mb-4">
                  <div className="bg-secondary bg-opacity-10 p-4 rounded-4 text-center border border-secondary border-opacity-20 h-100">
                    <ShieldCheck size={48} className="text-primary mb-3" />
                    <h3 className="h5">Normativa AEA</h3>
                  </div>
                </Col>
                <Col xs={6} className="mb-4">
                  <div className="bg-secondary bg-opacity-10 p-4 rounded-4 text-center border border-secondary border-opacity-20 h-100">
                    <Award size={48} className="text-primary mb-3" />
                    <h3 className="h5">Certificación</h3>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="bg-secondary bg-opacity-10 p-4 rounded-4 text-center border border-secondary border-opacity-20 h-100">
                    <LightningCharge size={48} className="text-primary mb-3" />
                    <h3 className="h5">Eficiencia</h3>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="bg-secondary bg-opacity-10 p-4 rounded-4 text-center border border-secondary border-opacity-20 h-100">
                    <Tools size={48} className="text-primary mb-3" />
                    <h3 className="h5">Profesionalismo</h3>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 5. BLOQUE PROCESO */}
      <section className="bg-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Nuestro proceso garantiza resultados confiables</h2>
            <div className="bg-primary mx-auto" style={{ width: '80px', height: '4px' }}></div>
          </div>
          <Row className="g-4">
            <Col md={4}>
              <div className="text-center p-4">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow" style={{ width: '80px', height: '80px' }}>
                  <Search size={32} />
                </div>
                <h3>1. Diagnóstico técnico</h3>
                <p className="text-secondary">Analizamos a fondo su estado actual y requerimientos operativos.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow" style={{ width: '80px', height: '80px' }}>
                  <ClipboardData size={32} />
                </div>
                <h3>2. Diseño y planificación segura</h3>
                <p className="text-secondary">Creamos la solución técnica bajo normativa vigente.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow" style={{ width: '80px', height: '80px' }}>
                  <Tools size={32} />
                </div>
                <h3>3. Ejecución controlada y verificada</h3>
                <p className="text-secondary">Implementamos con materiales certificados y pruebas de seguridad.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold">Proyectos Realizados</h2>
            <p className="text-secondary fs-5">Compromiso con la calidad en cada instalación.</p>
          </div>
          <CarouselNetflix />
        </Container>
      </section>

      {/* 9. BLOQUE CONFIANZA */}
      <section className="bg-primary text-white text-center py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Award size={64} className="mb-4" />
              <h2 className="display-5 fw-bold mb-4 text-white">Confianza y Calidad Técnica</h2>
              <p className="fs-4">
                Trabajamos bajo normativas vigentes y criterios técnicos que garantizan instalaciones seguras, eficientes y confiables a largo plazo.
              </p>
              <Button as={Link} to="/contacto" variant="light" size="lg" className="mt-4 px-5 py-3 fw-bold text-primary">
                Evaluar mi instalación actual
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CLIENTES */}
      <section id="clientes" className="bg-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Confían en Nosotros</h2>
          </div>
          <Row className="justify-content-center align-items-center g-4 grayscale opacity-75">
            <Col xs={6} md={3} className="text-center"><Image src="/assets/empresas/Bacara logo.jpg" fluid loading="lazy" style={{ maxHeight: '80px' }} /></Col>
            <Col xs={6} md={3} className="text-center"><Image src="/assets/empresas/Tequendama logo.jpg" fluid loading="lazy" style={{ maxHeight: '80px' }} /></Col>
            <Col xs={6} md={3} className="text-center"><Image src="/assets/empresas/Domo baires logo.jpg" fluid loading="lazy" style={{ maxHeight: '80px' }} /></Col>
            <Col xs={6} md={3} className="text-center"><Image src="/assets/empresas/La mansion del bosque logo.jpg" fluid loading="lazy" style={{ maxHeight: '80px' }} /></Col>
          </Row>
        </Container>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="bg-light">
        <Container>
          <h2 className="text-center display-5 fw-bold mb-5">Lo que dicen nuestros clientes</h2>
          <Row>
            {[
              {
                text: "El equipo de DELCRA transformó por completo nuestra instalación eléctrica, asegurando la continuidad de la operación sin fallas.",
                author: "Juan Pérez",
                position: "Gerente de Hotel Costa"
              },
              {
                text: "El mantenimiento preventivo que realizan es excelente. Nos ahorraron mucho dinero en reparaciones de emergencia.",
                author: "Ana Gómez",
                position: "Jefa de Planta en Indunor"
              },
              {
                text: "La automatización de la iluminación en nuestro local no solo mejoró la estética sino que redujo el consumo notablemente.",
                author: "Carlos Rodríguez",
                position: "Dueño de Tienda Central"
              }
            ].map((msg, i) => (
              <Col md={4} key={i} className="mb-4">
                <Card className="h-100 border-0 shadow-sm p-3">
                  <Card.Body>
                    <Card.Text className="fst-italic text-secondary fs-5 mb-4">"{msg.text}"</Card.Text>
                    <div>
                      <h4 className="h6 fw-bold mb-0">{msg.author}</h4>
                      <small className="text-muted">{msg.position}</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default HomePage;
