import { useState } from "react";
import Cart from "./Component/Cart";
import Manu from "./Component/Menu/Menu";
import Products from "./Component/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((state) => [...state, product]);
  };

  const removeFromCart = (product) => {};

  return (
    <Router>
      <div>
        <Manu cartCount={cart.length} />
        <Switch>
          <Route path="/" exact>
            <Products addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
