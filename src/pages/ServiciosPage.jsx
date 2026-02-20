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
    title: "Instalaciones eléctricas industriales",
    text: "Diseñadas para garantizar continuidad operativa y seguridad en procesos productivos. Implementamos canalizaciones, tableros de potencia y distribución bajo normativa AEA.",
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
    title: "Instalaciones comerciales",
    text: "Soluciones eléctricas seguras y eficientes para espacios de atención al público. Optimizamos el consumo energético y garantizamos la estética y funcionalidad de su local.",
  },
  {
    image: "/assets/proyectos/2.png",
    images: [
      "/assets/proyectos/automatismos/IMG_20250707_164453657.jpg",
      "/assets/proyectos/automatismos/IMG_20250707_164504038.jpg",
      "/assets/proyectos/automatismos/IMG_20250707_164508486.jpg",
    ],
    title: "Mantenimiento eléctrico",
    text: "Prevención de fallas y optimización del rendimiento del sistema eléctrico. Realizamos mediciones de puesta a tierra, termografías y planes de mantenimiento preventivo.",
  },
];

function ServiciosPage() {
  return (
    <Container className="py-5 mt-5">
      <section id="servicios-main" className="py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Nuestros Servicios Especializados</h1>
          <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '800px' }}>
            Ofrecemos ingeniería aplicada y ejecución profesional para garantizar la seguridad y continuidad de su operación.
          </p>
        </div>
        <Row className="g-4">
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
