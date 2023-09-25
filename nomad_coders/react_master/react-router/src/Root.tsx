import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function Root() {
  return (
    <>
      <h1>
        <Header />
        <Outlet />
      </h1>
    </>
  );
}

export default Root;

// Outlet renders the childer of Route
