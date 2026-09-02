import "./card-inspo.estilos.css";

export function CardInspo({ inspo }) {
  return (
    <div className="card-inspo">
      <img src={inspo.capa} alt="Retro" />
      <div className="corpo">
        <h2 className="tema">{inspo.tema.tema}</h2>
        <p className="titulo">{inspo.desc}</p>
      </div>
    </div>
  );
}
