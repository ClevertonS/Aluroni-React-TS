import styles from 'pratos.module.scss';
import { useLocation } from 'react-router-dom';

export function Pratos() {
  console.log(useLocation);
  return (<section>
      Prato
  </section>
  );
}
