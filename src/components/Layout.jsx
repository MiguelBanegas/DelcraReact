import AppNavbar from './AppNavbar';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <AppHeader />
      <AppNavbar />
      <Container as="main" fluid className="flex-grow-1 p-0">
        <Outlet />
      </Container>
      <AppFooter />
    </>
  );
}

export default Layout;
