import "./label.estilos.css";

// destructuring o objeto props e pegando as propriedades de children e htmlFor
export function Label({ children, htmlFor }) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
