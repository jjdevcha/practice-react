import React, { useState, Fragment } from "react";
import "./App.css";
import UserInput from "./components/User/UserInput";
import UserCardList from "./components/User/UserCardList";

function App() {
  const [userCards, setUserCards] = useState([
    { name: "Remi", age: "3", id: "u1", key: "u1" },
    { name: "Lachie", age: "25", id: "u2", key: "u2" },
  ]);

  const addUserHandler = (name, age, id) => {
    setUserCards((prevUsers) => {
      return [
        ...prevUsers,
        {
          name: name,
          age: age,
          id: id,
        },
      ];
    });
  };

  return (
    <Fragment>
      <UserInput onAddUser={addUserHandler} />
      <UserCardList users={userCards} />
    </Fragment>
  );
}

export default App;
