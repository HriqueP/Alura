import "./component-C.style.css";

import { ComponentD } from "../ComponentD";

export function ComponentC() {
  return (
    <div className="box-C">
      <h1>Component C</h1>
      <ComponentD />
    </div>
  );
}
