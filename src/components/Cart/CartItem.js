import React from "react";
import styles from "./CartItem.module.css";

export default function CartItem({ amount, title, onRemove, onAdd, price }) {
  const totalPrice = `€${price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{title}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{totalPrice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
}
