import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}></div>
        <span>App</span>
      </div>

      <input type="text" placeholder="Search" className={styles.search} />

      <nav className={styles.nav}>
        <a href="/">Buscar</a>
        <a href="/">Personas</a>
        <a href="/">Contactos</a>

        <img
          src="https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4861.jpg?semt=ais_hybrid&w=740&q=80"
          alt="avatar"
          className={styles.avatar}
        />
      </nav>
    </header>
  );
}
