import { useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router";
import { loginServices } from "../../services/auth";
import { useDispatch } from "react-redux";
import { set_login } from "../../../../redux/slice/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



   const dispatch = useDispatch();

  const navigate = useNavigate();

  const enviarLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    const response = await loginServices(data);
    dispatch(set_login(response));
    navigate("/home", { replace: true });
    console.log(response);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.logo}>
          <h1>Mi Sistema</h1>
          <p>Inicia sesión para continuar</p>
        </div>

        <form onSubmit={enviarLogin} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="peru@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.loginButton}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
