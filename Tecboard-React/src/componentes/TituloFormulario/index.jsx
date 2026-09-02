import "./titulo-do-formulario.estilos.css";

// props é um objeto -> props.ALGUMACOISA
export function TituloFormulario(props) {
  return <h2 className="titulo-form">{props.children}</h2>;
}
