import "./formulario-de-evento.estilos.css";

import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";

export function FormularioDeEvento({ temas, aoSubmeter }) {
  function aoFormSubmetido(formData) {
    const evento = {
      capa: formData.get("capaEvento"),
      tema: temas.find((tema) => {
        return tema.id == formData.get("temaEvento");
      }),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
    };

    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento!</TituloFormulario>

      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento ?</Label>
          <CampoDeEntrada
            type="text"
            name="nomeEvento"
            id="nomeEvento"
            placeholder="Summer dev hits!"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="capaEvento">Qual URL da capa ?</Label>
          <CampoDeEntrada
            type="text"
            name="capaEvento"
            id="capaEvento"
            placeholder="http://..."
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento ?</Label>
          <CampoDeEntrada type="date" name="dataEvento" id="dataEvento" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do evento ?</Label>
          <ListaSuspensa name="temaEvento" id="temaEvento" temas={temas} />
        </CampoDeFormulario>
      </div>

      <div className="acoes">
        <Botao>Criar Evento</Botao>
      </div>
    </form>
  );
}
