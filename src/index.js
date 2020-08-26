import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <>
      <h2>Нужно залогиниться!</h2>
      <button>Войти</button>
      <button>Выйти</button>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
