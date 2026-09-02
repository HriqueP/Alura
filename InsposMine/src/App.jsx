// import { useState } from "react";
import "./App.css";
import { FormularioDeInspo } from "./components/FormularioDeInspo";
import { CardInspo } from "./components/CardInspo";

function App() {
  const temas = [
    {
      id: 1,
      tema: "Retrofuturistico",
    },
    {
      id: 2,
      tema: "Medieval",
    },
    {
      id: 3,
      tema: "Futuristico",
    },
    {
      id: 4,
      tema: "Pirata",
    },
    {
      id: 5,
      tema: "Fantasia",
    },
  ];

  const inspos = [
    {
      id: 1,
      capa: "https://wallpapers.com/images/hd/treasure-planet-busy-montressor-port-zapex0361e4cg5qb.jpg",
      tema: temas[0],
      desc: "Base retrofuturistica",
    },
    {
      id: 2,
      capa: "https://wallpapers.com/images/hd/medieval-fantasy-village-art-pea5jpl50zjnfmht.jpg",
      tema: temas[1],
      desc: "Base medieval",
    },
    {
      id: 3,
      capa: "https://wallpapers.com/images/hd/surreal-bioluminescent-landscape-with-twin-moons-nvc9yt38uthtmo2a.jpg",
      tema: temas[4],
      desc: "Uma landscape de um mundo de fantasia, Uma landscape de um mundo de fantasia, Uma landscape de um mundo de fantasia, Uma landscape de um mundo de fantasia, Uma landscape de um mundo de fantasia, Uma landscape de um mundo de fantasia",
    },
  ];

  return (
    <>
      <main>
        <header>
          <h1>InsposMine</h1>
        </header>

        <FormularioDeInspo temas={temas} />

        <section className="container">
          {inspos.map((inspo, index) => {
            return <CardInspo key={index} inspo={inspo} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
