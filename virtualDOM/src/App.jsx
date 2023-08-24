import React, { useState } from "react";
import DemoOutput from "./DemoOutput";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);
  console.log("App loaded");

  function handleShowP() {
    setShowP((prev) => !prev);
  }
  // if a component is getting re-executed/ re-evaluated
  // it's child component will get re-executed/ re-evaluated as well no matter what
  // So sometimes we will have to do sth to prevent unnecessary re-execute/ re-evaluation

  return (
    <>
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <button onClick={handleShowP}>Click here</button>
    </>
  );
}

export default App;
