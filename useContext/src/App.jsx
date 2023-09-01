import React, { useState } from "react";
import "./App.css";
import FunctionContextComponent from "./FunctionContextComponent";
// import ClassContextComponent from "./ClassContextComponent";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
    </>
  );
}

export default App;

// usage
// passing down props to any of the children component
// It's kinda like global state for all of the component
