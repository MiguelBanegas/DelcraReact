import { Container, Row, Col, Card, Ratio } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
  {
    image: "/assets/proyectos/3.png",
    title: "Instalaciones Eléctricas",
    text: "Proyecto e instalación de sistemas eléctricos, eficientes, seguros, conforme a normativas vigentes y adaptados a las necesidades de cada cliente."
  },
  {
    image: "/assets/proyectos/1.png",
    title: "Mantenimiento Preventivo",
    text: "Planificación de mantenimiento para optimizar el rendimiento, evitar fallas y prolongar la vida útil de sus equipos."
  },
  {
    image: "/assets/proyectos/2.png",
    title: "Automatización y Control",
    text: "Creación de sistemas inteligentes a medida, según las necesidades de procesos o iluminación, garantizando continuidad, eficiencia y seguridad."
  }
];

function ServiciosPage() {
  return (
    <Container className="py-5">
      <section id="servicios-main" className="content-section py-1">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <Row>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} image={service.image} title={service.title} text={service.text} />
          ))}
        </Row>
      </section>

      <hr className="my-5" />

      <section id="galeria-servicios" className="content-section py-1">
        <h2 className="text-center mb-4">Galería de Nuestros Servicios</h2>
        <p className="text-center lead mb-5">
          Explora algunas de nuestras instalaciones y proyectos destacados.
        </p>
        <Row>
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="/assets/proyectos/1.png" alt="Proyecto de Iluminación LED" />
              <Card.Body>
                <Card.Title>Proyecto de Iluminación LED</Card.Title>
                <Card.Text>Instalación de iluminación eficiente en un local comercial.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Ratio aspectRatio="16x9">
                <video controls className="w-100 h-100" style={{ objectFit: 'cover' }}>
                  <source src="/assets/proyectos/v1.mp4" type="video/mp4" />
                  Tu navegador no soporta la etiqueta de video.
                </video>
              </Ratio>
              <Card.Body className="text-center">
                <Card.Title>Video: Nuestro Proceso de Trabajo</Card.Title>
                <Card.Text>Una mirada detrás de escena en la ejecución de un proyecto.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Ratio aspectRatio="16x9">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/IrT71B0Iza8?si=6mu5-mon2OZK2i-Q"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Ratio>
              <Card.Body className="text-center">
                <Card.Title>Video de YouTube</Card.Title>
                <Card.Text>Cómo medir la puesta a tierra con CEM 6650, Telurimetro RES 900/15</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default ServiciosPage;