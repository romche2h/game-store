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
import MyPrifile from './pages/MyProfiel/MyPrifile.jsx';
import { Provider } from 'react-redux';
import store from './Redux/store.js';

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
  { path: 'my-profiel', element: <MyPrifile /> },
  {
    path: '*',
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
