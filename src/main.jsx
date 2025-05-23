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
import MyProfile from './pages/MyProfiel/MyProfile.jsx';
import { Provider } from 'react-redux';
import store from './Redux/store.js';
import Chat from './components/Chat/Chat.jsx';

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
    path: '/create-team',
    element: (
      <ProtectedRoute>
        <CreateTeam />,
      </ProtectedRoute>
    ),
  },
  {
    path: 'my-profile',
    element: (
      <ProtectedRoute>
        <MyProfile />,
      </ProtectedRoute>
    ),
  },
  { path: 'chat', element: <Chat /> },
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
