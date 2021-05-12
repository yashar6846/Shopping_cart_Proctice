import React, { useState } from "react";
import Cart from "./Component/Cart";
import Manu from "./Component/Menu/Menu";
import Products from "./Component/Products";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };

  return (
    <div>
      <Manu cartCount={cart.langth} />
      <Products addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
