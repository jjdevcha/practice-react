import React from "react";

import styles from "./UserCardList.module.css";
import UserCard from "./UserCard";

const UserCardList = (props) => {
  return (
    <ul className={styles.list}>
      {props.users.map((user) => (
        <UserCard name={user.name} age={user.age} id={user.id} key={user.id} />
      ))}
    </ul>
  );
};

export default UserCardList;
