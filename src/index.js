import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";

function App() {
  let [entered, setEntered] = useState(false);

  let handleEnterClick = () => {
    setEntered((entered = true));
  };
  let handleExitClick = () => {
    setEntered((entered = false));
  };

  if (!entered) {
    return (
      <>
        <h2>Нужно залогиниться!</h2>
        <button onClick={handleEnterClick}>Войти</button>
      </>
    );
  } else {
    return (
      <>
        <Shop />
        <button onClick={handleExitClick}>Выйти</button>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
