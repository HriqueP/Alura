import "./component-A.style.css";

import { useState, useContext, createContext } from "react";
import { ComponentB } from "../ComponentB";

export const UserContext = createContext();

export function ComponentA() {
  const [user, setUser] = useState("Poletti"); // State inicial de user

  return (
    <div className="box-A">
      <h1>Component A</h1>
      <h2>{`Olá ${user}`}</h2>

      {/*
      Usando props para passar o valor de user até o Component D 
      
      Passos a passo:
      - No ComponentA passar um atributo user com valor de user para o ComponentB 
      - No ComponentB passar um atributo user com valor de user, que foi recebido como uma prop, para o ComponentC
      - No ComponentC passar um atributo user com valor de user, que foi recebido como uma prop, para o ComponentD 
      - No ComponentD temos acesso a prop user, que podemos usar para fazer o display do valor de user, definido no ComponentA
      */}
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}
