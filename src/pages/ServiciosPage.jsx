import { Container, Row, Col, Card, Ratio } from "react-bootstrap";
import ServiceCard from "../components/ServiceCard";

const servicesData = [
  {
    image: "/assets/proyectos/3.png",
    images: [
      "/assets/proyectos/instalaciones/IMG-20230901-WA0140.jpeg",
      "/assets/proyectos/instalaciones/IMG-20230901-WA0192.jpeg",
      "/assets/proyectos/instalaciones/IMG-20230928-WA0218.jpeg",
      "/assets/proyectos/instalaciones/IMG_20230707_113051_219_HDR.jpg",
      "/assets/proyectos/instalaciones/IMG_20230711_120249_818_HDR.jpg",
      "/assets/proyectos/instalaciones/IMG_20230717_134658_986.jpg",
      "/assets/proyectos/instalaciones/IMG_20250807_110653.jpg",
      "/assets/proyectos/instalaciones/IMG_20250807_134506.jpg",
      "/assets/proyectos/instalaciones/IMG_20250808_142025.jpg",
      "/assets/proyectos/instalaciones/IMG_20250808_154913.jpg",
      "/assets/proyectos/instalaciones/IMG_20251108_153056.jpg",
    ],
    title: "Instalaciones Eléctricas",
    text: "Proyecto e instalación de sistemas eléctricos, eficientes, seguros, conforme a normativas vigentes y adaptados a las necesidades de cada cliente.",
  },
  {
    image: "/assets/proyectos/1.png",
    images: [
      "/assets/proyectos/mantenimiento/Foto de DELCRA SE.jpg",
      "/assets/proyectos/mantenimiento/IMG-20231001-WA0202.jpeg",
      "/assets/proyectos/mantenimiento/IMG_20220613_123519588.jpg",
      "/assets/proyectos/mantenimiento/IMG_20250517_035748093.jpg",
      "/assets/proyectos/mantenimiento/IMG_20251014_150841.jpg",
      "/assets/proyectos/mantenimiento/IMG_20251014_153123.jpg",
      "/assets/proyectos/mantenimiento/IMG_20251014_154943.jpg",
    ],
    title: "Mantenimiento Preventivo",
    text: "Planificación de mantenimiento para optimizar el rendimiento, evitar fallas y prolongar la vida útil de sus equipos.",
  },
  {
    image: "/assets/proyectos/2.png",
    images: [
      "/assets/proyectos/automatismos/IMG_20250707_164453657.jpg",
      "/assets/proyectos/automatismos/IMG_20250707_164504038.jpg",
      "/assets/proyectos/automatismos/IMG_20250707_164508486.jpg",
    ],
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


    </Container>
  );
}

export default ServiciosPage;
