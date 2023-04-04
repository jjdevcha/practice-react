import React, { useState } from "react";

import styles from "./UserInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const userInputHandler = (event) => {
    event.preventDefault();
    props.onAddUser(name, age, Math.random().toString());
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={userInputHandler}>
        <label>Username</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Age</label>
        <input type="text" onChange={(e) => setAge(e.target.value)} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserInput;
