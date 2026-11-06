import styles from "./aside.module.css";

import logo from "../../assets/logo.svg";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <img src={logo} alt="" className={styles.aside_logo} />
      <footer className={styles.footer}>
        Desenvolvido por Alura. Projeto sem fins comerciais.
      </footer>
    </aside>
  );
};
