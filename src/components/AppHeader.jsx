import { Container, Image } from 'react-bootstrap';

function AppHeader() {
  return (
    <Container className="text-center py-3">
      <a href="/" className="text-decoration-none text-dark">
        <Image src="/assets/logo/logoconR.jpeg" alt="Logo de Delcra con R" height="150" />
      </a>
    </Container>
  );
}

export default AppHeader;
