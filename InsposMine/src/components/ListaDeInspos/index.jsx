import "./lista-de-inspos.estilos.css";

export function ListaDeInspos({ temas, ...rest }) {
  return (
    <select className="opcoes-formulario" {...rest} defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {temas.map((tema) => {
        return (
          <option key={tema.id} value={tema.id}>
            {tema.tema}
          </option>
        );
      })}
    </select>
  );
}
