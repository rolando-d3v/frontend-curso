import { createBrowserRouter, Navigate } from "react-router";
import Login from "../modules/auth/pages/login/Login";
import { PublicRoute, PrivateRoute } from "./ConfigRoutes";
import Mainlayout from "../layout/main_layout/Mainlayout";
import Homepage from "../modules/home/page/home/Homepage";
import ProfilePage from "../modules/home/page/profile/layout_profile/ProfilePage";

const PruebaPage = ({ title }) => (
  <div style={{ padding: "2rem" }}>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
  </div>
);

export const router = createBrowserRouter([
  // Redirección inicial: si entra a la raíz "/" va a "/home" (PrivateRoute lo enviará a /login si no está autenticado)
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  // ════════════════════════════════════════════════════════════
  //  RUTAS PRIVADAS  USUARIO
  // ════════════════════════════════════════════════════════════
  {
    element: <PrivateRoute allowedRoles={[1, 2]} />,
    children: [
      {
        element: <Mainlayout />,
        children: [
          {
            path: "/home",
            element: <Homepage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
  // ════════════════════════════════════════════════════════════
  //  RUTAS PRIVADAS  ADMINISTRADOR
  // ════════════════════════════════════════════════════════════
  {
    element: <PrivateRoute allowedRoles={[1]} />,
    children: [
      {
        path: "/admin",
        element: <PruebaPage title="Panel de control administrador" />,
      },
    ],
  },
  {
    path: "/no-autorizado",
    element: <PruebaPage title="Acceso no autorizado (403)" />,
  },
  {
    path: "*",
    element: <PruebaPage title="Página no encontrada (404)" />,
  },
]);
