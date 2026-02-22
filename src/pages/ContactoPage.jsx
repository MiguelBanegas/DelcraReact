import { useState, useRef } from 'react';
import { Container, Row, Col, Button, Form, Card, Alert, Spinner } from 'react-bootstrap';
import { EnvelopeFill, Whatsapp, Instagram, Send, CheckCircleFill, ExclamationTriangleFill } from 'react-bootstrap-icons';

function ContactoPage() {
  const [validated, setValidated] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    const formData = {
      name: form.formName.value,
      email: form.formEmail.value,
      subject: form.formSubject.value,
      message: form.formMessage.value,
    };

    try {
      // Nota: En producción (VPS), asegúrate de que esta URL sea accesible
      // Puedes usar una variable de entorno o una ruta relativa si usas un proxy
      const API_URL = window.location.hostname === 'localhost' 
        ? 'http://localhost:3001/api/contact' 
        : '/api/contact';

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '¡Excelente! Tu consulta ha sido enviada con éxito a través de delcra.com.ar. Te responderemos muy pronto.' 
        });
        setValidated(false);
        form.reset();
      } else {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ 
        type: 'danger', 
        message: 'No pudimos enviar el mail. Por favor, intenta contactarnos directamente por WhatsApp.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">Contactate con Nosotros</h1>
        <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '700px' }}>
          Estamos para asesorarte en tus proyectos eléctricos. Envianos tu consulta y te responderemos a la brevedad.
        </p>
      </div>

      <Row className="g-5">
        {/* Formulario de Contacto */}
        <Col lg={7}>
          <Card className="border-0 shadow-sm p-4 h-100">
            <h3 className="h4 fw-bold mb-4">Envianos un mensaje</h3>
            
            {status.type && (
              <Alert variant={status.type} className="mb-4 d-flex align-items-center gap-3">
                {status.type === 'success' ? <CheckCircleFill size={24} /> : <ExclamationTriangleFill size={24} />}
                <div>{status.message}</div>
              </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formName">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control required type="text" name="formName" placeholder="Ej: Juan Pérez" />
                    <Form.Control.Feedback type="invalid">Por favor, ingresá tu nombre.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control required type="email" name="formEmail" placeholder="ejemplo@correo.com" />
                    <Form.Control.Feedback type="invalid">Por favor, ingresá un email válido.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Asunto</Form.Label>
                <Form.Control required type="text" name="formSubject" placeholder="Ej: Presupuesto para local comercial" />
                <Form.Control.Feedback type="invalid">Por favor, indicá el asunto.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label>Consulta</Form.Label>
                <Form.Control required as="textarea" name="formMessage" rows={5} placeholder="Contanos en qué podemos ayudarte..." />
                <Form.Control.Feedback type="invalid">Por favor, escribí tu consulta.</Form.Control.Feedback>
              </Form.Group>
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-100 py-3 shadow-sm d-flex align-items-center justify-content-center gap-2 electric-glow"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar consulta
                  </>
                )}
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Información de Contacto y Redes */}
        <Col lg={5}>
          <div className="d-flex flex-column gap-4 h-100">
            <Card className="border-0 shadow-sm p-4 bg-primary text-white">
              <h3 className="h4 fw-bold mb-4">Información Directa</h3>
              <div className="d-grid gap-3">
                <a href="mailto:se.delcra@gmail.com" className="text-white text-decoration-none d-flex align-items-center gap-3 fs-5">
                  <div className="bg-white bg-opacity-20 rounded-circle p-2 d-flex">
                    <EnvelopeFill size={22} />
                  </div>
                  se.delcra@gmail.com
                </a>
                <a href="https://wa.me/5491159490184" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-flex align-items-center gap-3 fs-5">
                  <div className="bg-white bg-opacity-20 rounded-circle p-2 d-flex">
                    <Whatsapp size={22} />
                  </div>
                  +54 9 11 5949-0184
                </a>
                <a href="https://www.instagram.com/delcra_/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-flex align-items-center gap-3 fs-5">
                  <div className="bg-white bg-opacity-20 rounded-circle p-2 d-flex">
                    <Instagram size={22} />
                  </div>
                  @delcra_
                </a>
              </div>
            </Card>

            <div className="flex-grow-1">
              <h4 className="h5 fw-bold mb-3">Nuestra Ubicación</h4>
              <img
                src="/assets/mapas/mapa.png"
                alt="Mapa de ubicación de DELCRA"
                className="img-fluid rounded shadow-sm w-100"
                style={{ objectFit: 'cover', height: '240px' }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactoPage;
