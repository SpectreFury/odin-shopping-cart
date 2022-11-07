import React from "react";
import NavBar from "../NavBar/NavBar";

import HelloGanss from "../../assets/keyboards/helloganss.jpg";
import HelloGanssAlt from "../../assets/keyboards/helloganss-alt.jpg";
import DuckyOne from "../../assets/keyboards/ducky-one.jpg";
import RoyalKludge from "../../assets/keyboards/royal-kludge.jpg";

import Card from "../Card/Card";
import styles from "./Keyboard.module.css";

const KEYBOARD_LIST = [
  {
    name: "Hello Ganss GS 87C-HT",
    img: HelloGanss,
    price: "9,999.00",
  },
  {
    name: "Hello Ganss ALT 83G",
    img: HelloGanssAlt,
    price: "7,199.00",
  },
  {
    name: "Ducky One",
    img: DuckyOne,
    price: "12,499.00",
  },
  {
    name: "Royal Kludge RK61",
    img: RoyalKludge,
    price: "4,499.00",
  },
];

const Keyboard = () => {
  return (
    <React.Fragment>
      <NavBar darkMode={true} />
      <main className={styles.flex}>
        {KEYBOARD_LIST.map((keyboard) => (
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
