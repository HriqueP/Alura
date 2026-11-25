import { BankAccount } from "../BankAccount";
import { Button } from "../Button";
import { IconWallet } from "../Icons";

const accounts = [
  { bank: "Anybank", balance: 1200 },

  { bank: "Bytebank", balance: 800 },

  { bank: "Switch Bank", balance: 1800 },
];

export const Accounts = () => {
  return (
    <>
      <ul className="flex flex-col gap-4 mb-4 h-full">
        {accounts.map((account, index) => {
          return (
            <li key={index}>
              <BankAccount account={account} />
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center">
        <Button>
          <IconWallet />
          Adicionar Transação
        </Button>
      </div>
    </>
  );
};
