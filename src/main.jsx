import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import SteamSuccess from './pages/SteamSuccess/SteamSuccess.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import CreateTeam from './pages/CreateTeam/CreateTeam.jsx';
import RedirectIfAuthenticated from './components/RedirectIfAuthenticated/RedirectIfAuthenticated.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {
    path: 'login',
    element: (
      <RedirectIfAuthenticated>
        <Login />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: '/register',
    element: (
      <RedirectIfAuthenticated>
        <Register />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: '/steam-success',
    element: <SteamSuccess />,
  },
  {
    path: '/creat-team',
    element: (
      <ProtectedRoute>
        <CreateTeam />,
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
