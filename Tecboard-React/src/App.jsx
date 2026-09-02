import { useState } from "react";
import "./App.css";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";

/*
// No React, componentes são funções

// props é um objeto -> props.ALGUMACOISA
function TituloFormulario(props) {
  return <h2>{props.children}</h2>;
}

// destructuring o objeto props e pegando somente a propriedade de children
function CampoDeFormulario({ children }) {
  return <fieldset>{children}</fieldset>;
}

// destructuring o objeto props e pegando as propriedades de children e htmlFor
function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

// faz um spread operator e espalha todas as propriedades recebidas dentro do campo do input
function CampoDeEntrada(props) {
  return <input {...props} />;
}

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento!</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Qual o nome do evento ?</Label>
        <CampoDeEntrada
          type="text"
          name="nomeEvento"
          id="nome"
          placeholder="Summer dev hits!"
        />
      </CampoDeFormulario>
    </form>
  );
}
*/

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligencia artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no front",
    },
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
    console.log("Evento => ", eventos);
  }

  return (
    <>
      <main>
        <header>
          <img src="./logo.png" alt="" />
        </header>
        <Banner />

        <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />

        {/* 
        Utilizando o .map(callback) e definindo uma function expression dentro do metodo
        para renderizar os itens do array de temas

        OU 

        Definir o callback como uma arrow funciton   
        temas.map((item) => {
          return (
            <section key={item.id}>
              <Tema tema={item} />
            </section>
          );
        })
        */}

        <section className="container">
          {temas.map(function (tema) {
            if (
              !eventos.some((evento) => {
                return evento.tema.id == tema.id;
              })
            ) {
              return null;
            }
            /* Podemos tbm ter um renderização condicional com o &&

            true && <Componente /> --> React renderiza o componente
            false && <Componente /> --> React não renderiza nada

            // Com early return
            temas.map(function (tema) {
              if (!eventos.some((evento) => evento.tema.id == tema.id)) { // return implicito por isso não tem
                return null
              }
              return (
                <section key={tema.id}>
                  ...
                </section>
              )
            })

            // Com &&
            temas.map(function (tema) {
              return eventos.some((evento) => evento.tema.id == tema.id) && (
                <section key={tema.id}>
                  ...
                </section>)
            })
            */

            return (
              <section key={tema.id}>
                <Tema tema={tema} />
                <div className="eventos">
                  {eventos
                    .filter((evento) => {
                      return evento.tema.id == tema.id;
                    })
                    .map((evento, index) => {
                      return <CardEvento key={index} evento={evento} />;
                    })}
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
