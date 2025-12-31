import { useEffect } from 'react';
import AppNavbar from './AppNavbar';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { Container } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Layout() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <ScrollToTop />
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
