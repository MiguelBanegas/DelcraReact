import { Container, Row, Col, Card, Ratio } from "react-bootstrap";
import ServiceCard from "../components/ServiceCard";

const servicesData = [
  {
    image: "/assets/proyectos/3.png",
    images: [
      "/assets/proyectos/iluminacion/IMG-20230707-WA0107.jpeg",
      "/assets/proyectos/iluminacion/IMG-20230922-WA0338.jpg",
      "/assets/proyectos/iluminacion/IMG-20230922-WA0342.jpg",
      "/assets/proyectos/iluminacion/IMG-20230922-WA0344.jpg",
      "/assets/proyectos/iluminacion/IMG-20230922-WA0348.jpg",
      "/assets/proyectos/iluminacion/IMG-20230922-WA0349.jpg",
      "/assets/proyectos/iluminacion/IMG-20231002-WA0132.jpeg",
      "/assets/proyectos/iluminacion/IMG-20231002-WA0135.jpg",
      "/assets/proyectos/iluminacion/IMG-20231004-WA0269.jpg",
      "/assets/proyectos/iluminacion/IMG-20231005-WA0233.jpeg",
      "/assets/proyectos/iluminacion/IMG-20231005-WA0234.jpeg",
      "/assets/proyectos/iluminacion/IMG-20231005-WA0240.jpeg",
      "/assets/proyectos/iluminacion/IMG-20231005-WA0241(1).jpeg",
      "/assets/proyectos/iluminacion/IMG-20231005-WA0241.jpeg",
    ],
    title: "Proyecto de Iluminación LED",
    text: "Diseño e implementación de sistemas de iluminación LED de alta eficiencia, optimizando el consumo energético y mejorando la estética de locales comerciales, oficinas e industrias.",
  },
  {
    image: "/assets/proyectos/1.png",
    title: "Mantenimiento Preventivo",
    text: "Planificación de mantenimiento para optimizar el rendimiento, evitar fallas y prolongar la vida útil de sus equipos.",
  },
  {
    image: "/assets/proyectos/2.png",
    title: "Automatización y Control",
    text: "Creación de sistemas inteligentes a medida, según las necesidades de procesos o iluminación, garantizando continuidad, eficiencia y seguridad.",
  },
];

function ServiciosPage() {
  return (
    <Container className="py-5">
      <section id="servicios-main" className="content-section py-1">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <Row>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              images={service.images}
              title={service.title}
              text={service.text}
            />
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
              <Card.Img
                variant="top"
                src="/assets/proyectos/1.png"
                alt="Proyecto de Iluminación LED"
              />
              <Card.Body>
                <Card.Title>Proyecto de Iluminación LED</Card.Title>
                <Card.Text>
                  Instalación de iluminación eficiente en un local comercial.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Ratio aspectRatio="16x9">
                <video
                  controls
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                >
                  <source src="/assets/proyectos/v1.mp4" type="video/mp4" />
                  Tu navegador no soporta la etiqueta de video.
                </video>
              </Ratio>
              <Card.Body className="text-center">
                <Card.Title>Video: Nuestro Proceso de Trabajo</Card.Title>
                <Card.Text>
                  Una mirada detrás de escena en la ejecución de un proyecto.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default ServiciosPage;
