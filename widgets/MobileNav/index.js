import { MdHome, MdSearch, MdAccountCircle } from "react-icons/md";
import styles from "./index.module.css";

export const MobileNav = (props) => {
  return <nav
    className={styles.root}
  >
    <span
      className={styles.icon_font_size}
    >
      <MdHome fontSize="inherit"/>
    </span>
    <span
      className={styles.icon_font_size}
    >
      <MdSearch fontSize="inherit"/>
    </span>
    <span
      className={styles.icon_font_size}
    >
      <MdAccountCircle fontSize="inherit"/>
    </span>
  </nav>
}