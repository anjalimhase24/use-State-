import "./App.css";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A premium smartphone with a vivid display",
    price: 699.99,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Laptop",
    description: "A powerful laptop for work and gaming",
    price: 1299.99,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=60",
  },
];

function App() {
  return (
    <div className="products-container">
      <h1 className="page-title">Product Cart</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;