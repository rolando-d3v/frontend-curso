import { useDispatch } from "react-redux";
import { authLogoutServices } from "../../modules/auth/services/auth";
import { set_logout } from "../../redux/slice/authSlice";
import styles from "./navigation.module.css";
import { useNavigate, Link } from "react-router";

export default function Navigation() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await authLogoutServices();

      dispatch(set_logout());

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}></div>
        <span>App</span>
      </div>

      <input type="text" placeholder="Search" className={styles.search} />

      <nav className={styles.nav}>
        <Link to="/home">Home</Link>
        <Link to="/personas">Personas</Link>
        <Link to="/contactos">Contactos</Link>

        <img
          src="https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4861.jpg?semt=ais_hybrid&w=740&q=80"
          alt="avatar"
          className={styles.avatar}
        />

        <button onClick={handleLogout} className={styles.logoutButton}>
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
}
