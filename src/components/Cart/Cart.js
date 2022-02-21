import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

export default function Cart() {
  const cartItems = [{ id: "c1", name: "Sushi", price: 12.99 }];
  return (
    <Modal>
      <ul className={styles["cart-items"]}>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
      <div></div>
    </Modal>
  );
}
