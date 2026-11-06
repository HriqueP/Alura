import { TransactionsItem } from "../TransactionItem";
import { Button } from "../Button";
import styles from "./transactions.module.css";
import { IconCurrency } from "../icons";

export const Transactions = () => {
  const itens = [
    {
      description: "Delivery iFood",
      value: -20,
      date: "2024-10-01T00:00:00-03:00",
    },
    {
      description: "Papelaria Mila",
      value: -80,
      date: "2024-10-03T00:00:00-03:00",
    },
    {
      description: "Freela (2ª parte)",
      value: 1000,
      date: "2024-10-03T00:00:00-03:00",
    },
    {
      description: "Magazine Luiza",
      value: -300,
      date: "2024-10-05T00:00:00-03:00",
    },
  ];

  return (
    <>
      <ul className={styles.list}>
        {itens.map((transactionItem, index) => {
          return (
            <li key={index}>
              <TransactionsItem transactionItem={transactionItem} />
            </li>
          );
        })}
      </ul>

      <div className={styles.actions}>
        <Button>
          <IconCurrency />
          Adicionar Transação
        </Button>
      </div>
    </>
  );
};
