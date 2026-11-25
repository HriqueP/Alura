import { IconBank } from "../Icons";

const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const BankAccount = ({ account }) => {
  return (
    <div className="flex justify-between text-neutral-text w-full">
      <div className="flex gap-2 items-center flex-3">
        <IconBank />
        <p>{account.bank}</p>
      </div>
      <div className="flex flex-col items-start flex-1">
        <p className="font-bold">Saldo</p>
        <p>{formater.format(account.balance)}</p>
      </div>
    </div>
  );
};
