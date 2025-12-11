import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage';

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
        path: "contacto",
        element: <ContactoPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;