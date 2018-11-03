import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState } from "react";

import Hello from "./Hello";

import "./styles.css";

function App() {
  const [thing, setThing] = useState(0);

  return (
    <div className="App">
      <h1>Hello React TS</h1>
      <h2>TypeScript now works in CRA!</h2>

      <Hello type="TypeScript" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
