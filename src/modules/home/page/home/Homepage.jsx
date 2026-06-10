import { Link } from "react-router";

import styles from "./home.module.css";

function Homepage() {


  return (
    <div className={styles.home_page}>
      <Link to="/profile">
        <span>ir profile</span>
      </Link>
 
    </div>
  );
}

export default Homepage;
