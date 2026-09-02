import "./formulario-de-inspo.estilos.css";

import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoDeInput } from "../CampoDeInput";
import { ListaDeInspos } from "../ListaDeInspos";

export function FormularioDeInspo({ temas }) {
  return (
    <form className="form-inspo" action="">
      <TituloFormulario>Nova Inspiração</TituloFormulario>

      <div className="itens-formulario">
        <CampoDeFormulario>
          <Label htmlFor="tituloInspo">Titulo</Label>
          <CampoDeInput
            type="text"
            name="tituloInspo"
            id="tituloInspo"
            placeholder="Titulo da inspiração"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="imageInspo">URL Imagem</Label>
          <CampoDeInput
            type="text"
            name="imageInspo"
            id="imageInspo"
            placeholder="https://..."
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="temaInspo">Tema</Label>
          <ListaDeInspos name="temaInspo" id="temaInspo" temas={temas} />
        </CampoDeFormulario>
      </div>
    </form>
  );
}
