import "./component-D.style.css";

import { useContext } from "react";
import { UserContext } from "../ComponentA";

export function ComponentD() {
  const user = useContext(UserContext);

  return (
    <div className="box-D">
      <h1>Component D</h1>
      <h2>{`Tchau ${user}`}</h2>
    </div>
  );
}
