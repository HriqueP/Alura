import { IconBank } from "../icons";
import { Button } from "../Button";
import { Banks } from "../Banks";
import styles from "./accounts.module.css";

export const Accounts = () => {
  const accounts = [
    { bank: "Anybank", balance: 1200 },

    { bank: "Bytebank", balance: 800 },

    { bank: "Switch Bank", balance: 1800 },

    { bank: "Switch Bank", balance: 1800 },
  ];

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {accounts.map((accountItem, index) => {
          return (
            <li key={index}>
              <Banks accountItem={accountItem} />
            </li>
          );
        })}
      </ul>

      <div className={styles.actions}>
        <Button>
          <IconBank />
          Adicionar Conta
        </Button>
      </div>
    </div>
  );
};
