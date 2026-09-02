/*
useContext() => Um Hook do React que permite compartilhar valores entre multiplos niveis de componentes
                sem ter que passar props por cada nivel.


COMPONENT PROVIDER => O componente que tem os dados que queremos ter acesso
1.  import { createContext } from 'react';
2.  export const MyContext = createContext();
3.  <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>

No React 19 o .Provider já não é mais necessário


CONSUMER COMPONENT => Qualquer componente que precisar consumir os dados providor pelo PPROVIDER
1.  import { useContext } from 'react'
    import { MyContext } from './ComponentA'
2.  const value = useContext(MyContext)


*/

import "./App.css";
import { ComponentA } from "./Components/ComponentA";

function App() {
  return (
    <>
      <ComponentA />
    </>
  );
}

export default App;
