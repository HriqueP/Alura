import styles from "./typography.module.css";

const TAGS = {
  h1: "h1",
  h2: "h2",
  body: "p",
};

export const Typography = ({ children, variant }) => {
  /** Para definir o componente selecionamos o valor passado como variant com relação ao objeto de TAGS.
   * Caso não seja igual a nenhuma das chaves definidas no objeto pega o valor padrão de 'p'
   */
  const Component = TAGS[variant] || "p";

  /** Como styles tbm é um objeto podemos acessar o estilo da mesma forma que fizemos com o componente. */
  const variantClass = styles[variant] || styles.p;

  return <Component className={variantClass}>{children}</Component>;
};
