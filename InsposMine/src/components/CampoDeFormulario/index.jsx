import "./campo-de-formulario.estilos.css";

export function CampoDeFormulario({ children }) {
  return <fieldset className="campos-formulario">{children}</fieldset>;
}
