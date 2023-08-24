import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.linksBlock}>
        <Link to={"https://react.dev/"} target="_blank" className={styles.link}>
          Powered by <span className={styles.react}>React</span>
        </Link>
        <Link to={"https://github.com/aemorozov/v3-react"} target="_blank" className={styles.link}>
          This website on <span className={styles.react}>GitHub</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;