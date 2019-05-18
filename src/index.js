import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  function contar() {}

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>
        Count: <span id="qtd">0</span>
      </p>
      <button onClick={contar}>Count</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
