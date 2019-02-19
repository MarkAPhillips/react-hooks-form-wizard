import React from "react";
import ReactDOM from "react-dom";
import { Wizard } from "./components";
import { initialState } from "./constants";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Form Wizard</h1>
      <Wizard initialState={initialState} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
