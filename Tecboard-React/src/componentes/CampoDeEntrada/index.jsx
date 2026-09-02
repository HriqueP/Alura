import "./campo-de-entrada.estilos.css";

// faz um spread operator e espalha todas as propriedades recebidas dentro do campo do input
export function CampoDeEntrada(props) {
  return <input className="campo-entrada-form" {...props} />;
}
