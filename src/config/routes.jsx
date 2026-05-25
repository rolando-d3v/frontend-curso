import { createBrowserRouter } from "react-router";
import Login from "../modules/auth/pages/login/Login";
import { PublicRoute, PrivateRoute } from "./ConfigRoutes";
import Mainlayout from "../layout/main_layout/Mainlayout";

const PruebaPage = ({ title }) => (
  <div style={{ padding: "2rem" }}>
    <h2>{title}</h2>
    <p style={{ color: "var(--text)", marginTop: "0.5rem" }}>
      Esta sección está en desarrollo...
    </p>
  </div>
);

export const router = createBrowserRouter([
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
            element: <PruebaPage title="Inicio Home" />,
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
    path: "*",
    element: <PruebaPage title="Página no encontrada (404)" />,
  },
]);
