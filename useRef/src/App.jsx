import React, { useState, useRef } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
  }

  // const countRender = useRef(0);

  // Ref looks like this inside
  // {current: 0}

  // useEffect(() => {
  //   countRender.current = countRender.current + 1;
  // });

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
      {/* <div>I've rendered {countRender.current} times</div> */}
    </>
  );
}

export default App;

// useRef is very similar to useState
// But difference is that it doesn't re-render the component when the ref is changed
// So we can use it when we don't wanna re-render the component

// Never use useRef to change state
// it doesn't actually alters states

// Usage of useRef
// 1. Lets you reference a value that's not needed for rendering
// 2. manipulating DOM
// 3. storing previous state -> I quite not understand this part clearly yet
