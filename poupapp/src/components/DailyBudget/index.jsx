import styles from "./dailybudget.module.css";

/**
 * Biblioteca nativa do JS que permite transforma um valor numerico em moeda de um pais
 * Instaciado a classe e dentro da classe é passado a linggua do pais e um objeto de configuração
 * que define o tipo de conversão e nesse caso o tipo de moeda do pais
 */
const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const DailyBudget = ({ value }) => {
  return <p className={styles.daily_budget}>{formater.format(value)}</p>;
};
