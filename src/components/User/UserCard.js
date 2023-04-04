import React from "react";

import styles from "./UserCard.module.css";

const UserCard = (props) => {
  return (
    <li className={styles.card}>
      <span>
        {props.name} ({props.age} years old)
      </span>
    </li>
  );
};

export default UserCard;
