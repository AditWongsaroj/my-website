import styles from "../page.module.css";
import React from "react";
import Tictactoe from "../lib/react-tictactoe-example/src/App";

const projects = () => {
  return (
    <>
      <div className={styles.content}>
        <div>projects</div>
        <div className={styles.center}>
          <div className={styles.card}>
            <u>Tic Tac Toe</u>
            <Tictactoe />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default projects;
