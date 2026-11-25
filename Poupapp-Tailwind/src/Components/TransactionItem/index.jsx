export const TransactionItem = ({ transactionItem }) => {
  const formater = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const expenseOrGain =
    transactionItem.value > 0
      ? "text-secondary-income"
      : "text-secondary-expense";

  return (
    <div className="flex items-center">
      <div className={`flex-grow ${expenseOrGain}`}>
        <p>{transactionItem.description}</p>
        <p>{formater.format(transactionItem.value)}</p>
      </div>
      <div className="text-neutral-text">
        {new Date(transactionItem.date).toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
};
