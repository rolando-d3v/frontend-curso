import { Card } from "../../components/card/Card";
import styles from "./home.module.css";

function Homepage() {

const productos = [
  {
    id: 1,
    nombre: "Laptop Asus",
    descripcion: "Intel Core i9, 16gb ram, 512gb ssd",
    precio: 1200,
    imagen:
      "https://elcomercio.pe/resizer/v2/6Y2EDIISGFGVFANEVDCR5LCG34.jpg?auth=f58b5c647a09717054d85bb8b9a6bc624bfcb14fe9c60b5246730ea6a513e2b0&width=1200&height=691&quality=75&smart=true",
  },
  {
    id: 2,
    nombre: "Laptop lenovo",
    descripcion: "Intel Core i5, 8gb ram, 512gb ssd",
    precio: 2200,
    imagen:
      "https://elcomercio.pe/resizer/v2/6Y2EDIISGFGVFANEVDCR5LCG34.jpg?auth=f58b5c647a09717054d85bb8b9a6bc624bfcb14fe9c60b5246730ea6a513e2b0&width=1200&height=691&quality=75&smart=true",
  },
  {
    id: 3,
    nombre: "Laptop acer ",
    descripcion: "Intel Core i3, 16gb ram, 512gb ssd",
    precio: 3200,
    imagen:
      "https://elcomercio.pe/resizer/v2/6Y2EDIISGFGVFANEVDCR5LCG34.jpg?auth=f58b5c647a09717054d85bb8b9a6bc624bfcb14fe9c60b5246730ea6a513e2b0&width=1200&height=691&quality=75&smart=true",
  },
  {
    id: 4,
    nombre: "Laptop Dell",
    descripcion: "Intel Core i9, 16gb ram, 512gb ssd",
    precio: 1900,
    imagen:
      "https://elcomercio.pe/resizer/v2/6Y2EDIISGFGVFANEVDCR5LCG34.jpg?auth=f58b5c647a09717054d85bb8b9a6bc624bfcb14fe9c60b5246730ea6a513e2b0&width=1200&height=691&quality=75&smart=true",
  },
  {
    id: 5,
    nombre: "Laptop hp",
    descripcion: "Intel Core i5, 16gb ram, 512gb ssd",
    precio: 2000,
    imagen:
      "https://elcomercio.pe/resizer/v2/6Y2EDIISGFGVFANEVDCR5LCG34.jpg?auth=f58b5c647a09717054d85bb8b9a6bc624bfcb14fe9c60b5246730ea6a513e2b0&width=1200&height=691&quality=75&smart=true",
  },
  {
    id: 6,
    nombre: "Laptop toshiba",
    descripcion: "Intel Core i3, 4gb ram, 512gb ssd",
    precio: 900,
    imagen:
      "https://elcomercio.pe/resizer/v2/6Y2EDIISGFGVFANEVDCR5LCG34.jpg?auth=f58b5c647a09717054d85bb8b9a6bc624bfcb14fe9c60b5246730ea6a513e2b0&width=1200&height=691&quality=75&smart=true",
  },
];




  return (
    <div className={styles.home_page}>
      <div className={styles.card_container}  >
        {productos.map((pro) => (
          <Card  pro={pro}  />
        ))}
      </div>
      <hr />
      <div className={styles.card_container}  >
        {productos.map((pro) => (
          <Card  pro={pro}  />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
