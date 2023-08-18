// Kata 2
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    return 0;
  });
  const [theme, setTheme] = useState("blue");

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
