import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import styles from "./Details.module.css";

const Details = (props) => {
  const { id } = useParams();
  const { keyboards } = props;
  const [quantity, setQuantity] = useState(1);

  const keyboard = keyboards.filter((keyboard) => keyboard.id === id)[0];

  useEffect(() => {
    const currentCount = props.itemCount.find(
      (item) => item.id === keyboard.id
    );

    if (currentCount) {
      setQuantity(currentCount.count);
    }
  }, [props.itemCount]);

  return (
    <React.Fragment>
      <NavBar
        darkMode={true}
        cartItems={props.cartItems}
        itemCount={props.itemCount}
      />
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
              props.handleCartList((prevList) => {
                const filteredList = prevList.filter(
                  (item) => item.name !== keyboard.name
                );
                keyboard.quantity = quantity;

                return [...filteredList, keyboard];
              });
              props.handleItemCount((prevItem) => {
                if (!prevItem) return [{ id: keyboard.id, count: quantity }];

                const filterList = prevItem.filter(
                  (item) => item.id !== keyboard.id
                );

                return [...filterList, { id: keyboard.id, count: quantity }];
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
