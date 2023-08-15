import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    return 0;
  });

  const [theme, setTheme] = useState("blue");

  // if you put function version inside the useState, it only renders once at first

  function decrementCount() {
    setCount((prev) => prev - 1);
  }

  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

// You can only use React hooks in function components (Can't use in class components)
// React Hooks can't be nested inside a function or if statement etc.
// It has to be called in the exact same order in every component render
