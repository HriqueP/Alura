import "./component-B.style.css";

import { ComponentC } from "../ComponentC";

export function ComponentB() {
  return (
    <div className="box-B">
      <h1>Component B</h1>
      <ComponentC />
    </div>
  );
}
