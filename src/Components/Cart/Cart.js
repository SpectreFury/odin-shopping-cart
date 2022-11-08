import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import CartItem from "../CartItem/CartItem";

import styles from "./Cart.module.css";

const Cart = (props) => {
  useEffect(() => {
    let total = 0;

    props.cartList.map((item) => {
      total = total + item.quantity;
    });

    props.handleTotal(total);
  });

  return (
    <React.Fragment>
      <NavBar darkMode={true} cartItems={props.cartItems} />
      <main className={styles.cart}>
        <h1 className={styles.heading}>Cart</h1>
        <table className={styles.table}>
          <thead>
            <th className={styles.th}></th>
            <th className={styles.th}></th>
            <th className={styles.th}>Product</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Quantity</th>
            <th className={styles.th}>Subtotal</th>
          </thead>
          <tbody>
            {props.cartList.map((item) => (
              <CartItem
                item={item}
                cartList={props.cartList}
                quantity={props.quantity}
                handleCartItems={props.handleCartItems}
                handleCartList={props.handleCartList}
                key={item.id}
              />
            ))}
          </tbody>
        </table>
      </main>
    </React.Fragment>
  );
};

export default Cart;
