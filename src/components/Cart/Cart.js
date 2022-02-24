import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

export default function Cart({ onClickCart }) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const handleRemoveItem = (id) => {
    cartCtx.removeItem(id);
  };

  const handleAddItem = (item) => {
    //need to add the amount because right now is 0 and the cart provider is expecting the amount
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClose={onClickCart}>
      <ul className={styles["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            amount={item.amount}
            title={item.title}
            price={item.price}
            onRemove={handleRemoveItem.bind(null, item.id)}
            onAdd={handleAddItem.bind(null, item)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles["button--alt"]}
          onClick={() => onClickCart(false)}
        >
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}
