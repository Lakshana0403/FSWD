Task 22: Simple product browsing page with category-based routing (simulation)

ProductBrowsing.jsx
import { useState } from "react";

function ProductBrowsing() {
  const categories = ["Electronics", "Clothing", "Books"];
  const [selectedCategory, setSelectedCategory] = useState("");

  const products = {
    Electronics: ["Laptop", "Mobile", "Headphones"],
    Clothing: ["Shirt", "Jeans", "Jacket"],
    Books: ["React Guide", "JavaScript Basics", "HTML & CSS"],
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Product Browsing</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((cat, index) => (
          <option key={index}>{cat}</option>
        ))}
      </select>

      <hr />

      {selectedCategory && (
        <div>
          <h3>{selectedCategory} Products:</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {products[selectedCategory].map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductBrowsing;

App.jsx
import ProductBrowsing from "./ProductBrowsing";

function App() {
  return (
    <div>
      <ProductBrowsing />
    </div>
  );
}

export default App;
