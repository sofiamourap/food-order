import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = (value) => {
    setShowCart(value);
  };

  return (
    <>
      {showCart && <Cart onClickCart={handleShowCart} />}
      <Header onClickCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
