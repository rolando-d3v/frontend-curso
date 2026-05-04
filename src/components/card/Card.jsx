import avatar from "../../assets/wallpapers/ia_avatar.png";
import styles from "./card.module.css";

export const Card = ({ pro }) => {
  console.log(pro);

  const darClick = () => {
    alert("click llacuas 2026");
    console.log("Apendiendo react ");
    console.log("Apendiendo python ");
  };

  return (
    <div className={styles.card}>
      <img
        src="https://elcomercio.pe/resizer/v2/6Y2EDIISGFGVFANEVDCR5LCG34.jpg?auth=f58b5c647a09717054d85bb8b9a6bc624bfcb14fe9c60b5246730ea6a513e2b0&width=1200&height=691&quality=75&smart=true"
        alt="foto_goku"
        className={styles.imagen_card}
      />
      <h1 className={styles.titulo}>{pro.nombre} </h1>
      <p className={styles.descripcion}>{pro.descripcion}</p>
      <p>
        Precio:
        <span className={styles.precio}> S/{pro.precio}</span>
      </p>

      <button className={styles.boton} onClick={darClick}>
        Agregar al carrito
      </button>
    </div>
  );
};
