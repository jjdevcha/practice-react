import { createGlobalStyle } from "styled-components";

import "./App.css";
import ToDoList from "./ToDoList";

const GlobalStyle = createGlobalStyle`
  
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
