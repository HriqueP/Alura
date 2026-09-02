import "./label.estilos.css";

export function Label({ children, htmlFor }) {
  return (
    <label className="form-labels" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
