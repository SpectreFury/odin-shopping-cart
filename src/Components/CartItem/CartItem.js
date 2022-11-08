import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const { name, img, price, id } = props.item;
  const [cartQuantity, setCartQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(+price.replace(",", "") * cartQuantity);
  }, [cartQuantity]);

  useEffect(() => {
    const currentCount = props.itemCount.find((item) => item.id === id);
    if (currentCount) {
      setCartQuantity(currentCount.count);
    }
  }, [props.itemCount]);

  return (
    <tr>
      <td className={styles.td}>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.icon}
          onClick={() => {
            const filteredList = props.cartList.filter(
              (item) => item.name !== name
            );

            props.handleItemCount((prevItem) => {
              const filterItem = prevItem.filter((item) => item.id !== id);
              return [...filterItem];
            });

            props.handleCartList([...filteredList]);
          }}
        />
      </td>
      <td className={styles.td}>
        <img src={img} className={styles.image} />
      </td>
      <td className={`${styles.td} ${styles.name}`}>{name}</td>
      <td className={`${styles.td} ${styles.price}`}>{price}</td>
      <td className={styles.td}>
        <input
          type="number"
          min="1"
          max="10"
          className={styles.input}
          value={cartQuantity}
          onChange={(e) => {
            setCartQuantity(+e.target.value);
            props.handleItemCount((prevItem) => {
              const filterList = prevItem.filter((item) => item.id !== id);
              return [...filterList, { id: id, count: +e.target.value }];
            });
          }}
        />
      </td>
      <td className={`${styles.td} ${styles.price}`}>{subtotal}</td>
    </tr>
  );
};

export default CartItem;
