import { Button } from "../Button";
import { TextInput } from "../TextInput";

import "./todo-form.style.css";

// Recebe como prop a função de onSubmit, que por sua vez gera o objeto formData ao enviar o formulario
export function ToDoForm({ onSubmit, defaultValue }) {
  return (
    <form className="todo-form" action={onSubmit}>
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
        name="description"
        defaultValue={defaultValue}
      />
      <Button>Salvar Item</Button>
    </form>
  );
}
