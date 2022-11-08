import React from "react";
import NavBar from "../NavBar/NavBar";
import CartItem from "../CartItem/CartItem";

import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <React.Fragment>
      <NavBar
        darkMode={true}
        cartItems={props.cartItems}
        itemCount={props.itemCount}
      />
      <main className={styles.cart}>
        <h1 className={styles.heading}>Cart</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}></th>
              <th className={styles.th}></th>
              <th className={styles.th}>Product</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}>Quantity</th>
              <th className={styles.th}>Subtotal</th>
            </tr>
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
                itemCount={props.itemCount}
                handleItemCount={props.handleItemCount}
              />
            ))}
          </tbody>
        </table>
      </main>
    </React.Fragment>
  );
};

export default Cart;
