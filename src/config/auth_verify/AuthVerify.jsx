import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./verify.module.css";
import {
  authLogoutServices,
  authVerifyServices,
} from "../../modules/auth/services/auth";
import { set_login, set_logout } from "../../redux/slice/authSlice";


export const AuthVerify = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();


  const handleLogout = async () => {
    try {
      await authLogoutServices();

      dispatch(set_logout());

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const verifySession = async () => {
      try {
        const data = await authVerifyServices();

        if (data && data?.status !== 401) {
          dispatch(set_login(data));
        }
      } catch (error) {
        console.error("Error verificando sesión:", error);

        handleLogout();
      } finally {
        setIsLoading(false);
      }
    };

    verifySession();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner} />
        <p className={styles.text}>Cargando Sesión...</p>
      </div>
    );
  }

  return children;
};
