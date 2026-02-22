import { Container, Row, Col, Card } from 'react-bootstrap';
import { ClockHistory, ShieldCheck, LightningCharge, People } from 'react-bootstrap-icons';

function SobreNosotrosPage() {
  return (
    <Container className="py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">Sobre Nosotros</h1>
        <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '800px' }}>
          Conocé nuestra historia, nuestros valores y el compromiso que asumimos en cada proyecto eléctrico.
        </p>
      </div>

      <Row className="mb-5 align-items-center">
        <Col lg={6}>
          <div className="pe-lg-4">
            <h2 className="h3 fw-bold mb-4 d-flex align-items-center gap-3">
              <ClockHistory className="text-primary" size={32} />
              Nuestra Historia
            </h2>
            <div className="text-secondary fs-5 lh-base">
              <p>
                <strong>DELCRA<sup>®</sup></strong> nace con una idea clara: entender que la electricidad no es solo un servicio
                técnico, sino un sistema que sostiene el funcionamiento, la seguridad y el crecimiento de
                cada espacio donde se aplica.
              </p>
              <p>
                Desde hace más de 10 años trabajamos desarrollando soluciones eléctricas para industrias,
                comercios, hoteles y hogares, construyendo una trayectoria basada en la confianza, la
                capacitación permanente y la mejora continua.
              </p>
              <p>
                Con el tiempo entendimos que no existen dos instalaciones iguales. Cada cliente tiene
                procesos, necesidades y desafíos propios. Por eso en <strong>DELCRA<sup>®</sup></strong> cada proyecto comienza
                con algo que nos apasiona: estudiar, analizar y diseñar sistemas eléctricos pensados
                especialmente para cada entorno.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={6}>
           <div className="bg-light p-2 rounded-4 shadow-sm overflow-hidden">
              <img 
                src="/assets/nosotros/historia.jpg" 
                alt="Trayectoria de DELCRA" 
                className="img-fluid rounded-3 shadow-sm w-100 h-100"
                style={{ objectFit: 'cover', minHeight: '400px' }}
              />
           </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={12}>
          <div className="bg-primary text-white p-5 rounded-4 shadow-lg text-center">
             <h2 className="display-6 fw-bold mb-4">Más que instalaciones, creamos confianza</h2>
             <p className="fs-5 opacity-90 mx-auto" style={{ maxWidth: '900px' }}>
                Nuestro trabajo no se limita a ejecutar instalaciones. Creamos soluciones que buscan
                prevenir fallas, optimizar el consumo energético y garantizar seguridad en cada detalle,
                protegiendo personas, equipos e infraestructura.
             </p>
          </div>
        </Col>
      </Row>

      <Row className="g-4 mb-5 text-center">
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm p-4 hover-lift">
            <div className="text-primary mb-3 d-flex justify-content-center">
              <ShieldCheck size={48} />
            </div>
            <h3 className="h5 fw-bold">Seguridad Total</h3>
            <p className="text-secondary">Garantizamos seguridad en cada detalle, protegiendo personas y equipos.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm p-4 hover-lift">
            <div className="text-primary mb-3 d-flex justify-content-center">
              <LightningCharge size={48} />
            </div>
            <h3 className="h5 fw-bold">Eficiencia Energética</h3>
            <p className="text-secondary">Optimizamos el consumo para generar valor a largo plazo.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm p-4 hover-lift">
            <div className="text-primary mb-3 d-flex justify-content-center">
              <People size={48} />
            </div>
            <h3 className="h5 fw-bold">Compromiso Real</h3>
            <p className="text-secondary">Trabajamos junto a nuestros clientes participando en proyectos desafiantes.</p>
          </Card>
        </Col>
      </Row>

      <div className="text-secondary fs-5 lh-base mb-5 bg-light p-4 rounded-4 border-start border-primary border-4">
        <p>
          Trabajamos con procesos técnicos definidos que nos permiten lograr instalaciones
          ordenadas, eficientes y duraderas, generando valor a largo plazo para cada propiedad o
          sistema productivo.
        </p>
        <p className="mb-0">
          Hoy, <strong>DELCRA<sup>®</sup></strong> continúa creciendo junto a sus clientes, participando en proyectos cada vez
          más desafiantes, manteniendo el mismo compromiso que nos caracteriza desde el primer
          día: desarrollar sistemas eléctricos confiables, seguros y preparados para el futuro.
        </p>
      </div>
    </Container>
  );
}

export default SobreNosotrosPage;
