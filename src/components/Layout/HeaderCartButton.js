import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);
  const [highlightBtn, setHighlightBtn] = useState(false);

  const { items } = cartCtx;

  //not use the array.length because I want to store the same meal only once but multiple times if needed. reducing the array is a better option because I can check every item, they all have amount
  const numOfItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${highlightBtn ? styles.bump : ""}`;

  useEffect(() => {
    //this should only execute if we have at least one item in the cart
    if (items.length === 0) {
      return;
    }
    setHighlightBtn(true);

    //after the duration of the animation, setHighlightBtn to false again
    const timer = setTimeout(() => {
      setHighlightBtn(false);
    }, 300);

    //is just a good practice to cleanup side effects
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={() => onClick(true)}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{numOfItems}</span>
    </button>
  );
}
