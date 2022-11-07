import React from "react";
import NavBar from "../NavBar/NavBar";

import Card from "../Card/Card";
import styles from "./Keyboard.module.css";

const Keyboard = (props) => {
  return (
    <React.Fragment>
      <NavBar darkMode={true} />
      <main className={styles.flex}>
        {props.keyboards.map((keyboard) => (
          <Card
            image={keyboard.img}
            name={keyboard.name}
            price={keyboard.price}
          />
        ))}
      </main>
    </React.Fragment>
  );
};

export default Keyboard;
