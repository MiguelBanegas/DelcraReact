import { Container, Image } from 'react-bootstrap';

function AppHeader() {
  return (
    <Container className="text-center py-3">
      <a href="/" className="text-decoration-none text-dark">
        <Image src="/assets/logo/logoconR.jpeg" alt="Logo de Delcra con R" height="150" />
        <div className="mt-2">
          <h1 className="h4 m-0">DELCRA<sup><small>®</small></sup><br />Servicios Eléctricos</h1>
          <p className="m-0 fs-5 text-secondary fst-italic">⚡Tecnología Aplicada a la Energía⚡</p>
        </div>
      </a>
    </Container>
  );
}

export default AppHeader;
