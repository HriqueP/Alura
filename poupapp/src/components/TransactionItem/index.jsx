import styles from "./transactionitem.module.css";

const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const TransactionsItem = ({ transactionItem }) => {
  const detailsAdditionalClass =
    transactionItem.value > 0 ? styles.income : styles.expense;

  return (
    <div className={styles.transaction}>
      <div className={[styles.details, detailsAdditionalClass].join(" ")}>
        <p>{transactionItem.description}</p>
        <p>{formater.format(transactionItem.value)}</p>
      </div>
      <div className={styles.date}>
        {new Date(transactionItem.date).toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
};
