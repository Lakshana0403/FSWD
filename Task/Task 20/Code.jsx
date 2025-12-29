Ecommerce.jsx
import { useState } from "react";

function Ecommerce() {
  const products = ["Laptop", "Mobile", "Headphones", "Smartwatch"];
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product} added to cart!`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Products</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {products.map((product, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {product}{" "}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h3>Cart:</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ecommerce;

App.jsx
import Ecommerce from "./Ecommerce";

function App() {
  return (
    <div>
      <Ecommerce />
    </div>
  );
}

export default App;
