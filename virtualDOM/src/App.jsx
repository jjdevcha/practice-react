import React, { useState, useCallback } from "react";
import DemoOutput from "./DemoOutput";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);
  const [allowClick, setAllowClick] = useState(true);
  console.log("App loaded");

  const handleAllowClick = () => {
    setAllowClick((prev) => !prev);
  };

  const handleShowP = useCallback(() => {
    if (allowClick) {
      setShowP((prev) => !prev);
    }
  }, [allowClick]);
  // if a component is getting re-executed/ re-evaluated
  // it's child component will get re-executed/ re-evaluated as well no matter what
  // So sometimes we will have to do sth to prevent unnecessary re-execute/ re-evaluation

  // useCallback() helps the app to know the function won't change (recreated)
  // so that it won't re-evaluate/re-examinate over and over
  // But sometimes we need certain values to be updated
  // so that's why we have to specify the value in [] dependencies array

  return (
    <>
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <button onClick={handleAllowClick}>Allow click</button>
      <button onClick={handleShowP}>Click here</button>
    </>
  );
}

export default App;
