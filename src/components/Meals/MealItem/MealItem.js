import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

export default function MealItem({ title, description, price, id }) {
  const finalPrice = `€${price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const handleAddToCart = (amount) => {
    //method in my context object in the CartProvider
    //is expecting an item for the reducer
    cartCtx.addItem({
      id: id,
      title: title,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{title}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{finalPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
}
