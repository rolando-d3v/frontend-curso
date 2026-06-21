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
  const { isAuthenticated, roles } = useSelector((state) => state.authSlice);

  //si tiene token
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  
  //que role tiene el usuario
  const roleId = roles?.map((role) => role.role_id);
  if (allowedRoles && allowedRoles?.length > 0) {
    const hasPermission = allowedRoles?.some((role) => roleId?.includes(role));
    if (!hasPermission) {
      return <Navigate to="/no-autorizado" replace />;
    }
  }

  return <Outlet />;
};
