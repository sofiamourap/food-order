import React from "react";
import styles from "./Header.module.css";
import foodImage from "../../assets/food.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Best Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={foodImage} alt="a table with food" />
      </div>
    </>
  );
}
