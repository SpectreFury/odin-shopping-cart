import React, { useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import styles from "./Details.module.css";

const Details = (props) => {
  const { id } = useParams();
  const { keyboards } = props;
  const [quantity, setQuantity] = useState(1);

  const keyboard = keyboards.filter((keyboard) => keyboard.id === id)[0];

  return (
    <React.Fragment>
      <NavBar darkMode={true} cartItems={props.cartItems} />
      <section className={styles.flex}>
        <img src={keyboard.img} className={styles.image} />
        <h1 className={styles.title}>{keyboard.name}</h1>
        <div className={styles.price}>₹{keyboard.price}</div>
        <div className={styles.container}>
          <input
            type="number"
            className={styles.input}
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() => {
              props.handleCartItems((prevItem) => prevItem + quantity);
              props.handleCartList((prevList) => {
                if (!prevList) return [...prevList, keyboard];

                const filteredList = prevList.filter(
                  (item) => item.name !== keyboard.name
                );

                return [...filteredList, keyboard];
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Details;
