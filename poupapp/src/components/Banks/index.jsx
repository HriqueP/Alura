import styles from "./banks.module.css";

import { IconWallet } from "../icons";

const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const Banks = ({ accountItem }) => {
  return (
    <div className={styles.banks}>
      <div className={styles.bank_details}>
        <IconWallet />
        <p>{accountItem.bank}</p>
      </div>
      <div className={styles.bank_account_value}>
        <p>Saldo</p>
        <p>{formater.format(accountItem.balance)}</p>
      </div>
    </div>
  );
};
