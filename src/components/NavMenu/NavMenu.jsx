import { NavLink } from 'react-router-dom';
import styles from './nav-menu.module.css';

const NavMenu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/">
          Home page
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/books">
          PhoneBook
        </NavLink>
      </li>
    </ul>
  );
};

export { NavMenu };
