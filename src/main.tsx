import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegistrationPage from './pages/RegistrationPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: '*', element: <NotFoundPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/registration', element: <RegistrationPage /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
