import { Aside } from "./Components/Aside";
import Card from "./Components/Card";
import { Container } from "./Components/Container";
import { Main } from "./Components/Main";
import { SearchInput } from "./Components/SearchInput";
import { Typography } from "./Components/Typography";

function App() {
  return (
    <div className="bg-neutral-darker min-h-screen">
      <Container>
        <Aside />

        <Main>
          <SearchInput name="Henrique" />

          <div>
            <Typography variant={"h1"}>Olá, Henrique!</Typography>

            <Typography variant={"body"}>
              Veja como estão suas finanças hoje.
            </Typography>
          </div>

          <section>
            <Card>
              <Card.Header>Orçamento diario disponivel:</Card.Header>
              <Card.Body>R$200</Card.Body>
            </Card>

            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>R$200</Card.Body>
            </Card>

            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>R$200</Card.Body>
            </Card>

            <Card>
              <Card.Header>Minhas contas</Card.Header>
              <Card.Body>R$200</Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
}

export default App;
