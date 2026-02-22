import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

const ServiciosPage = lazy(() => import('./pages/ServiciosPage'));
const SobreNosotrosPage = lazy(() => import('./pages/SobreNosotrosPage'));
const ContactoPage = lazy(() => import('./pages/ContactoPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "servicios",
        element: <ServiciosPage />,
      },
      {
        path: "sobre-nosotros",
        element: <SobreNosotrosPage />,
      },
      {
        path: "contacto",
        element: <ContactoPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<div className="text-center py-5">Cargando...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
