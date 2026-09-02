import "./lista-suspensa.estilos.css";

export function ListaSuspensa({ temas, ...rest }) {
  return (
    <select className="lista-suspensa-form" {...rest} defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {temas.map((tema) => {
        return (
          <option key={tema.id} value={tema.id}>
            {tema.nome}
          </option>
        );
      })}
    </select>
  );
}
