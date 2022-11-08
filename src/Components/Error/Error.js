import React from "react";
import NavBar from "../NavBar/NavBar";

import styles from "./Error.module.css";

const Error = (props) => {
  return (
    <div>
      <NavBar darkMode={true} itemCount={props.itemCount} />
      <div className={styles.center}>
        <h1 className={styles.error}>Error 404</h1>
        <div className={styles.details}>
          The request url was not found on the server.
        </div>
      </div>
    </div>
  );
};

export default Error;
