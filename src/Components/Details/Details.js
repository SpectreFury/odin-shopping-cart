import React from "react";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import styles from "./Details.module.css";

const Details = (props) => {
  const { id } = useParams();
  const { keyboards } = props;

  const keyboard = keyboards.filter((keyboard) => keyboard.id === id)[0];

  return (
    <React.Fragment>
      <NavBar darkMode={true} />
      <section className={styles.flex}>
        <img src={keyboard.img} className={styles.image} />
        <h1 className={styles.title}>{keyboard.name}</h1>
        <div className={styles.price}>₹{keyboard.price}</div>
        <div className={styles.container}>
          <input type="number" className={styles.input} min="1" />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Details;
