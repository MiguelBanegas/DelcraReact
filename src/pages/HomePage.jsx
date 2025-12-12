import { Container, Row, Col, Card, Button, Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import CarouselNetflix from "../components/CarouselNetflix";

/*  */
/* function Home() { */
/*   return ( */
/*     <div> */
{/*       <h2>Mis Proyectos</h2> */}
{/*       <CarouselNetflix /> */}
{/*     </div> */}
/*   ); */
/* } */
/*  */
/* export default Home; */



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

function HomePage() {
  return (
    <Container fluid className="p-0">
      {/* Sección Hero */}
      <Container fluid className="bg-light text-center p-5">
        <h1>⚡Soluciones Eléctricas <br /> para hotelería, comercio, hogares e industria⚡</h1>
        <p className="lead text-secondary">
          Ofrecemos servicios integrales <br /> garantizando seguridad y eficiencia energética.
        </p>
      </Container>
      
      <Container as="section" id="servicios" className="py-5">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <Row>
          {servicesData.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className={`h-100 ${styles.serviceCard}`}>
                <div className={styles.cardImageContainer}>
                  <Card.Img variant="top" src={service.image} className={styles.cardImage} />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center">
            <Button as={Link} to="/servicios" variant="primary" size="lg" className="mt-4">⚡Ver Servicios en detalle⚡</Button>
        </div>
      </Container>

      <Container as="section" id="quienes-somos" fluid className="bg-light p-5">
        <h2 className="text-center mb-4">Quiénes Somos</h2>
        <p className="text-center mx-auto fs-5 text-secondary lh-lg" style={{ maxWidth: '800px' }}>
          Somos un equipo de Profesionales con más de 10 años de experiencia, en constante capacitación, y con gran pasión por ofrecer soluciones eléctricas y de mantenimiento de máxima calidad. <br />
          Nuestra visión es garantizar la seguridad y eficiencia en cada proyecto, planificando desde el día uno para construir relaciones de confianza a largo plazo con nuestros clientes.
        </p>
      </Container>
      
      <Container as="section" id="proyectos" className="py-5">
        <h2 className="text-center mb-4">Proyectos Realizados</h2>
       {/*  <Carousel> */}
       {/*    <Carousel.Item><Image src="/assets/proyectos/1.png" className="d-block w-50" /></Carousel.Item> */}
       {/*    <Carousel.Item><Image src="/assets/proyectos/2.png" className="d-block w-50" /></Carousel.Item> */}
       {/*    <Carousel.Item><Image src="/assets/proyectos/3.png" className="d-block w-50" /></Carousel.Item> */}
       {/*    <Carousel.Item><Image src="/assets/proyectos/4.png" className="d-block w-50" /></Carousel.Item> */}
       {/*    <Carousel.Item><Image src="/assets/proyectos/5.png" className="d-block w-50" /></Carousel.Item> */}
       {/*  </Carousel> */}
        <CarouselNetflix />
      
      </Container>

      <Container as="section" id="clientes" fluid className="bg-light p-5">
        <h2 className="text-center mb-4">Confían en Nosotros</h2>
        <Row className="justify-content-center align-items-center">
          <Col xs={6} md={3} className="mb-3 text-center"><Image src="/assets/empresas/Bacara logo.jpg" fluid /></Col>
          <Col xs={6} md={3} className="mb-3 text-center"><Image src="/assets/empresas/Tequendama logo.jpg" fluid /></Col>
          <Col xs={6} md={3} className="mb-3 text-center"><Image src="/assets/empresas/Domo baires logo.jpg" fluid /></Col>
          <Col xs={6} md={3} className="mb-3 text-center"><Image src="/assets/empresas/La mansion del bosque logo.jpg" fluid /></Col>
        </Row>
      </Container>

      <Container as="section" id="testimonios" className="py-5">
        <h2 className="text-center mb-5">Lo que dicen nuestros clientes</h2>
        <Row>
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Text as="p" className="fst-italic">"El equipo de DELCRA transformó por completo nuestra instalación eléctrica..."</Card.Text>
                <footer className="blockquote-footer text-end">Juan Pérez, <cite>Gerente de Hotel Costa</cite></footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Text as="p" className="fst-italic">"El mantenimiento preventivo que realizan es excelente..."</Card.Text>
                <footer className="blockquote-footer text-end">Ana Gómez, <cite>Jefa de Planta en Indunor</cite></footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Text as="p" className="fst-italic">"La automatización de la iluminación en nuestro local comercial..."</Card.Text>
                <footer className="blockquote-footer text-end">Carlos Rodríguez, <cite>Dueño de Tienda Central</cite></footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomePage;
