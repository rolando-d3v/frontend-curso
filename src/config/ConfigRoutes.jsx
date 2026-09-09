import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

// ruta publica
export const PublicRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.authSlice);
  console.log(isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};






// ruta privada
export const PrivateRoute = ({ allowedRoles }) => {
  const { isAuthenticated, user, roles } = useSelector((state) => state.authSlice);

  // Si no cuenta con autenticación ni usuario activo, redirigir a /login
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // Qué rol tiene el usuario
  const roleId = roles?.map((role) => role.role_id);
  if (allowedRoles && allowedRoles?.length > 0) {
    const hasPermission = allowedRoles?.some((role) => roleId?.includes(role));
    if (!hasPermission) {
      return <Navigate to="/no-autorizado" replace />;
    }
  }

  return <Outlet />;
};
