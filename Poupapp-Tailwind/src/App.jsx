import { Aside } from "./Components/Aside";
import Card from "./Components/Card";
import { Container } from "./Components/Container";
import { DailyBudget } from "./Components/DailyBudget";
import { Main } from "./Components/Main";
import { SavingsStatus } from "./Components/SavingsStatus";
import { SearchInput } from "./Components/SearchInput";
import { Transactions } from "./Components/Transactions";
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

          <section className="grid grid-cols-2 item-stretch gap-6">
            <Card>
              <Card.Header>Orçamento diario disponivel:</Card.Header>
              <Card.Body>
                <DailyBudget value={200} />
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingsStatus />
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>
                <Transactions />
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Minhas contas</Card.Header>
              <Card.Body>
                <p>R$200</p>
              </Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
}

export default App;
