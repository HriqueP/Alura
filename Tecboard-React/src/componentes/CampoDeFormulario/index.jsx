import "./campo-de-formulario.estilos.css";

// destructuring o objeto props e pegando somente a propriedade de children
export function CampoDeFormulario({ children }) {
  return <fieldset className="campo-form">{children}</fieldset>;
}
