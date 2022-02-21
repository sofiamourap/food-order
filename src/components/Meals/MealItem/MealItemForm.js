import React from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

export default function MealItemForm({ id }) {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}
