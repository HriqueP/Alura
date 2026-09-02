import { use } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { ToDoForm } from "./components/TodoForm";
import TodoContext from "./components/TodoProvider/TodoContext";
import { TodoGroup } from "./components/TodoGroup";

function App() {
  const {
    todos,
    addTodo,
    showDialog,
    openFormTodoDialog,
    closeFormTodoDialog,
    selectedTodo,
  } = use(TodoContext);

  const handleFormSubmit = (formData) => {
    addTodo(formData);
    openFormTodoDialog();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <TodoGroup
            heading="Para estudar"
            itens={todos.filter((t) => !t.completed)}
          />

          <TodoGroup
            heading="Concluido"
            itens={todos.filter((t) => t.completed)}
          />

          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              {/* Passa uma função diratamente na prop de onSubmit do formulario que gera a criação do objeto formData do formulario */}
              <ToDoForm
                onSubmit={handleFormSubmit}
                defaultValue={selectedTodo?.description} // ? ao lado da prop selectedTodo serve para que se a prop for null, ele não tenta acessar o atributo description da prop
              />
            </Dialog>
            <FabButton onClick={openFormTodoDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
