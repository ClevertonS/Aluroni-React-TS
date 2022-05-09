import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './menu.module.scss';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <Logo />
    </nav>
  );
}
